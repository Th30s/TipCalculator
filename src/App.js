import "./styles.css";
import ResultPrice from "./components/resultPrice";
import InputPrice from "./components/inputPrice";
import SelectTip from "./components/tipPercent";
import Enter from "./components/enter";


export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ResultPrice inputPrice={100} tipPrecent={25}/>
      <InputPrice />
      <SelectTip />
      {/*<Enter />*/}

    </div>
  );
}
