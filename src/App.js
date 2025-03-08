import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import RootContainer from "./containers/root";
import "./custom-bootstrap.scss";
import * as ServiceWorkerRegistration from "./serviceWorkerRegistration";
import "./assets/styles/main.scss"
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <RootContainer />
    </div>
  );
}
ServiceWorkerRegistration.register();

export default App;
