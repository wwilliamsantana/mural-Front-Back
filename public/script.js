document.addEventListener('DOMContentLoaded', () => {
  update()
})

function update() {
  fetch('http://localhost:3333/all')
    .then(element => {
      return element.json()
    })
    .then(element => {
      element.forEach(a => {
        console.log(a.title, a.description)
      })
    })
}
