import * as React from 'react';
import { ITodo } from '../Interfaces';

export interface ITodoProps {
    todoObj: ITodo,
    completeTodo(idToDelete: number): void
}

const Todo = (props: ITodoProps) => {
  return (
		<div className=' w-todoWidth h-12 flex m-4'>
			<div className=' flex-80 h-full flex justify-center items-center text-berryDark'>
				<span className=' grid place-items-center border border-berry border-r-0 bg-white w-full h-full rounded-l-lg'>
					{props.todoObj.todoName}
				</span>
				<span className=' grid place-items-center border border-berry border-r-0 bg-white w-full h-full'>
					Deadline: {props.todoObj.deadline} days
				</span>
			</div>

			<button
				onClick={() => props.completeTodo(props.todoObj.id)}
				className=' flex-20 h-full rounded-r-lg bg-berry text-white'
			>
				Done
			</button>
		</div>
	)
}

export default Todo
