import { useState } from 'react';

import { Container } from './styles';
import {api} from '../services/api'

import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';



function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState ([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`repos/${currentRepo}`)

    if(data.id) {
      const ifExist = repos.find(repo => repo.id === data.id);

      if(!ifExist){
      setRepos(prev=> [...prev, data]);
      setCurrentRepo('');
      return
      }
    }
    alert('Repositório não encontrado')
  }

  const handleRemoveRepo = (id) => {
    setRepos([...repos].filter(repo => repo.id !== id))
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt='GitHub Logo' />
      <h1> Crie uma lista de repositórios do GitHub! </h1>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
  );
}

export default App;
