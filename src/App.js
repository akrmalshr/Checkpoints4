import logo from './logo.svg';
import './App.css';
import FullName from './compent/profile/FullName';
import Address from './compent/profile/Address';
import ProfilePhoto from './compent/profile/ProfilePhoto'
function App() {
  return (
    <div className="App">
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
