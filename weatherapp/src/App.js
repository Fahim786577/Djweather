//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import WeatherCard from './components/WeatherCard';
import AirQualityCard from './components/AirQualityCard';
import WeatherToday from './components/WeatherToday';
import Stack from '@mui/material/Stack';
import Sidebar from './components/Sidebar';
import "./fonts/Poppins-ExtraLight.ttf";
import "./fonts/Poppins-Regular.ttf";
import "./fonts/Caveat-Medium.ttf";

// <header className="App-header">
function App() {
 
  return (
    <div className="App">
      <Stack direction="row">
          <Sidebar/>
          <Stack> 
                <Navbar/>
                  <div style={{marginTop:50}}></div>
                <Menu/>
                
                <Stack direction="row" style={{marginTop:-430}}>
                  <div><WeatherCard/></div>
                  <div style={{marginLeft:450}}><AirQualityCard/></div>
                </Stack>
                <div style={{marginTop:345,marginLeft:120}}><WeatherToday/></div>     
            </Stack>
      </Stack>
    </div>
  );
}

export default App;
