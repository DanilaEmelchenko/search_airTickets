import { FunctionComponent, useState } from "react";
import Checkbox from "../../ui/Checkbox/Checkbox";
import s from "./FilterTrancfer.module.scss";
import { useAppDispatch } from "../../hooks/redux";
import { setFilter, removeFilter } from "../../state/aviTicketsSlice";

interface ITrancfer {
  id: number;
  title: string;
  filter: string;
}

const arrayListTrancfer: ITrancfer[] = [
  { id: 1, title: "Без пересадок", filter: "noneTransfer" },
  { id: 2, title: "1 пересадка", filter: "oneTransfer" },
  { id: 3, title: "2 пересадки", filter: "twoTransfer" },
  { id: 4, title: "3 пересадки", filter: "threeTransfer" },
];

const FilterTrancfer: FunctionComponent = () => {
  const [visibleCheckbox, setVisibleCheckbox] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const toggleVisible = (id: number, filter: string) => {
    if (visibleCheckbox === id) {
      setVisibleCheckbox(null);
      dispatch(removeFilter(filter));
    } else {
      setVisibleCheckbox(id);
      dispatch(setFilter(filter));
    }
  };
  return (
    <div className={s.filterTrancfer}>
      <h2 className={s.title}>Количество пересадок</h2>
      <div className={s.filter}>
        {arrayListTrancfer.map((el) => (
          <div key={el.id}>
            <Checkbox
              visible={visibleCheckbox === el.id}
              onClick={() => toggleVisible(el.id, el.filter)}
            />
            <label>{el.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterTrancfer;
