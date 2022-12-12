// bài 5
const input = document.querySelector("#input"),
    btn_ex5 = document.querySelector(".btn_ex5"),
    result_ex5 = document.querySelector(".result_ex5")

function prime(n) {
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        if (n % i == 0)
            return false
    }
    return true
}

btn_ex5.addEventListener("click", () => {

    result_ex5.innerHTML = `All the prime numbers from 1 to ${input.value} are `

    for (let index = 1; index <= input.value * 1; index++) {
        if (prime(index))
            result_ex5.innerHTML += index + ' '
    }

})