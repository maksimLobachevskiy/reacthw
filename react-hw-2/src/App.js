import "./App.css";
import Container from "./components/container/Container";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  return (
    <div className="App">
      <Container />
      <FontAwesomeIcon icon={faHome} />
    </div>
  );
}

export default App;
