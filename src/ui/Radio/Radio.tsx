import { FunctionComponent } from "react";
import s from "./Radio.module.scss";

type RadioProps = {
  onClick: () => void;
  visible: boolean;
};

const Radio: FunctionComponent<RadioProps> = ({ visible, onClick }) => {
  return (
    <div onClick={onClick} className={s.radio}>
      {visible && <span></span>}
    </div>
  );
};

export default Radio;
