import { useState } from 'react'
import Clipboard from './Clipboard'
import { Task } from './Task'
import styles from './TaskContainer.module.css'
import { TaskInputBox } from './TaskInputBox'

interface ITask {
  id:number,
  content:string,
  isDone: boolean
}

export function TaskContainer() {
  const [tasks, setTasks] = useState<ITask[]>([])
  const [isChecked, setIsChecked] = useState(false)

  function handleCreateNewTask(taskContent:string) {
    const id = Math.random();

    const newTask = {
      id, 
      content: taskContent,
      isDone: isChecked
    }

    const taskList = [...tasks, newTask]
    setTasks(taskList)
  }

  function deleteTask(DeleteTaskById:number): void {
    setTasks(tasks.filter((taskName) => taskName.id !== DeleteTaskById))
  }

  // function handleCheckbox (id:number, isDone:boolean) {
  //   const taskList = tasks.map(task => {
  //     if(task.id === id)
  //      task.isDone === isDone
  //       return task
  //   })
  //   setTasks(taskList)
  // }

  // function handleCheckbox(id:number, isDone:boolean) {
  //   const taskList = tasks.map(task => {
  //     if (task.id === id) {
  //       task.isDone == !task.isDone
  //     }
  //     return task
  //   })

  //   setTasks(taskList)
  //   // console.log(setTasks)
  //   console.log(taskList)
  // }

  const handleCheckbox = (id:number) => {
    const taskIndex = tasks.findIndex((task) => {
      return task.id === id
    })
    const tempTasks = [...tasks]
    tempTasks[taskIndex].isDone = !tempTasks[taskIndex].isDone

    setTasks(tempTasks)

    console.log(tasks)
  }

  const checkIsTaskDone = tasks.filter((taskList) => {
    if (taskList.isDone === true)
     return taskList
  })

  return (
    <div className={styles.wrapper}>
      {/* INPUT BOX */}
      <TaskInputBox handleCreateNewTask={handleCreateNewTask}/>

      <div className={styles.info}>
        <div className={styles.titles}>
            <p>Tarefas Criadas <span>  {tasks.length}  </span></p>
            <p>Concluídas <span> {checkIsTaskDone.length} de {tasks.length}  </span></p>
        </div>

        <div className={styles.taskList}>
          {/* Map to add taskItem */}
          {tasks.map((task: ITask, index:number) => (
            // TASK INDIVIDUAL COMPONENT
            <Task 
              key={index}
              id={task.id}
              content={task.content}
              isDone={task.isDone}
              deleteTask={deleteTask} 
              handleCheckbox={handleCheckbox}  
            />
          ))}
        </div>

        <div className={ tasks.length >= 1  ? `${styles.isActive}` : `${styles.isNot}` }>
          <div className={styles.taskNull}>    
            <Clipboard/>
            <p><span>Você ainda não tem tarefas cadastradas</span></p>
            <p>Crie tarfeas e organize seus itens a fazer</p>
          </div>
        </div>
      </div>

       
    </div>
  )
}