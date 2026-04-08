const form = document.querySelector('#create-task-form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
})
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form')
  const input = document.querySelector('#new-task-description')
  const list = document.querySelector('#tasks')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const taskText = input.value.trim()

    if (!taskText) return

    const li = document.createElement('li')
    li.textContent = taskText

    list.appendChild(li)

    input.value = ''
  })
})