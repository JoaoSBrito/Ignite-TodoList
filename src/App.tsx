import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskContainer } from './components/TaskContainer'

function App() {
  

  return (
    <div className={styles.wrapper}>
      <Header/>
      <TaskContainer/>
    </div>
  )
}

export default App
