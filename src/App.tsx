
import "./global.css";
import styles from './App.module.css'
import Header from './components/Header'
import { PlusCircle } from '@phosphor-icons/react'
import Task from "./components/Task";

function App() {

  return (
    <div className={styles.app}>
      <Header/>
      <main className={styles.content}>
        <div className={styles.newTask}> 
          <input placeholder="Adicione uma nova tarefa"/>
          <button>Criar<PlusCircle size={16}/></button>
        </div>

        <div className="taskWrapper">
              <header>
                <div>
                  <h2>tarefas Criadas</h2> <span>0</span>
                  <h2>tarefas Concluídas</h2> <span>0</span>
                </div>
              </header>

              {
                  <Task description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illum odio, culpa provident neque assumenda excepturi sequi quasi ab molestias officia adipisci? Molestiae, magni voluptatibus assumenda quam perspiciatis cupiditate quos."/>

              }
        </div>
      </main>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus illum odio, culpa provident neque assumenda excepturi sequi quasi ab molestias officia adipisci? Molestiae, magni voluptatibus assumenda quam perspiciatis cupiditate quos.
     
    </div>
  )
}

export default App
