import React, { Component, Fragment } from 'react';

export type ClassComponentProps = {
  title: string;
  subtitle: string;
};

export type ClassComponentState = {
  counter: number;
};

export class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {
  public description: string;

  constructor (props: ClassComponentProps) {
    super(props);
    this.description = '';
    this.state = {counter: 0};
  }

  handleClick = () => {
    const currentAmount = this.state.counter;
    const newAmount = currentAmount + 1;
    this.setState({counter: newAmount});
  }

  componentDidUpdate () {
    this.description = 'Awesome Description';
  }

  render () {
    return (
      <Fragment>
        <h1>{this.props.title}</h1>
        <small>{this.props.subtitle}</small>
        <p>{this.description}</p>
        <p> local state count: {this.state.counter}</p>
        <button onClick={this.handleClick} style={{color: 'white', fontWeight: 'bold', border: 0, borderRadius: 0, cursor: 'pointer'}}>UPDATE</button>
      </Fragment>
    );
  }
}

export default ClassComponent;