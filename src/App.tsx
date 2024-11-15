import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [user, setUser] = useState<[]>([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then((res) => {
        setUser(res.data.users);
        console.log(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {user.map((user: any) => {
        return <div>{user.firstName}</div>;
      })}
    </>
  );
}

export default App;
