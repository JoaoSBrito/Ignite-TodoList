import { Checkbox } from '@mui/material'
import { ChangeEvent, useState } from 'react'
import styles from './Task.module.css'
import TrashIcon from './TrashIcon'

interface ITaskProps {
  id:number,
  content:string,
  isDone: boolean
  deleteTask(DeleteTaskById:number) :void,
  handleCheckbox:(id:number) => void,
}
export function Task( {id, content, isDone, deleteTask, handleCheckbox}:ITaskProps ){

  const [done, setDone] = useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.taskItem}>
          <label key={id}  className={ done === true ? `${styles.isActive}` : `${styles.isNot}` }>
            <Checkbox
            size='small'
            id={`custom-checkbox-${id}`}
            checked={isDone}
            onClick={() => handleCheckbox(id)}
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