import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_BASE} from "../constants/api";
import {useParams} from "react-router-dom";
import ReactMarkdown from "react-markdown";

const Repositories = () => {
  const {repo, name} = useParams()
  const [repos, setRepos] = useState({})
  const [readMe, setReadMe] = useState("")

  useEffect(() => {
    axios(`${API_BASE}/repos/${name}/${repo}`)
      .then(({data}) => setRepos(data))

    axios(`https://raw.githubusercontent.com/${name}/${repo}/master/README.md`)
      .then(({data}) => setReadMe(data))
  }, [name, repo])
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-white text-3xl">{repos?.name}</h1>
      <div className="text-yellow-700 mb-5">({repos.created_at?.slice(0, 10)})</div>
      <div>
        <ReactMarkdown>{readMe}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Repositories;