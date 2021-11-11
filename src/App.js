import { useState } from 'react'
import './App.css';

// import Login from './Components/Login'
// import Profile from './Components/Profile'
// import { LoginContext } from './Contexts/LoginContext'

import Nav from './Components/Nav/Nav'
import CartList from './Components/Cart/CartList';

import { CartProvider } from './Contexts/CartContext'

function App() {

  // const [showProfile, setShowProfile] = useState(false);
  // const [username, setUsername] = useState("");
  return (

    <div className="App">
      <header className="App-header">

        {/* <LoginContext.Provider value={{ username, setUsername, setShowProfile }}>

          {showProfile ? <Profile /> : <Login />}
          
        </LoginContext.Provider> */}

        <CartProvider>
          <Nav />
          <CartList />
        </CartProvider>

      </header>
    </div>
  );
}

export default App;
