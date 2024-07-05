import { RouterProvider } from "react-router-dom";
import "./index.css";
import { routes } from "./Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
