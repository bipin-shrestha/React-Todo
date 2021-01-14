import React from 'react';

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state ={
            title: ''
        }
    }
    handleChanges = e =>{
        this.setState({ title: e.target.value})
    };
    handleSubmit = e =>{
        e.preventDefault();
        this.props.addList(this.state.title)
    }
    render() {
    return (
       <form onSubmit={this.handleSubmit}>
           <input onChange={this.handleChanges} 
                  value={this.state.title}
                  type="text"
                  name="todo"/>
            <button>Submit</button>
       </form>
    );
    }
}
export default TodoForm;