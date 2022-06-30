import { useState } from 'react'
import { FiPlusCircle, FiTrash } from 'react-icons/fi'

interface Task {
    id: number
    title: string
    isComplete: boolean
}

import style from './task.module.css'
    export function Task() {

        const [tasks, setTasks] = useState<Task[]>([])
        const [taskTitle, setTaskTitle] = useState('')

        function handleCreateNewTask() {
            event?.preventDefault()

            if(!taskTitle) return

            const newTaks = {
                id: Math.random(),
                title: taskTitle,
                isComplete: false
            }

            setTasks(oldtask => [...oldtask,newTaks])
            setTaskTitle('')
        }

        function handleCheckTask(id: number) {
            const taskcheck = tasks.map(task => task.id == id ? {
                ...task,
                isComplete: !task.isComplete
            }: task)

            setTasks(taskcheck)
        }

        function handleRemoveTask(id: number) {
            const filteredTask = tasks.filter(task => task.id != id)

            setTasks(filteredTask)
        }

        const taskComplete = tasks.filter(task => task.isComplete)


        return(
            <section className={style.section}>

                <header>
                    <form>
                        <input 
                            type="text" 
                            placeholder='Adicione uma nova tarefa'
                            onChange={(e) => setTaskTitle(e.target.value)}                      
                        />
                        <button
                         onClick={handleCreateNewTask}  
                        >
                            Criar <FiPlusCircle />
                        </button>
                    </form>
                </header>

                <main> 
                    <div className={style.headeList}>          
                        <span>Tarefas craidas <strong>{tasks.length}</strong></span>
                        <span>Concluidas <strong>{taskComplete.length}</strong> de <strong>{tasks.length}</strong></span>     
                    </div>              

                    <div>    
                        <ul>
                            {tasks.map(task => {
                                return(
                                        <li key={task.id}>
                                            <div className={task.isComplete ? style.completed : '' } data-testid="task">
                                                <label className={style.checkbox}>
                                                    <input 
                                                        type="checkbox" 
                                                        checked={task.isComplete}
                                                        onClick={() => handleCheckTask(task.id)}
                                                    />
                                                    <span></span>
                                                </label>
                                                <p>{task.title}</p>
                                            </div>

                                            <button type='button' onClick={() => handleRemoveTask(task.id)}>
                                                <FiTrash size={16}/>
                                            </button>
                                        </li>   
                                )
                                
                            })}
                                                      
                        </ul>           
                    </div>
                </main>
                
            </section>             
        )
    }