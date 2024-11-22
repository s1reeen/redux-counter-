import { useDispatch, useSelector } from "react-redux";
import css from "./Counter.module.css";
import { selectCounter, selectStep } from "../../redux/counter/selectors";
import {
  changeStep,
  decrement,
  increment,
  reset,
} from "../../redux/counter/actions";

const Counter = () => {
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);
  const dispatch = useDispatch();

  const handlePlusClick = () => {
    dispatch(increment());
  };

  const handleMinusClick = () => {
    dispatch(decrement());
  };

  const handleResetClick = () => {
    dispatch(reset());
  };

  const handleChangeStep = (e) => {
    dispatch(changeStep(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.count}>{counter}</h1>
      <section className={css.uiBlock}>
        <input
          type="number"
          value={step}
          className={css.step}
          onChange={handleChangeStep}
          aria-label="Change step"
        />
        <div className={css.buttonsBlock}>
          <button onClick={handleMinusClick} className={css.btn}>
            Minus
          </button>
          <button onClick={handleResetClick} className={css.btn}>
            Reset
          </button>
          <button onClick={handlePlusClick} className={css.btn}>
            Plus
          </button>
        </div>
      </section>
    </div>
  );
};
export default Counter;
