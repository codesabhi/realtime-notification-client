import React, { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import {posts} from './data';

function App() {
  const [userName, setUserName] = useState<string>("");
  const [user, setUser] = useState<string>("");

  return (
    <div className="container">
      {user ? (
        <>
          <Navbar />
          {posts.map(post => (
          <Card key={post.id} post={post} />
          ))}
          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <input
            type="text"
            placeholder="username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUserName(e.target.value)
            }
          />
          <button onClick={() => setUser(userName)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
