import React, { Component } from 'react';
import TodoItem from './todo-item';

class TodoList extends Component{
    render(){
        return (
            <div className="list-group">
                {this.props.items.map( item => (
                    <TodoItem key={item.id} item={item} deleteItem={this.props.removeItem}/>
                ))}
            </div> 
        );
    }
}

export default TodoList;