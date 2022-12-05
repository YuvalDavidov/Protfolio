

$(document).ready(initPage)
// $('.fa-facebook').click(facebookCliked)

function facebookCliked() {
    console.log('hi');
}

function initPage() {
    console.log('Starting up');
    renderPortfolios()
    renderModal()
}

function renderPortfolios() {
    var protfolios = getProtfolios()

    var newStrHTMLs = protfolios.map(pro => ` 
        <div class="col-md-4 col-sm-6 portfolio-item ">
          <a  class="portfolio-link" data-toggle="modal" href="#${pro.id}">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/${pro.urel}.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${pro.id}</h4>
            <p class="text-muted">${pro.title}</p>
          </div>`
    )


    $('.container-profolios').html(newStrHTMLs.join(''))

}

function onRenderModal(proId, proDesc, proPublishedAt) {
    console.log('hi', proId);
    $('.modal-body h2').text(proId)
    $('.modal-body img').attr('src', `img/proj/${proId}.jpg`)
    $('.modal-body p').text(proDesc)
    $('.list-inline date span').text(proPublishedAt)

}


function renderModal() {

    var protfolios = getProtfolios()

    var newStrHTMLs = protfolios.map(pro => `
    <div class="portfolio-modal modal fade" id="${pro.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${pro.name}</h2>
                <p class="item-intro text-muted">${pro.name}</p>
                <img class="img-fluid d-block mx-auto" src="img/${pro.urel}.jpg" alt="">
                <p>${pro.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${pro.publishedAt}</li>
                  <li>Client: ${pro.id}</li>
                  <li>Category: ${pro.title}</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `)

    $('.modal-container').html(newStrHTMLs.join(''))
}