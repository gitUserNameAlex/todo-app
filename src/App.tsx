import React, { FC, useState, useRef } from 'react';
import { ITodo } from './Interfaces';
import Todo from './components/Todo';

const App: FC = () => {
  const [todoName,setTodoName] = useState<string>('')
  const [todoDeadline, setTodoDeadline] = useState<number>(0)
  const deadlineInputRef = useRef<HTMLInputElement>(null)
  const [todoList, setTodoList] = useState<ITodo[]>([])

  const todoNameHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoName(e.target.value)
  }

  const todoDeadlineHandler = (e : React.ChangeEvent<HTMLInputElement>): void => {
      setTodoDeadline(Number(e.target.value))
  }

  const createTodo = (): void => {
    const newTodoObj = {
      todoName: todoName,
      deadline: todoDeadline,
      id: todoList.length + 1
    }
    setTodoList([...todoList, newTodoObj])
    setTodoName('')
	setTodoDeadline(0)

    if (deadlineInputRef.current) {
			deadlineInputRef.current.value = ''
		}
  }

  const completeTodo = (idToDelete: number): void => {
    setTodoList(todoList.filter((todoObj) => {
      return todoObj.id !== idToDelete
    }))
  }
  return (
		<div className='App font-quicksand h-screen bg-gradient-to-b from-mandarineDark via-mandarine to-mandarineLight'>
			<h1 className=' pt-6 h-24 text-center font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-berryDark via-berry to-berryLight'>
				Todo App
			</h1>
			<header className=' w-full flex justify-center items-center gap-16 pt-8 pb-16'>
				<div className=' flex gap-6'>
					<input
						className=' w-52 h-10 text-base outline-none rounded-xl pl-3 border border-berry'
						type='text'
						value={todoName}
						placeholder='Todo...'
						onChange={todoNameHandler}
					></input>

					<input
						className=' w-52 h-10 text-base outline-none rounded-xl pl-3 border border-berry'
						type='number'
						placeholder='Deadline(in days)...'
						onChange={todoDeadlineHandler}
						ref={deadlineInputRef}
					></input>
				</div>

				<button
					onClick={createTodo}
					className=' w-36 h-12 rounded-xl text-lg bg-white border border-berry text-berry'
				>
					Create Todo
				</button>
			</header>
			<main className=' w-full flex items-center flex-col'>
				{todoList.map((todoObj: ITodo) => {
					return (
						<Todo
							key={todoObj.id}
							todoObj={todoObj}
							completeTodo={completeTodo}
						/>
					)
				})}
			</main>
		</div>
	)
}

export default App;
