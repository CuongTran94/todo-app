const initialState = {
	todoList: [],
	/*todoList: [
		{id: 1, title: 'To do', created: '7/16/2020, 12:12:01 AM', task: [
			{id: 1, content: 'task 1', time: '7/16/2020, 12:12:01 AM'},
			{id: 2, content: 'task 2', time: '7/16/2020, 12:12:01 AM'},
			{id: 3, content: 'task 3', time: '7/16/2020, 12:12:01 AM'},
		]},
	  	{id: 2, title: 'Doing', created: '7/16/2020, 12:12:01 AM', task: [
	  		{id: 1, content: 'task 4', time: '8/16/2020, 12:12:01 AM'},
			{id: 2, content: 'card 5', time: '8/16/2020, 12:12:01 AM'},
			{id: 3, content: 'card 6', time: '8/16/2020, 12:12:01 AM'},
			{id: 4, content: 'card 7', time: '8/16/2020, 12:12:01 AM'},
	  	]},
	  	{id: 3, title: 'Verify', created: '7/16/2020, 12:12:01 AM', task: []}
  	]*/
 };

const todoReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_NEW_LIST': {
			const newList = [...state.todoList];
			newList.push({
				id: action.payload.id,
				title: action.payload.title,
				created: action.payload.created,
				task: []
			});

			return {
				...state,
				todoList: newList
			}
		}

		case 'ADD_NEW_TASK': {
			const newList = [...state.todoList];
			
			const newTask = {
				id: action.payload.todo.id,
				content: action.payload.todo.title,
				time: action.payload.todo.created
			}

			const newState = newList.map(list => {
				if(list.id === action.payload.listId) {
					return {
						...list,
						task: [...list.task, newTask]
					};
				}
				else {
					return list;
				}
			});
			

			return {
				...state,
				todoList: newState
			};
		}

		case 'UPDATE_TASK': {
			const newList = [...state.todoList];
			const tempList = newList.filter(item => item.id === action.payload.listId)[0];
			
			const newTask = tempList.task.map(item => item.id === action.payload.taskId ? {...item, content: action.payload.content.text} : item);
			
			const newState = newList.map(list => {
				if(list.id === action.payload.listId) {
					return {
						...list,
						task: newTask
					};
				}
				else {
					return list;
				}
			});

			return {
				...state,
				todoList: newState
			};
		}

		case 'DELETE_TASK': {
			const newList = [...state.todoList];
			const tempList = newList.filter(item => item.id === action.payload.listId)[0];
			const newTask = tempList.task.filter(item => item.id !== action.payload.taskId);
			
			const newState = newList.map(list => {
				if(list.id === action.payload.listId) {
					return {
						...list,
						task: newTask
					};
				}
				else {
					return list;
				}
			});
			
			return {
				...state,
				todoList: newState
			};
		}

		/*case 'SET_ACTIVE_FORM': {
			const listTask = [...state.todoList];

			const newTask = listTask.map(item => item.id === action.payload.id ? {...item, isShowInput: action.payload.status} : item);

			return {
				...state,
				todoList: newTask
			}
		}*/		

		default:
			return state;
	}
}

export default todoReducer;