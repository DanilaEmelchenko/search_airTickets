import FilterCompany from '../components/FilterCompany/FilterCompany';
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
        <FilterTrancfer />
        <FilterCompany />
      </div>
    </div>
  );
}

export default App;
