import Button from "../../ui/Button/Button";
import s from "./FilterPrice.module.scss";
import { FunctionComponent, useState } from "react";
import cn from "classnames";
import { useAppDispatch } from "../../hooks/redux";
import { setFilter } from "../../state/aviTicketsSlice";

interface IButton {
  id: number;
  title: string;
  filter: "cheap" | "fast" | "optimal";
}

const arrayButtons: IButton[] = [
  {
    id: 1,
    title: "Самый дешевый",
    filter: "cheap",
  },
  {
    id: 2,
    title: "Самый быстрый",
    filter: "fast",
  },
  {
    id: 3,
    title: "Самый оптимальный",
    filter: "optimal",
  },
];

const FilterPrice: FunctionComponent = () => {
  const [active, setActive] = useState<number | null>(null);
  const dispatch = useAppDispatch();

  const toggleActive = (id: number, filter: "cheap" | "fast" | "optimal") => {
    if (active === id) {
      setActive((p) => (p === id ? null : id));
      dispatch(setFilter("all"));
    } else {
      setActive((p) => (p === id ? null : id));
      dispatch(setFilter(filter));
    }
  };

  return (
    <div className={s.filterPrice}>
      {arrayButtons.map((el) => (
        <Button
          key={el.id}
          onClick={() => toggleActive(el.id, el.filter)}
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
