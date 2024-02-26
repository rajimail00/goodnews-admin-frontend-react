import './App.css';
import ResponsiveDrawer from './Components/Drawer/Drawer';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <div>
        <ResponsiveDrawer />
      </div>
      {/* <div>
      <Dashboard />
      </div> */}
    </div>
  );
}

export default App;
