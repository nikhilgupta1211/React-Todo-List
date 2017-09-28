import React from 'react';

class TodoItem extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {clicked: false}
    }

    handleClick(e) {
        e.preventDefault();
        if(this.state.clicked)
            this.setState({clicked: false})
        else
            this.setState({clicked: true})     
      }
    render(){
        return (
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start" onClick={this.handleClick}>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className={this.state.clicked? 'strikeoff mb-1' : 'mb-1'} >{this.props.item.title}</h5>
                <small><button className='btn btn-link' onClick={() => this.props.deleteItem(this.props.item.id)} ><i className="material-icons">delete</i></button></small>
                </div>
                <p className={this.state.clicked? 'strikeoff mb-1' : 'mb-1'}>{this.props.item.description}</p>
            </a>
        );
    }

}

export default TodoItem;