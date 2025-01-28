import React from 'react';
import css from './Menu.module.css';

class Menu extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(
      (prevState) => ({
        visible:
          !prevState.visible,
      }),
    );
  };
  render() {
    return (
      <div
        className={
          css.container
        }
      >
        <div
          className={css.menu}
        >
          <button
            type="button"
            className={
              css.menu__btn
            }
            onClick={
              this.toggle
            }
          >
            {this.state
              .visible
              ? 'Hidden'
              : 'Show'}
          </button>
        </div>
        {this.state
          .visible && (
          <div
            className={
              css.menu__choise
            }
          >
            <p
              className={
                css.menu__text
              }
            >
              Add variant
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Menu;
