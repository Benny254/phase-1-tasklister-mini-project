//Select Form
//The form is under the id of create-task-form
//Add event listener to form
//Add submit for type of event
//Add arrow function
//Add preventDefault()

const form = document.querySelector('#create-task-form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
})

//HANDLE FORM DATA  
//Using event gather data into an object
//Use the name new-task-description to select the correct target from the event, and save to a variable.
//Create a new function called buildToDo() and call it.
//Pass in the saved task.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form')
  const input = document.querySelector('#new-task-description')
  const list = document.querySelector('#tasks')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const taskText = input.value.trim()

    if (!taskText) return

    const li = document.createElement('li')

    // ✅ THIS IS THE MISSING LINE
    li.textContent = taskText

    list.appendChild(li)

    input.value = ''
  })
})