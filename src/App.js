import './App.css';
import React ,{useState} from 'react'; 
function App() {
  const [users,setUsers] = useState([]);
  const loadUsersData  = async()=>{
  const responseData = await fetch ("https://api.github.com/users")
  const jsonResponse = await responseData.json(); 
    setUsers(jsonResponse)
}
  return (
    <div className="App">
      <h1 class="heading-1">
      <i class="fab fa-affiliatetheme"></i>DATA FETCH    
   </h1>
      <button class="button" onClick={loadUsersData}>Get Data</button>   
      <h2 class="heading-2"> USERS DATA:</h2>
      <ul id ="data">
      {users.map(({id,login,type}) =>(
          <>
          <li key = {id}>Name :{login} <br/> Type : {type}</li>
          
          </>  
        ))}
      </ul>
    </div>
  );
}

export default App;
