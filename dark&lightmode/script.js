const fullDarkModeCheckbox = document.querySelector('#full-dark-mode');
const containedDarkModeCheckbox = document.querySelector('#contained-dark-mode');
const container = document.querySelector('.container')

const isFullDarkMode = JSON.parse(localStorage.getItem('fullDarkModeCheckbox'))
const isContainedDarkMode = JSON.parse(localStorage.getItem('containedDarkModeCheckbox'))



fullDarkModeCheckbox.addEventListener('change', (e) => {
    changeFullDarkMode()
    changeContainedDarkMode() 
})

function changeFullDarkMode() {
    if(fullDarkModeCheckbox.checked) {
        document.body.classList.add('dark') 
        localStorage.setItem('fullDarkModeCheckbox', true)
    } else {
        document.body.classList.remove('dark')
        localStorage.setItem('fullDarkModeCheckbox', false)
    }
    containedDarkModeCheckbox.checked = fullDarkModeCheckbox.checked

    
}

function changeContainedDarkMode() {

    if(containedDarkModeCheckbox.checked)  {
      
        container.classList.add('dark')
        localStorage.setItem('fullDarkModeCheckbox', true)
    } else {
      
        container.classList.remove('dark')
        localStorage.setItem('fullDarkModeCheckbox', false)
    }
}

containedDarkModeCheckbox.addEventListener('change', changeContainedDarkMode)