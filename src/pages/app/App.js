import Header from "../../atoms/Header/Header";
import { useAppState } from "./state/useAppState";
import Body from "../../molecules/Body/Body";
import Loading from "../../atoms/Loading/Loading";
import "./App.css";

export const App = () => {
  const { data, isLoading, searchValue, handleChangeSearchValue, handleClickSearchValue } =
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
      <Loading isLoading={isLoading} />
    </div>
  );
};

export default App;
