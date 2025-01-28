import css from './Counter.module.css';
const Controls = ({
  onIncrement,
  onDecrement,
}) => {
  return (
    <div
      className={
        css.counter__container
      }
    >
      <button
        type="button"
        className={
          css.counter__btn
        }
        onClick={onIncrement}
      >
        Inctease
      </button>
      <button
        type="button"
        className={
          css.counter__btn
        }
        onClick={onDecrement}
      >
        Dectease
      </button>
    </div>
  );
};

export default Controls;
