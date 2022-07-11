import { home, universe, explore, background } from './elements.js'

export function Background() {
    universe.addEventListener('click', function () {
        background.style.background =
            'url("/img/mountains-universe-2.png") no-repeat right top fixed'
        background.style.backgroundSize = 'cover'
    })

    home.addEventListener('click', function () {
        background.style.background =
            'url("/img/mountains-universe-1.png") no-repeat right top fixed'
        background.style.backgroundSize = 'cover'
    })

    explore.addEventListener('click', function () {
        background.style.background =
            'url("/img/mountains-universe-3.png") no-repeat right top fixed'
        background.style.backgroundSize = 'cover'
    })
}
