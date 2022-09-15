document.querySelector('#cardButton').addEventListener('click', getFetch)
document.querySelector('#optionAButton').addEventListener('click', optionA)
document.querySelector('#optionBButton').addEventListener('click', optionB)

let optionAText = ''
let optionBText = ''

function getFetch(){
  let cardNumber = Math.floor(Math.random()*69)
  //const choice = document.querySelector('input').value
  //console.log(choice)
  const url = `http://gloomhavendb.com/api/events/road/${cardNumber}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        optionAText = data.optionA.outcome
        optionBText = data.optionB.outcome
        document.querySelector('img').src = 'http://gloomhavendb.com' + data.imageUrl
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
    }

function optionA () {
  document.querySelector('h3').innerText = optionAText
}

function optionB() {
  document.querySelector('h3').innerText = optionBText
}
