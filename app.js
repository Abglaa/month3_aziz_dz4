const wrapper = document.querySelector('.wrapper')

const request = new XMLHttpRequest()
request.open("GET", "persons.json")
request.setRequestHeader("Content-type", "application/json")
request.send()

request.onload = () => {
    const data = JSON.parse(request.response)

    data.map((item) => {

        const card = document.createElement('div')
        card.classList.add('card')

        const age = document.createElement('p')
        const name = document.createElement('p')
        const img = document.createElement('img')


        name.textContent = `Имя: ${item.name}`
        age.textContent = `Возраст:${item.age}`
        img.src = item.img

        card.append(img, name, age,)

        wrapper.appendChild(card)
    })
}

//homework4 part2

// const request = new XMLHttpRequest();
// request.open("GET", "data.json");
// request.setRequestHeader("Content-type", "application/json");
// request.send();
//
// request.addEventListener('load', () => {
//     console.log(JSON.parse(request.response))
// })
