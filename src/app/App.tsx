import FilterPrice from "../module/FilterPrice/FilterPrice";
import FilterCompany from "../module/FilterCompany/FilterCompany";
import FilterTrancfer from "../module/FilterTrancfer/FilterTrancfer";
import "../index.scss";
import Providers from "./providers/providers";
import AviTickets from "../module/aviTickets/aviTickets";
import { FunctionComponent } from "react";
import FilterMobile from '../module/FilterMobile/FilterMobile';

const App: FunctionComponent = () => {
  return (
    <Providers>
      <div className="container">
        <div className="header">
          <img className='logo' src="icons/logo.svg" alt="logo" />
          <h1 className="title">Поиск авиабилетов</h1>
        </div>
        <div className="main">
          <div className="filter">
            <FilterTrancfer />
            <FilterCompany />
          </div>
          <div className="content">
            <FilterPrice />
            <FilterMobile />
            <div className="tickets">
              <AviTickets />
            </div>
          </div>
        </div>
      </div>
    </Providers>
  );
};

export default App;
