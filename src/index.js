import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/navbar';
import Input from './components/input';
import TodoList from './components/todo-list';

class App extends Component{
    constructor(props){
        super(props);
        this.pSubmit = this.pSubmit.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.state = { items: [] }
    }
    render(){
        return (
            <div className="container">
                <Nav />
                <br />
                <Input pSubmit={this.pSubmit}/>
                <br />
                <TodoList items={this.state.items} removeItem={this.removeItem}/>
            </div>
        );
    }

    pSubmit(items){
        this.setState({items: items});
    }

    removeItem(id){
        const items = this.state.items;
        const index = this.state.items.findIndex((element) => element.id === id);
        
        if(index===-1) return;
        items.splice(index,1);

        this.setState({items: items});
    }
}

ReactDOM.render(<App />, document.getElementById('root'));