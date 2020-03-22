import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';


class AddNewTodo extends React.Component{
    onInputChange = event => {
        this.props.addTodo({ todo: event.target.value});
    };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.addTodo({ todo: event.target.value});
    };

    render(){
        return(
            <div className="ui todoform segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Add ToDo</label>
                    <input
                        type="text"
                        value={this.todos}
                        onChange={this.onInputChange}
                    />
                    <button 
                        type="submit" 
                        className="ui button primary"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
        );    
    }
}

const mapStateToProps = state => {
    return { todo: state.todos };
}

export default connect(mapStateToProps, { addTodo })(AddNewTodo);

