import { useState } from "react";
import Radio from "../../ui/Radio/Radio";
import s from "./FilterCompany.module.scss";

interface ICompany {
  id: number;
  title: string;
}

const arrayListCompany: ICompany[] = [
  { id: 1, title: "Победа" },
  { id: 2, title: "Red Wings" },
  { id: 3, title: "S7 Airlines" },
];

const FilterCompany = () => {
  const [visibleRadio, setVisibleRadio] = useState<number[]>([]);

  const toggleVisible = (id: number) => {
    setVisibleRadio((p) =>
      p.includes(id) ? p.filter((i) => i !== id) : [...p, id]
    );
  };
  return (
    <div className={s.filterCompany}>
      <h2 className={s.title}>Компании</h2>
      <div className={s.filter}>
        {arrayListCompany.map((el) => (
          <div key={el.id}>
            <Radio
              visible={visibleRadio.includes(el.id)}
              onClick={() => toggleVisible(el.id)}
            />
            <label>{el.title}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCompany;
