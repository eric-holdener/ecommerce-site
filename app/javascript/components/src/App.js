import './App.css';
import HeaderFooter from './components/HeaderFooter/HeaderFooter';
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className='app-container'>
      <HeaderFooter>
        <div className='contentContainer'>
          <Outlet />
        </div>
      </HeaderFooter>
    </div>
  );
}

export default App;
