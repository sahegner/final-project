(async () => {

    const h1 = document.querySelector('h1')
    const span = document.querySelector('span')

    const h2 = document.querySelector('h2')
    const image = document.querySelector('img')

    const { pathname } = window.location
    const [ , searchType ] = pathname.split('/')

    const url = searchType === 'food' ? `food/${id}` : `/index.html`

    const response = await fetch(`/api/v1${url}`)
    const json = await response.json()

    const { name, description, price, img } = json

    h1.textContent = name;
    
})