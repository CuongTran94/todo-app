import React from 'react';
import { Form, Input, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { v1 as uuid } from 'uuid';
import { FormInstance } from 'antd/lib/form';
import PropTypes from 'prop-types';
import './style.scss';

const { TextArea } = Input;

const TaskInput = (props) => {
	const { onCloseForm, onSubmitList, list } = props;

	const marginBtn = list ? '0' : '8px';
	const paddingInput = list ? '8px' : '0';
	const formRef = React.createRef();

	const handleSubmit = (values) => {
		
		if(typeof(values.text) !== 'undefined' && values.text.trim() !== "" && onSubmitList) {
			const newList = {
				id: uuid(),
				title: values.text.trim(),
				created: new Date().toLocaleString()
			};
			
			onSubmitList(newList);
			handleClose();
			
		}
		else {
			return;
		}		
	};

	const handleClose = () => {
		if(onCloseForm){
			onCloseForm();
		}
		
	}

	return (
		<Form 			
			onFinish={handleSubmit}
			className="form-task"
			style={{padding: paddingInput}}
		>	
			<Form.Item style={{marginBottom: marginBtn, paddingBottom: paddingInput}} name="text">
				{list ? <Input /> : <TextArea rows={4} className="form-text" />}
			</Form.Item>
			<Form.Item style={{marginBottom: marginBtn}}>
				<Button type="primary" htmlType="submit" className="form-btn-add">
		          {list ? 'Add list' : 'Add cart'}
		        </Button>
		        <a className="form-btn-close" onClick={handleClose}><FontAwesomeIcon icon={faTimes} /></a>
			</Form.Item>
		</Form>
	);
}

TaskInput.propTypes = {
	onCloseForm: PropTypes.func,
	onSubmitList: PropTypes.func,
	list: PropTypes.string
};

TaskInput.defaultProps = {
	onCloseForm: null,
	onSubmitList: null,
	list: null
};

export default TaskInput;