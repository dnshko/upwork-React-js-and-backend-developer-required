
import { Provider } from "./Context";
import { Actions } from "./Actions/Actions";
import Admin from "layouts/Admin.js";

function App() {
  const data = Actions();
  return (
    <Provider value={data}>
        <Admin />
    </Provider>
  );
}

export default App;