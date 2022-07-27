const container = document.querySelector('.container')

function createTag(element) {
    return document.createElement(element)
}

function add(parent, element) {
    return parent.appendChild(element)
}

for (let i = 1; i <= 150; i++) {
    url = `https://pokeapi.co/api/v2/pokemon/${i}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const div = createTag('div')
            div.classList.add('card')
            add(container, div)

            const h1 = createTag('h1')
            h1.classList.add('pokemon_name')
            add(div, h1)

            const img = createTag('img')
            img.classList.add('pokemon_image')
            add(div, img)

            const p = createTag('p')
            p.classList.add('pokemon_type')
            add(div, p)

            const p2 = createTag('p')
            p.classList.add('pokemon_type')
            add(div, p2)

            h1.innerHTML = data.name
            img.src = data.sprites['front_default']

            p.innerHTML = data.types['0'].type.name
            p2.innerHTML = data.types['1'].type.name
        })
        .catch(e => console.log(e))
}
