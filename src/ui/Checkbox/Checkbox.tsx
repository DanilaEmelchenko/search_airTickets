import { FunctionComponent } from "react";
import s from "./Checkbox.module.scss";

type CheckboxProps = {
  onClick: () => void;
  visible: boolean;
};

const Checkbox: FunctionComponent<CheckboxProps> = ({ onClick, visible }) => {
  return (
    <div onClick={onClick} className={s.checkbox}>
      {visible && (
        <div>
          <img src="icons/checkbox.svg" alt="icon" />
        </div>
      )}
    </div>
  );
};

export default Checkbox;
