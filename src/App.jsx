import { useState } from 'react'
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar programação',
      description: 'Apronfundar conhecimento em ReactJS e NextJS',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Estudar teologia',
      description: 'Ler livro do Nicodemus',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Treinar',
      description: 'Today is chest day!!!',
      isCompleted: false
    }
  ])

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {

      //Preciso atualizar essa tarefa   
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      //Não preciso atualizar essa tarefa
      return task
    })

    setTasks(newTasks)
  }


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl tsxt-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        <AddTask />
      </div>

    </div>

  )
}
export default App