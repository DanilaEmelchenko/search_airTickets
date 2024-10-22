import { FunctionComponent, useState } from "react";
import Radio from "../../ui/Radio/Radio";
import s from "./FilterCompany.module.scss";
import { useAppDispatch } from "../../hooks/redux";
import { setFilter } from "../../state/aviTicketsSlice";

interface ICompany {
  id: number;
  title: string;
  filter: "Победа" | "Red Wings" | "S7 Airlines";
}

const arrayListCompany: ICompany[] = [
  { id: 1, title: "Победа", filter: "Победа" },
  { id: 2, title: "Red Wings", filter: "Red Wings" },
  { id: 3, title: "S7 Airlines", filter: "S7 Airlines" },
];

const FilterCompany: FunctionComponent = () => {
  const [visibleRadio, setVisibleRadio] = useState<number[]>([]);
  const dispatch = useAppDispatch();

  const toggleVisible = (
    id: number,
    filter: "Победа" | "Red Wings" | "S7 Airlines"
  ) => {
    setVisibleRadio((prev) => {
      if (prev.includes(id)) {
        const newVisible = prev.filter((i) => i !== id);
        dispatch(
          setFilter(
            newVisible.length > 0
              ? newVisible
                  .map(
                    (companyId) =>
                      arrayListCompany.find(
                        (company) => company.id === companyId
                      )?.filter
                  )
                  .join("|")
              : ""
          )
        );
        return newVisible;
      } else {
        const newVisible = [...prev, id];
        dispatch(
          setFilter(
            newVisible
              .map(
                (companyId) =>
                  arrayListCompany.find((company) => company.id === companyId)
                    ?.filter
              )
              .join("|")
          )
        );
        return newVisible;
      }
    });
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
