import Button from "../../ui/Button/Button";
import s from "./FilterPrice.module.scss";
import { FunctionComponent, useState } from "react";
import cn from "classnames";

interface IButton {
  id: number;
  title: string;
}

const arrayButtons: IButton[] = [
  {
    id: 1,
    title: "Самый дешевый",
  },
  {
    id: 2,
    title: "Самый быстрый",
  },
  {
    id: 3,
    title: "Самый оптимальный",
  },
];

const FilterPrice:FunctionComponent = () => {
  const [active, setActive] = useState<number | null>(null);

  const toggleActive = (id: number) => {
    setActive((p) => (p === id ? null : id));
  };

  return (
    <div className={s.filterPrice}>
      {arrayButtons.map((el) => (
        <Button
          key={el.id}
          onClick={() => toggleActive(el.id)}
          className={cn(s.button, {
            [s.active]: active === el.id,
          })}
        >
          {el.title}
        </Button>
      ))}
    </div>
  );
};

export default FilterPrice;
