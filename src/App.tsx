import "./global.css";
import { ChangeEvent, useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import { PlusCircle } from "@phosphor-icons/react";
import Task, { TaskType } from "./components/Task";
import { EmptyList } from "./components/EmptyList";

function App() {
  const [newTask, setNewTask] = useState<TaskType>({} as TaskType);
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  const createdCounter = taskList.length
  const doneCounter = taskList.filter(task => task.done===true).length

  function handleCreateNewTask(event: ChangeEvent<HTMLInputElement>) {
    const description = event.target.value;
    const done = false;
    const id = crypto.randomUUID();
    const createdAt = Date.now()
    setNewTask({ description, done, id, createdAt });
  }

  function handleSubmitNewTask() {
    event?.preventDefault();
    if (newTask.description.length !== 0) {
      setTaskList((prevState) => [...prevState, newTask]);
      setNewTask({description: ""} as TaskType)
    }
  }
  function handleInputKeyEnter(event: { key: string; }){
    if(event.key==="Enter"){
      handleSubmitNewTask();
    }
  }

  function handleDeleteTask (id: string){
    const taskListFiltered = taskList.filter(
      task => task.id !== id
    )
    setTaskList(taskListFiltered);
  } 

  function compareCreatedAt(a: TaskType ,b: TaskType) {
    return a.createdAt - b.createdAt
  }

  function handleToggleDone(id: string){
    const [task] = taskList.filter(task => task.id ===id)
    const taskUpdated = {...task, done: !task.done}
    
    const taskListFiltered = taskList.filter(
      task => task.id !== id
    )
    setTaskList([...taskListFiltered, taskUpdated].sort(compareCreatedAt))

  } 

 console.log(taskList)
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.content}>
        <form className={styles.newTask}>
          <input
            placeholder="Adicione uma nova tarefa"
            onChange={(event) => handleCreateNewTask(event)}
            value={newTask.description}
            onKeyDown={handleInputKeyEnter}
            required
          />
          <button className={styles.submit} type="submit" onClick={handleSubmitNewTask}>
            Criar
            <PlusCircle size={16} />
          </button>
        </form>

        <div className={styles.taskWrapper}>
          <header>
            <div className={styles.info}>
              <h2>
                Tarefas Criadas <span>{createdCounter}</span>
              </h2>
              <h2>
                Tarefas Concluídas <span>{doneCounter>0 ? `${doneCounter} de ${createdCounter}`: doneCounter }</span>
              </h2>
            </div>
          </header>
          <div className={styles.taskList}>
            {taskList.length === 0 ? (
              <EmptyList />
            ) : (
              taskList.map((task) => (
                <Task
                  key={task.id}
                  data={task}
                  onDelete={handleDeleteTask}
                  onDone={handleToggleDone}
                />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
