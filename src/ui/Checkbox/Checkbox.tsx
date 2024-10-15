import s from "./Checkbox.module.scss";

interface CheckboxProps {
  onClick: () => void;
  visible: boolean;
}

const Checkbox = ({ onClick, visible }: CheckboxProps) => {
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
