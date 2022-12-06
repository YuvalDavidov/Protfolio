

$(document).ready(initPage)
// $('.fa-facebook').click(facebookCliked)

function facebookCliked() {
  console.log('hi');
}

function initPage() {
  console.log('Starting up');
  renderPortfolios()
  addContactEventListener()
}

function addContactEventListener() {
  $('.btn-contact-form').on('click', function (e) {
    e.preventDefault()
    var email = $('#userEmail').val()
    var subject = $('#subject').val()
    var msg = $('#message').val()
    sendContactMsg(email, subject, msg)
    $('#userEmail').val('')
    $('#subject').val('')
    $('#message').val('')
  })
}

function sendContactMsg(email, subject, msg) {
  const emailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=yuval838@gmail.com&su=${subject}&body=${msg}`
  window.open(emailLink)
}

function renderPortfolios() {
  var protfolios = getProtfolios()

  var newStrHTMLs = protfolios.map(proj => ` 
        <div class="col-md-4 col-sm-6 portfolio-item ">
          <a  data-proj-id="${proj.id}"
          class="protfolio-link" 
          data-toggle="modal"
           href="#portfolioModal1"
           >
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
             
              </div>
            </div>
            <img class="img-fluid" 
            src="img/projs/${proj.id}.jpg">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.id}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>`
  )


  $('.container-profolios').html(newStrHTMLs.join(''))
  addPortfolioEventListener()
}


function renderModal(projId) {
  var proj = getProjById(projId)
  var date = getHumanDate(proj.publishedAt)

  var strHTML = `
  <h2>${proj.name}</h2>
  <p class="item-intro text-muted">
  ${proj.title}
  </p>
  <img
    class="img-fluid d-block mx-auto"
    src="img/portfolio/${proj.id}.png"
    alt="${proj.title}"
    title="${proj.title}"
  />
  <p>
    ${proj.desc}
  </p>
  <ul class="list-inline">
    <li>Date: ${date}</li>
    <li>Category: ${proj.category}</li>
  </ul>
  <button
    data-proj-id="${proj.id}"
    class="btn btn-primary btn-open-proj"
    type="button"
  >
    Open Project
  </button>
  <button
    class="btn btn-primary"
    data-dismiss="modal"
    type="button"
  >
    <i class="fa fa-times"></i>
    Close Project
  </button>
  `

  $('.modal-body').html(strHTML)
  addPortfolioEventListener()
}

function addPortfolioEventListener() {
  $('.protfolio-link').on('click', function () {
    const projId = $(this).data('projId')
    renderModal(projId)

  })

  $('.btn-open-proj').on('click', function () {
    const projId = $(this).data('projId')
    goToProj(projId)
  })
}

function goToProj(projId) {
  var proj = getProjById(projId)
  var projLink = proj.url
  window.open(projLink, ' _blank')
}