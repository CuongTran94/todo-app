import React from 'react';
import { Form, Input, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { v1 as uuid } from 'uuid';
import './style.scss';

const { TextArea } = Input;

const TaskInput = (props) => {
	const { onCloseForm, onSubmitList, list } = props;
	//console.log(props);
	/*const { isShow, card, onCloseInput, onSubmit } = props;

	const handleSubmit = (values) => {
		const newTask = {
			id: uuid(),
			content: values.task,
			time: new Date().toLocaleString()
		};
		onSubmit(values);
	};

	const handleClose = (card) => {
		const newStatus = {
			id: card.id,
			status: false
		};

		onCloseInput(newStatus);
	}*/

	const handleSubmit = (values) => {		
		const newList = {
			id: uuid(),
			title: values.text,
			created: new Date().toLocaleString()
		};
		
		onSubmitList(newList);
	};

	const handleClose = () => {
		onCloseForm();
	}

	return (
		<Form 			
			onFinish={handleSubmit}
		>	
			<Form.Item name="text">
				<TextArea rows={4} className="form-text" />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit" className="form-btn-add">
		          {list ? 'Add list' : 'Add cart'}
		        </Button>
		        <a className="form-btn-close" onClick={handleClose}><FontAwesomeIcon icon={faTimes} /></a>
			</Form.Item>
		</Form>
	);
}

export default TaskInput;