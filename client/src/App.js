import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Register from "./components/Register";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Register />
        </header>
      </div>
    </Provider>
  );
}

export default App;
