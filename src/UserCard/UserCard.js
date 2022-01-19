import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_BASE} from "../constants/api";
import {Link, useParams} from "react-router-dom";
import '../UserCard/UserCard.css'

const UserCard = () => {
  const {name} = useParams()
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])

  useEffect(() => {
    axios(`${API_BASE}/users/${name}`)
      .then(({data}) => {
        setUser(data)
      })
    axios(`${API_BASE}/users/${name}/repos`)
      .then(({data}) => {
        setRepos(data)
      })

  }, [name])

  return (
    <div>
      <div className="container mx-auto py-6 card grid grid-cols-2">
        <div className="user-pic-box flex justify-center">
          <div><img className="rounded-lg" src={`https://avatars.githubusercontent.com/u/${user.id}?v=4`} alt=""/></div>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-5">{user.login}</h4>
          <div className="text-white mb-3">Created: <span className="text-yellow-400 font-bold">{user.created_at?.slice(0, 10)}</span></div>
          <hr/>
          <div className="text-white mb-2 uppercase">Repositories:</div>
          <div className="flex flex-wrap">
            {
              repos?.map(item => {
                return (
                  <Link key={item.id} to={`/users/${user.login}/repositories/${item.name}`} className="w-1/3 text-green-700">{item.name}</Link>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;