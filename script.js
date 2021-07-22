const questionsCont = document.querySelectorAll('.questions-cont')

questionsCont.forEach((cont) => {
    const btn = cont.querySelector('.arrow')
    const activeH2 = cont.querySelector('.question')
    const activePar = cont.querySelector('.answer')

    btn.addEventListener('click', () => {
        btn.classList.toggle('active-arrow')
        activeH2.classList.toggle('active-h2')
        activePar.classList.toggle('active-p')
    })

    activeH2.addEventListener('click', () => {
        btn.classList.toggle('active-arrow')
        activeH2.classList.toggle('active-h2')
        activePar.classList.toggle('active-p')
    })
})

//When grabbing the button, activeH2, and the activePar, make sure you do querySelector for the cont,
//Not the whole document which only grabs the first one and not the rest
//Grabbing it within the cont grabs each element within that container instead of only the 1st element of the whole document.