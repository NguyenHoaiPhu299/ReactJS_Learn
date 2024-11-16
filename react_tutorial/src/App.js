import logo from './logo.svg';
import './App.css';
import ReactJSX from './Section1/ReactJSX/ReactJSX';
import ReactJS from './Section1/ReactJSX/ReactJS';
import Expressions from './Section1/ReactJSX/Expressions';
import Car_Class from './Section1/ReactComponent/ClassComponent';
import Car_Function from './Section1/ReactComponent/FunctionComponent';
import CarProps from './Section1/ReactComponent/Props';
import GarageCIC from './Section1/ReactComponent/ComponentInComponent';
import GarageCIF from './Section1/ReactComponent/GarageCIF';

function App() {
  return (
    <div className="App">
      {/* <ReactJS /> */}
      {/* <ReactJSX /> */}
      {/* <Expressions /> */}
      {/* <Car_Class /> */}
      {/* <Car_Function /> */}
      {/* <CarProps color="red"/> */}
      {/* <GarageCIC /> */}
      <GarageCIF />
    </div>
  );
}

export default App;
