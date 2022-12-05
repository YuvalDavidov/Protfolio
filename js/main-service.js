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
        urel: `projs/${id}`,
        publishedAt: Date.now(),
        labels: ["Matrixes", "keyboard events"]
    }
}

function getProtfolios() {
    return gProtfolios
}