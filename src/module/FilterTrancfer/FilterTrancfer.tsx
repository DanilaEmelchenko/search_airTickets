import { FunctionComponent, useState } from "react";
import Checkbox from "../../ui/Checkbox/Checkbox";
import s from "./FilterTrancfer.module.scss";

interface ITrancfer {
  id: number;
  title: string;
}

const arrayListTrancfer: ITrancfer[] = [
  { id: 1, title: "Без пересадок" },
  { id: 2, title: "1 пересадка" },
  { id: 3, title: "2 пересадки" },
  { id: 4, title: "3 пересадки" },
];

const FilterTrancfer:FunctionComponent = () => {
  const [visibleCheckbox, setVisibleCheckbox] = useState<number | null>(null);

  const toggleVisible = (id: number) => {
    setVisibleCheckbox(p => p === id ? null : id);
  };
  return (
    <div className={s.filterTrancfer}>
      <h2 className={s.title}>Количество пересадок</h2>
      <div className={s.filter}>
        {arrayListTrancfer.map((el) => (
          <div key={el.id}>
            <Checkbox
              visible={visibleCheckbox === el.id}
              onClick={() => toggleVisible(el.id)}
            />
            <label>{el.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterTrancfer;
