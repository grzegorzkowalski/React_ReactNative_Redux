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
import AddNumbers from "./components/Chapter5/AddNumbers";
import Sum from "./components/Chapter5/Sum";
import CurrencyConverter from "./components/Chapter5/CurrencyConverter";
import ParentComponent from "./components/Chapter6/ParentComponent";
import ChildComponent from "./components/Chapter6/ChildComponent";
import GrandchildComponent from "./components/Chapter6/GrandchildComponent";

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
        <AddNumbers numberA={5} numberB={7} numberC={12} />
        <Sum numbers={[1,2,3,4]} />
        <CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
        <CurrencyConverter from="EUR" to="PLN" value={200} rate={4.5} />
        <CurrencyConverter from="EUR" to="CZK" value={200} rate={24} />
        <ParentComponent>
            <ChildComponent>
                <GrandchildComponent>
                    <h4>To działa!</h4>
                </GrandchildComponent>
            </ChildComponent>
        </ParentComponent>
      </header>
    </div>
  );
}

export default App;
