
import { makeStyles } from '@material-ui/core';
import './App.css';
import Navbar from './Component/Navbar';
import MainRoutes from './Pages/MainRoutes';

function App() {

  const useStyles = makeStyles(()=>({
    App:{
      background:"black",
      color : "white",
      minHeight:"100vh"
    }
  }))

  const classes = useStyles()
  const {App} = classes
  return (
    <div  className={App}>
      <Navbar/>
      <MainRoutes/>
    
    </div>
  );
}

export default App;
