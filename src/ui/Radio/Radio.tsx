import s from "./Radio.module.scss";

interface RadioProps {
  onClick: () => void;
  visible: boolean;
}

const Radio = ({ visible, onClick }: RadioProps) => {
  return (
    <div onClick={onClick} className={s.radio}>
      {visible && <span></span>}
    </div>
  );
};

export default Radio;
