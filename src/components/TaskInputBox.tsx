import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './TaskInputBox.module.css'

interface TaskInputProps {
  handleCreateNewTask: (task:string) => void
}
export function TaskInputBox({handleCreateNewTask}:TaskInputProps) {

  const [task, setTask] = useState('')

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault()
    handleCreateNewTask(task)
    setTask('')
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newTask = event.target.value
    setTask(newTask)
  }

  const isInputValueEmpty = task.length === 0


  return (
     <div className={styles.wrapper}>
        <form 
        onSubmit={handleSubmitForm}
        className={styles.todoForm}
        >
            <input 
            name="text"
            type="text"
            placeholder="Adiciona uma nova tarefa!"
            value={task}
            onChange={handleChange}
            required
            />

            <button
            type="submit"
            // onClick={() => handleCreateNewTask}
            disabled={isInputValueEmpty}
            >
              Criar
              <PlusCircle size={18} />
            </button>
          </form>
     </div>
  )
}