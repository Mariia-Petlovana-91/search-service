import React from 'react';
import css from './Counter.module.css';

import Controls from './Controls';

class Counter extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     value: 9,
  //   };
  // }-----так бабл робить за нас класи у реакт зараз ми пишемо state = {value: 0,}; це рівнозначно і відбувається те саме
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: 0,
  };
  handleIncrement = () => {
    // this.setState({ value: 123 }); ----коли ми хочемо буквально оновити,записати поверх попереднього значення.
    this.setState(
      (prevState) => {
        return {
          value:
            prevState.value +
            1,
        };
      },
    );
    // ------використовуємо setState і передаємо стрілочну функцію якщо хочемо оновити значення враховуючи попередній стан
  };
  handleDecrement = () => {
    this.setState(
      (prevState) => {
        return {
          value:
            prevState.value -
            1,
        };
      },
    );
  };

  render() {
    return (
      <div
        className={
          css.counter
        }
      >
        <h2
          className={
            css.counter__title
          }
        >
          Counter
        </h2>
        <span
          className={
            css.counter__value
          }
        >
          {this.state.value}
        </span>
        <Controls
          onIncrement={
            this
              .handleIncrement
          }
          onDecrement={
            this
              .handleDecrement
          }
        />
      </div>
    );
  }
}

export default Counter;
