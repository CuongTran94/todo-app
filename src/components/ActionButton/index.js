import React, {useState} from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TaskInput from '../TaskInput';
import { useDispatch } from 'react-redux';
import { CartTextContainer, CartAddText } from './style';
import { addNewList, addNewTask } from '../../actions/todo';
import PropTypes from 'prop-types';

const ActionButton = (props) => {
	const { list, listId } = props;
	const dispatch = useDispatch();
	const buttonText = list ? "Add another list" : "Add another card";
	const [formOpen, setFormOpen] = useState(false);

	const handleOpenForm = () => {
		setFormOpen(true);
	}

	const handleCloseForm = () => {
		setFormOpen(false);
	}

	const handleAddList = (list) => {
		const action = addNewList(list);
		dispatch(action);
	}

	const handleAddTask = (task) => {		
		const action = addNewTask(listId, task);
		dispatch(action);
	}

	if(!formOpen) {
		return (
			<CartTextContainer list={list} onClick={handleOpenForm} onBlur={handleCloseForm}>
				<PlusOutlined />
					<CartAddText>
			          {buttonText}
			        </CartAddText>
			</CartTextContainer>
		);
	} else {
		return <TaskInput list={list} onCloseForm={handleCloseForm} onSubmitList={list ? handleAddList : handleAddTask} />;
	}
	
}

ActionButton.propTypes = {
	list: PropTypes.string,
	listId: PropTypes.string,
};

ActionButton.defaultProps = {
	list: null,
	listId: null
};

export default ActionButton;