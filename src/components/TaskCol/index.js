import React from 'react';
import { Col, Card } from 'antd';
import { Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { removeTask, updateTask } from '../../actions/todo';
import { EllipsisOutlined } from '@ant-design/icons';
import TaskItem from '../TaskItem';
import TaskInput from '../TaskInput';
import ActionButton from '../ActionButton';
import PropTypes from 'prop-types';
import './style.scss';

const { Title } = Typography;
const bodyStyle = {
	padding: '0 8px',
	background: '#ebecf0',
};

const headStyle = {
	borderBottom: 'none',
	background: '#ebecf0',
	padding: '0 14px'
};

const TaskCol = (props) => {
	const { title, cards, listId } = props;

	const dispatch = useDispatch();
	
	const handleRemoveTask = (taskId) => {
		const action = removeTask(listId, taskId);
		dispatch(action);
	};

	const handleEditTask = (taskId, value) => {
		const action = updateTask(listId, taskId, value);
		dispatch(action);
	}


	return (
		<Col 
			span={4}
			className="todo-col"
		>
			<Card 
				title={<Title className="todo-col-title" level={4}>{title}</Title>} 
				extra={<a className="todo-col-menu"><EllipsisOutlined /></a>}
				bodyStyle={bodyStyle}
				headStyle={headStyle}
			>
				<TaskItem cards={cards} onRemoveTask={handleRemoveTask} onUpdateTask={handleEditTask}  />
				<ActionButton listId={listId} />
				
			</Card>
		</Col>
	);
}

TaskCol.propTypes = {
	title: PropTypes.string.isRequired,
	cards: PropTypes.array,
	listId: PropTypes.string.isRequired
};

TaskCol.defaultProps = {
	cards: [],
};

export default TaskCol;