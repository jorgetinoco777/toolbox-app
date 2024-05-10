import Header from "../../atoms/Header/Header";
import { useAppState } from "./state/useAppState";
import "./App.css";
import Body from "../../molecules/Body/Body";

export const App = () => {
  const { data } = useAppState();

  return (
    <div className="App">
      <Header />
      <Body data={ data } />
    </div>
  );
};

export default App;
