import logo from './logo.svg';
import './App.css';
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import IleDniDoUrlopu from "./components/IleDniDoUrlopu";
import Task3 from "./components/Task3";
import Chapter2Task1 from "./components/Chapter2/Chapter2Task1";
import Chapter3Task3 from "./components/Chapter3/Chapter3Task3";
import Chapter3Task4 from "./components/Chapter3/Chapter3Task4";
import Search from "./components/Chapter4/Search";
import LikeBox from "./components/Chapter4/LikeBox";
import Menu from "./components/Chapter4/Menu";
import Hello from "./components/Chapter5/Hello";

function App() {
    const menuElements = [
        {
            url: "/",
            text: "Strona główna"
        },
        {
            url: "/blog",
            text: "Blog"
        },
        {
            url: "/cennik",
            text: "Cennik"
        },
        {
            url: "/kontakt",
            text: "Kontakt"
        }
    ];

  return (
    <div className="App">
      <header className="App-header">
        {/*<Task1 />*/}
        {/*<Task2 />*/}
        {/*<IleDniDoUrlopu />*/}
        {/*<Task3 />*/}
        {/*<Chapter2Task1 />*/}
        {/*<Chapter3Task3 />*/}
        {/*<Chapter3Task4 />*/}
        <Search />
        <LikeBox likes={300}/>
        <LikeBox likes={234}/>
        <LikeBox likes={123}/>
        <Menu elements={menuElements} />
        <Hello name="Grzegorz" surnname="Kowalski" />
        <Hello name="Johny" surnname="Rambo" />
        <Hello name="Iga" surnname="Świątek" />
      </header>
    </div>
  );
}

export default App;
