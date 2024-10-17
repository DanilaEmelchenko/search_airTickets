import FilterPrice from "../components/FilterPrice/FilterPrice";
import FilterCompany from "../components/FilterCompany/FilterCompany";
import FilterTrancfer from "../components/FilterTrancfer/FilterTrancfer";
import "../index.scss";
import Providers from "./providers/providers";
import AviTickets from '../features/aviTickets/aviTickets';

function App() {
  return (
    <Providers>
      <div className="container">
        <div className="header">
          <img src="icons/logo.svg" alt="logo" />
          <h1 className="title">Поиск авиабилетов</h1>
        </div>
        <div className="main">
          <div className="filter">
            <FilterTrancfer />
            <FilterCompany />
          </div>
          <div className="content">
            <FilterPrice />
            <div className='tickets'>
              < AviTickets />
            </div>
          </div>
        </div>
      </div>
    </Providers>
  );
}

export default App;
