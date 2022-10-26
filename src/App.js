import "./App.css";
import ListComponent from "./components/ListComponent";
import CounterComponent from "./components/CounterComponent";
import { useState } from "react";
import FilterableProductTable from "./components/FilterableProductTable";

const App = () => {
  // const [counter, setCounter] = useState(0);
  // const onClickHandlerP = () => {
  //   setCounter((prevState) => prevState + 1);
  // };
  // const onClickHandlerM = () => {
  //   setCounter((prevState) => prevState - 1);
  // };

  // let isVis = true;
  return (
    <div className="App">
      {/*<ListComponent />*/}
      {/*<CounterComponent*/}
      {/*  counter={counter}*/}
      {/*  onClickPlus={onClickHandlerP}*/}
      {/*  onClickMinus={onClickHandlerM}*/}
      {/*  isVis={isVis}*/}
      {/*/>*/}
      {/*<CounterComponent counter={counter} />*/}
      <FilterableProductTable />
    </div>
  );
};

export default App;
