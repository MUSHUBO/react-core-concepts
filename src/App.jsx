import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';


const fetchUsers = fetch(`https://jsonplaceholder.typicode.com/users`)
  .then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  return res.json();
};



function App() {

  const friendsPromise = fetchFriends();

  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<h3>Waiting...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>


    </>
  )
}

export default App
