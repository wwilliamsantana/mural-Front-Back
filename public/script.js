document.addEventListener('DOMContentLoaded', () => {
  update()
})

function update() {
  fetch('http://localhost:3333/all')
    .then(element => {
      return element.json()
    })
    .then(element => {
      let posts = ' '
      element.forEach(post => {
        posts += `<div class="card mb-2 text-center">
                     <div class="card-body">
                       <h5 class="card-title">${post.title}</h5>
                       <p class="card-text">${post.description}</p>
                    </div>
                 <div class="card-footer text-muted">Atual: ${post.date}</div>
               </div>`
      })
      document.getElementById('cards').innerHTML += posts
    })
}

function newPost() {
  let title = document.getElementById('inputTitle').value
  let description = document.getElementById('inputDescription').value

  let post = { title, description }

  let options = {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(post)
  }

  fetch('http://localhost:3333/new', options).then(res => {
    update()
  })
}
