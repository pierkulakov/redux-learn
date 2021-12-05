import './App.css';
import Balance from "./Balance";
import store from "./redux/store";

function App() {
    return (
        <div className="App wrapper">
            <Balance store={store}></Balance>
        </div>
    );
}

export default App;
