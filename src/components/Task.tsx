import { Checkbox } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import styles from './Task.module.css'
import TrashIcon from './TrashIcon'

interface ITaskProps {
  id:number,
  content:string,
  isDone: boolean
  deleteTask(DeleteTaskById:number) :void,
  handleCheckbox:(id:number, isDone:boolean) => void,
  isChecked:boolean
  setIsChecked:(isChecked:boolean) => void
}
export function Task( {id, content, isDone, deleteTask, handleCheckbox, isChecked, setIsChecked}:ITaskProps ){

  const [done, setDone] = useState(isDone)

  function handleDone(event: ChangeEvent<HTMLInputElement>) {
    setDone(event.target.checked)
    handleCheckbox(id, event.target.checked)
    setIsChecked(!isChecked)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.taskItem}>
          <label  className={ done === true ? `${styles.isActive}` : `${styles.isNot}` }>
            <Checkbox
            size='small'
            key={id}
            checked={isChecked}
            onChange={handleDone}
            />
            {content}
          </label>
        </div>

        <div className={styles.trash} onClick={() => deleteTask(id)}>
          <TrashIcon />
        </div>

        
      </div>
    </div>
  )
}