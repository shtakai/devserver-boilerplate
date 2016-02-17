import React from 'react';

class Todo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  refCallback(ref) {
    this.inputRef = ref;
  }

  handleOnClick() {
    this.setState({
      list: [...this.state.list, this.inputRef.value]
    })
  }

  render() {
    const { buttonLabel } = this.props;
    return (
      <div>
        <input ref={::this.refCallback} type='text'/>
        <button onClick={::this.handleOnClick}>{buttonLabel}</button>
        <ul>
          {this.state.list.map((value, index) => <li key={index}>{value}</li>)}
        </ul>
      </div>
    ) 
  }
}

export default Todo;