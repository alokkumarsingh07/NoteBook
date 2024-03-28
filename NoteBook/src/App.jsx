import "./App.css";
import { NotebookProvider } from "./components/NoteBookContext";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <>
      <h1>NoteBook</h1>
      <NotebookProvider>
        <MainComponent />
      </NotebookProvider>
    </>
  );
}

export default App;
