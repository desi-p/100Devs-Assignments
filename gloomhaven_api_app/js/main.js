//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `http://gloomhavendb.com/api/events/road/${Math.floor(Math.random()*69)}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.id)
        //let imgUrl = 'http://gloomhavendb.com' + data.imageUrl
        document.querySelector('img').src = 'http://gloomhavendb.com' + data.imageUrl
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

