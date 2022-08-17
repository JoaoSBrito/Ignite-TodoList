import { useState } from 'react'
import Clipboard from './Clipboard'
import styles from './TaskContainer.module.css'
import { TaskInputBox } from './TaskInputBox'



interface ITask {
  id:number,
  content:string,
  isDone: boolean
}

export function TaskContainer() {
  const [tasks, setTasks] = useState<ITask[]>([])

  const checkIsTaskDone = tasks.filter(task => {
    if (task.isDone === true) return task
  })

  function handleCreateNewTask(taskContent:string) {
    const id = Math.random();

    const newTask = {
      id, 
      content: taskContent,
      isDone: false
    }

    const taskList = [...tasks, newTask]
    setTasks(taskList)
  }

  function handleDeleteTask(id:number, isDone:boolean) {
    const newTaskList = tasks.map(task => {
      if(task.id === id ) task.isDone === isDone
      return task
    })
    setTasks(newTaskList)
  }

  return (
    <div className={styles.wrapper}>
      {/* INPUT BOX */}
      <TaskInputBox handleCreateNewTask={handleCreateNewTask}/>

      <header className={styles.info}>
        <div className={styles.titles}>
            <p>Tarefas Criadas <span>  {tasks.length}  </span></p>
            <p>Concluídas <span> {checkIsTaskDone.length} de {tasks.length}  </span></p>
        </div>

        <div className={styles.taskList}>
          {/* Map to add taskItem */}
          {/* {tasks.map((task,key) => (
            // TASK INDIVIDUAL COMPONENT
          ))} */}
        </div>

        <div className={ tasks.length >= 1  ? `${styles.isActive}` : `${styles.isNot}` }>
          <div className={styles.taskNull}>    
            <Clipboard/>
            <p><span>Você ainda não tem tarefas cadastradas</span></p>
            <p>Crie tarfeas e organize seus itens a fazer</p>
          </div>
        </div>
      </header>

       
    </div>
  )
}