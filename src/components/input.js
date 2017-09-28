import React from 'react';

class Input extends React.Component{
    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);        
        this.state = { items: [], title: '', description: ''}
    }
    render(){
        return(
            <section>
                <form onSubmit={this.submit}>
                    <div className="row">
                        <div className="col-md-4 form-group">
                            <label htmlFor="title">Title</label>
                            <input name="title" className="form-control" value={this.state.title} onChange={event => this.setState({title: event.target.value})}/>
                        </div>
                        <div className="col-md-8 form-group">
                            <label htmlFor="description">Description</label>
                            <input name="discription" className="form-control" value={this.state.description} onChange={event => this.setState({description: event.target.value})}/>
                        </div>
                        <div className="col-md-12">
                            <button className="btn btn-primary btn-block">Add</button>
                        </div>
                    </div>        
                </form>    
            </section>
        );
    }

    submit(e){
        e.preventDefault();
        if(this.state.title!==''){
            var newItem = {
                id: Date.now(),
                title: this.state.title,    
                description: this.state.description
            };
            this.setState((prevState) => ({
                items: prevState.items.concat(newItem),
                title: '',
                description: ''
            }), () => this.props.pSubmit(this.state.items));
        }
    }
}

export default Input;