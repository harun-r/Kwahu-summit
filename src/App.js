import "./assets/scss/app.scss"
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <div className="app-main">
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;
