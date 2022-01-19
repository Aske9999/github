import React, {useState} from "react";
import axios from "axios";
import {API_BASE} from "../constants/api";
import {Link} from "react-router-dom";

const MainPage = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")

  const changeName = (e) => {
    setName(e.target.value.trim())
  }

  const findUsers = () => {
    axios(`${API_BASE}/search/users?q=${name}`)
      .then(({data}) => {
        setUsers(data.items)
      })
}

  return (
    <div className="container mx-auto">
      <div className="flex justify-end py-6">
        <input onChange={changeName} className="mr-5 rounded" type="text"/>
        <button onClick={findUsers} className="text-blue-800 font-bold hover:text-yellow-500" type="button">Search</button>
      </div>
      <div>
        {
          users?.map(user => {
            return (
              <Link key={user.id} to={`/users/${user.login}`}>
                <h1 className="text-white text-xl font-bold">{user.login}</h1>
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};

export default MainPage;