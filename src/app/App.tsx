import Filter from '../components/Filter/Filter';
import FilterCompany from "../components/FilterCompany/FilterCompany";
import FilterTrancfer from "../components/FilterTrancfer/FilterTrancfer";
import "../index.scss";

function App() {
  return (
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
          <Filter />
        </div>
      </div>
    </div>
  );
}

export default App;
