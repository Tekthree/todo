import React, {useState, useEffect} from 'react';
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

const testUsers = {
  admin: {password:'password', name:'Administrator', role:'admin', capabilities:['create','read','update','delete']},
  editor: { password: 'password', name: 'Editor', role: 'editor', capabilities: ['read', 'update']},
  writer: { password: 'password', name: 'Writer', role: 'writer', capabilities: ['create']},
};

export const LoginContext = React.createContext();

function LoginProvider(props) {
  const [loggedIn, setLoggedIn] = useState(true);
  const [can, setCan] = useState("");
  const [login, setLogin] = useState("");
  const [ logout, setLogout] = useState();
  const [ user, setUser] = useState({capabilities:[]});
  const [token, setToken] = useState('');

  

  // can = (capability) => {
  //   return user?.capabilities?.includes(capability);
  // }

  // login = (username, password) => {
  //   if (testUsers[username]) {
  //     // Create a "good" token, like you'd get from a server
  //     const token = jwt.sign(testUsers[username], process.env.REACT_APP_SECRET);
  //     validateToken(token);
  //   }
  // }

  // logout = () => {
  //   setLoginState(false, null, {});
  // };

  // validateToken = token => {
  //   try {
  //     let user = jwt.verify(token, process.env.REACT_APP_SECRET);
  //     setLoginState(true, token, user);
  //   }
  //   catch (e) {
  //     setLoginState(false, null, {});
  //     console.log('Token Validation Error', e);
  //   }

  // };

  // setLoginState = (loggedIn, token, user) => {
  //   cookie.save('auth', token);
  //   setToken(token);
  //   setLoggedIn(loggedIn);
  //   setUser(user);
  // };

  // useEffect(()=>{
  //   const qs = new URLSearchParams(window.location.search);
  //   const cookieToken = cookie.load('auth');
  //   const token = qs.get('token') || cookieToken || null;
  //   validateToken(token);

  // },[])
  

 
    return (
      <LoginContext.Provider value={{loggedIn,can,login,logout,user,token}}>
        {props.children}
      </LoginContext.Provider>
    );
  
}

export default LoginProvider;