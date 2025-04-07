import './App.css'
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';
import Posts from './posts';


const fetchUsers = fetch(`https://jsonplaceholder.typicode.com/users`)
  .then(res => res.json())

const fetchFriends = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  return res.json();
};

const fetchPosts = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return res.json();
}


function App() {

  const friendsPromise = fetchFriends();
  const postsPromise = fetchPosts();

  return (
    <>
      <h1>Vite + React</h1>

      <Suspense fallback={<h3>Posts Loading...</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

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
