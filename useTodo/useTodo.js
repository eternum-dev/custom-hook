import { useEffect, useReducer } from "react";
import { todoReducer } from "todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: '[TODO] remove todo',
            payload: id
        }

        dispatch(action)
    }

    const handleToogleTodo = (id) => {
        const action = {
            type: '[TODO] Toogle todo',
            payload: id
        }

        dispatch(action)
    }

    const todosCount = todos.length;
    const trueTodos = todos.filter(todo => todo.done).length


    return {
        todos,
        todosCount,
        pendingTodosCount,
        handleToogleTodo,
        handleDeleteTodo,
        handleNewTodo,

    }

}
