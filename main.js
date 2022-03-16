const $ = document.querySelector.bind(document)
const loadTasks = () =>{
const tasksStr = localStorage.getItem('tasks')
if(tasksStr) {
  const tasks = JSON.parse(tasksStr)
  tasks.foreEach((t)=>{
    const newTaskItem = `
    <li>${t} </li>
    `
    $('#task-list').insertAdjacentHTML('beforrend', newTaskItem)
  })
}
}

loadTasks()

const addTask = (event) => {
  event.preventDefault()
  console.log('Entrou')
  const taskDescription = $('#task-description').value

  const newTaskItem = `
  <li>${taskDescription} </li>
  `
  $('#task-list').insertAdjacentHTML('beforeend', newTaskItem)
  $('#task-form').reset()
  savetask(taskDescription)
}

const savetask = (task) => {
  let tasksStr = localStorage.getItem('tasks')
  let tasks = []
  if (tasksStr) {
    tasks = JSON.parse(tasksStr)
  }
  tasks.push(task)
  tasksStr = JSON.stringify(tasks)
  localStorage.setItem('tasks', tasksStr)

}