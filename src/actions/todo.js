
export const addNewList = (list) => {
	return {
		type: 'ADD_NEW_LIST',
		payload: list
	};
}

export const addNewTask = (listId, todo) => {
	return {
		type: 'ADD_NEW_TASK',
		payload: {todo, listId}
	};
}

export const updateTask = (listId, taskId, content) => {
	return {
		type: 'UPDATE_TASK',
		payload: {listId, taskId, content}
	};
}

export const removeTask = (listId, taskId) => {
	return {
		type: 'DELETE_TASK',
		payload: {listId, taskId}
	}
}

export const setActiveForm = (todo) => {
	return {
		type: 'SET_ACTIVE_FORM',
		payload: todo
	}
}