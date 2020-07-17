import React from 'react';
import TaskCol from './components/TaskCol';
import ActionButton from './components/ActionButton';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import { Row, Col } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

function App() {
  // state to management task and show column
  const todoList = useSelector(state => state.todo.todoList);

  return (
    <div className="todo-container">
      <div className="todo-wrapper">
        <Row   
          gutter={[8, 0]}
          className="todo-content"
          style={{'flexFlow': 'row nowrap', 'msFlexFlow': 'row nowrap'}}
        >

          {todoList.map(item => (
            <TaskCol 
              key={item.id}
              listId={item.id}
              title={item.title} 
              cards={item.task}               
            />
          ))}
          <Col 
            span={4}
            className="todo-col"
          >
            <ActionButton list={"true"} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
