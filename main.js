let menuBtn = document.getElementById('menu-btn')
let linkContainer = document.getElementById('link-container')
let closeMenuBtn = document.getElementById('close-menu-btn')

menuBtn.addEventListener('click', () => {
    // console.log('TEST');
    linkContainer.classList.toggle('show')
    document.body.style.overflowY = 'hidden'

})

closeMenuBtn.addEventListener('click', () => {
    linkContainer.classList.toggle('show')
    document.body.style.overflowY = 'unset'
})

let illustratorImages = document.querySelectorAll('#view-image')
let chosenImage = document.getElementById('zoomed-picture')
let zoomImage = document.getElementById('zoom-image')

illustratorImages.forEach((img, i) => {
    img.addEventListener('click', () => {
        // console.log(illustratorImages[i].attributes.src.value)
        zoomImage.classList.add('show-zoom')
        document.body.style.overflowY = 'hidden'
        chosenImage.attributes.src.value = illustratorImages[i].attributes.src.value
        
    })
})

zoomImage.addEventListener('click', () => {
    zoomImage.classList.remove('show-zoom')
    document.body.style.overflowY = 'unset'
    chosenImage.attributes.src.value = ''
})