const url = 'https://api.adviceslip.com/advice'
const idNumber = document.querySelector('#number-advice')
const message = document.querySelector('#message')
const btn = document.querySelector('.btn')

function advice() {
    fetch(url, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
        idNumber.innerText = data.slip.id
        message.innerText = data.slip.advice
    })
}

advice()

btn.addEventListener('click', (e) => {
    e.preventDefault()

    advice()
})