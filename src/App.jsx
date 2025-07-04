import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
