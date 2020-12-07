import React, {useState,useEffect} from 'react'
import axios from 'axios';
import { Route, Switch } from "react-router-dom";

import './App.css';
import UserList from'./components/UserList';
import UserDetails from './components/UserDetails';

function App() {
  const [users,setUsers]=useState([]);
  const [loading,setLoading]=useState(true);


  useEffect(()=>{
const getUsers = async()=> {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      // handle success
      setUsers(res.data);
      setLoading(false)
      console.log(res);
      console.log(res.data[0].address)
    }
    catch( error) {
      // handle error
      console.log(error);
    }
};   getUsers()
  },[])
  return ( loading ?<h1>loading</h1>:
    <div className="App">
      <Switch>
        <Route exact path='/'>
        <nav className="nav">
        <h1> List Of Users </h1>
      </nav>
     <UserList users={users} />
        </Route>
         <Route path="/:name"
          render={(props) => <UserDetails data={users} loading={loading} {...props} />}
        /> 
      </Switch>
    </div>
  );
}

export default App;
