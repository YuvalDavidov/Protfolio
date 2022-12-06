var gProtfolios = creatProtfolios()

function creatProtfolios() {
    return gProtfolios = [
        creatProtfolio('mine-sweeper', 'mine-sweeper project', makeLorem(10)),
        creatProtfolio('picture-game', 'picture-game project', makeLorem(10)),
        creatProtfolio('touch-the-numbers', 'touch-the-numbers project', makeLorem(10)),
        creatProtfolio('pacman', 'pacman project', makeLorem(10)),

    ]
}

function creatProtfolio(id, title, desc) {
    return {
        id,
        name: id,
        title,
        desc,
        url: `https://yuvaldavidov.github.io/${id}/`,
        publishedAt: Date.now(),
        labels: ["Matrixes", "keyboard events"]
    }
}

function getProtfolios() {
    return gProtfolios
}
function getProjById(projId) {
    const proj = gProtfolios.find((proj) => projId === proj.id)
    return proj
}

function getHumanDate(timestamp) {
    const date = new Date(timestamp)
    var humanDate = date.toDateString()
    return humanDate
}