import { FunctionComponent, useState } from "react";
import s from "./FilterMobile.module.scss";
import FilterCompany from "../FilterCompany/FilterCompany";
import FilterTrancfer from "../FilterTrancfer/FilterTrancfer";

const FilterMobile: FunctionComponent = () => {
  const [active, setActive] = useState<boolean>(false);

  const clickActive = () => {
    setActive((p) => !p);
  };

  return (
    <div className={s.filterMobile__wrapper}>
      <div className={s.filterMobile__header}>
        <h4 className={s.title}>Любая авиакомпания, любое кол-во пересадок</h4>
        <div onClick={clickActive} className={s.settings}>
          <p className={s.settingsOpen}>Открыть настройки</p>
          <img className={s.icon} src="icons/arrowDropDown.svg" alt="arrow" />
        </div>
      </div>
      {active && (
        <div className={s.filterMobile__main}>
          <FilterCompany />
          <FilterTrancfer />
        </div>
      )}
    </div>
  );
};

export default FilterMobile;
