import { FunctionComponent, useState } from "react";
import Radio from "../../ui/Radio/Radio";
import s from "./FilterCompany.module.scss";
import { useAppDispatch } from "../../hooks/redux";
import { setFilter, removeFilter } from "../../state/aviTicketsSlice";

interface ICompany {
  id: number;
  title: string;
  filter: string;
}

const arrayListCompany: ICompany[] = [
  { id: 1, title: "Победа", filter: "Победа" },
  { id: 2, title: "Red Wings", filter: "Red Wings" },
  { id: 3, title: "S7 Airlines", filter: "S7 Airlines" },
];

const FilterCompany: FunctionComponent = () => {
  const [visibleRadio, setVisibleRadio] = useState<number[]>([]);
  const dispatch = useAppDispatch();

  const toggleVisible = (id: number, filter: string) => {
    if (visibleRadio.includes(id)) {
      setVisibleRadio((p) => p.filter((i) => i !== id));
      dispatch(removeFilter(filter));
    } else {
      setVisibleRadio((p) => [...p, id]);
      dispatch(setFilter(filter));
    }
  };

  return (
    <div className={s.filterCompany}>
      <h2 className={s.title}>Компании</h2>
      <div className={s.filter}>
        {arrayListCompany.map((el) => (
          <div key={el.id}>
            <Radio
              visible={visibleRadio.includes(el.id)}
              onClick={() => toggleVisible(el.id, el.filter)}
            />
            <label>{el.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCompany;
