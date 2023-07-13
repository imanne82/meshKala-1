let btnChangeFormSinUp = document.querySelector('.laterSinUp')
let btnChangeFormLogin = document.querySelector('.laterLogin')
let formLogin = document.querySelector('.login')
let formSingUp = document.querySelector('.singUp')
let flagChangeForm = true

btnChangeFormSinUp.addEventListener('click', function (event) {
    event.preventDefault()
    if (flagChangeForm) {
        formSingUp.style.display = 'none'
        formLogin.style.display = 'block'
        flagChangeForm = false
        alert('تغییر به فرم ورود')
    }

})
btnChangeFormLogin.addEventListener('click', function (event) {
    event.preventDefault()
    if (!flagChangeForm) {
        formSingUp.style.display = 'block'
        formLogin.style.display = 'none'
        flagChangeForm = true
        alert('تغییر به فرم ثبت نام')

    }


})