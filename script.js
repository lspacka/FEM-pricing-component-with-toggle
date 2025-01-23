const check = document.getElementById('toggle')
const slider = document.querySelector('.slider')
const basic = document.querySelector('.basic')
const pro = document.querySelector('.pro')
const master = document.querySelector('.master')
let anual = true

// check.value = 'off'

console.log('init check.value =', check.value)
// console.log(slider.value)

check.addEventListener('click', (e) => {
    anual = !anual
    // console.log(e)
    // console.log(anual)
    console.log('click check.value = ', check.value)
    if (anual) {
        basic.textContent = '$199.99'
        pro.textContent = '$249.99'
        master.textContent = '$399.99'
    } else {
        basic.textContent = '$19.99'
        pro.textContent = '$24.99'
        master.textContent = '$39.99'
    }
})