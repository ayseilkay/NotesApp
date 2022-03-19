import Content from "components/Content";
import Header from "components/Header";
import List from "components/List";
import Search from "components/Search";

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Content/>
      <List/>
    </div>
  );
}

export default App;
