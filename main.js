const navLinks = document.getElementById('nav-links')
const mobileBars = document.getElementById('mobile-bars-btn')
const closeMenuBtn = document.getElementById('close-menu-btn')

mobileBars.addEventListener('click', ()=> {
    navLinks.classList.toggle('show')
})

closeMenuBtn.addEventListener('click', ()=> {
    navLinks.classList.remove('show')
})


const tabBtnContainer = document.getElementById('tab-btn-container')
const tabBtns = document.querySelectorAll('.tab-btn')
const tabContents = document.querySelectorAll('.tab-content')

tabBtnContainer.addEventListener('click', (e) => {
    const selectedBtn = e.target

    if(selectedBtn.classList.contains('tab-btn')) {
        const subjectName = selectedBtn.getAttribute('data-subject')

        tabContents.forEach(content => {
            content.style.display = 'none'
        })

        tabBtns.forEach(btn => {
            btn.classList.remove('active')
        })

        document.getElementById(subjectName).style.display = 'grid'

        selectedBtn.classList.add('active')
    }

})
document.querySelector('.tab-btn').click();


// view images close up
let illustratorImages = document.querySelectorAll('#view-image')
let zoomImageContainer = document.getElementById('zoom-image-container')
let chosenZoomedImage = document.getElementById('chosen-zoomed-image')

illustratorImages.forEach((image, i) => {
    image.addEventListener('click', () => {
        zoomImageContainer.classList.add('active')
        document.body.style.overflowY = 'hidden'
        chosenZoomedImage.attributes.src.value = illustratorImages[i].attributes.src.value
    })
})

zoomImageContainer.addEventListener('click', () => {
    zoomImageContainer.classList.remove('active')
    document.body.style.overflowY = 'initial'
})