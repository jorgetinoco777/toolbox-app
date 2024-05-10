import Header from "../../atoms/Header/Header";
import { useAppState } from "./state/useAppState";
import "./App.css";
import Body from "../../molecules/Body/Body";

export const App = () => {
  const { data, searchValue, handleChangeSearchValue, handleClickSearchValue } =
    useAppState();

  return (
    <div className="App">
      <Header />
      <Body
        searchValue={searchValue}
        data={data}
        handleChangeSearchValue={handleChangeSearchValue}
        handleClickSearchValue={handleClickSearchValue}
      />
    </div>
  );
};

export default App;
