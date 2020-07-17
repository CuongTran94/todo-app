import React, {useState} from 'react';
import { List, Form, Input, Button } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

const { TextArea } = Input;

const TaskItem = (props) => {
	const { cards, onRemoveTask, onUpdateTask } = props;
	const [isEdit, setIsEdit] = useState('');

	const handleRemoveTask = (taskId) => {
		onRemoveTask(taskId);
	};

	const handleChangeEdit = (taskId) => {
		setIsEdit(taskId);
	};

	const handleSubmit = (value) => {
		onUpdateTask(isEdit, value);
		setIsEdit('');
	};

	return (
		<List
			itemLayout="horizontal"
			dataSource={cards}
			className="task" 
			locale={{emptyText: " "}}
			renderItem={item => {
				if(item.id === isEdit) {
					return (
						<List.Item className="task-item">
							<Form 			
								onFinish={handleSubmit}
								className="task-form"
								initialValues={{
						        	'text': item.content
						      	}}
							>	
								<Form.Item name="text">
									<TextArea rows={4} className="form-text" />
								</Form.Item>
								<Button type="primary" htmlType="submit" className="form-btn-edit">
						          Save
						        </Button>
							</Form>
						</List.Item>
					);
				}
				else {
					return (
						<List.Item 
							className="task-item"
							actions={
								[<a key="task-item-edit" className="task-item-edit" onClick={() => handleChangeEdit(item.id)}><FontAwesomeIcon icon={faPen} /></a>, 
								<a key="task-item-delete" className="task-item-delete" onClick={() => handleRemoveTask(item.id)}><FontAwesomeIcon icon={faTrash} /></a>]}
						>
							<List.Item.Meta
								title={<span className="task-time"><CalendarOutlined /> {item.time}</span>}
								description={<span className="task-content">{item.content}</span>}
							/>
						</List.Item>
					);
				}
				
				
			}}
		/>
	);
}

export default TaskItem;