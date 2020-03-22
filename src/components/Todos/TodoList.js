import React from 'react';
import { connect } from 'react-redux';
import AddNewTodo from './addNewTodo';

class TodoList extends React.Component{
   
    renderList(){
        return this.props.todos.map(todo=>{
            return(
                <div>
                    {todo.item}
                    <button 
                        //onClick={()=>this.props.deleteTodo(id)} 
                        className="ui button negative"
                    >
                        Delete
                    </button>
                </div>
            );
        });
    };
    

    render() {
        return (
            <div>
                <AddNewTodo />
            </div>
        );
    }
}
    
const mapStateToProps = (state) => {
    return { todos: Object.values(state.todos)};
}

export default TodoList;//connect(mapStateToProps, null)(TodoList);