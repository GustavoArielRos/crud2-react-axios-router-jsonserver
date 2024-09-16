import React from 'react'
import {useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

  const [dados, setDados] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/alunos")
    .then(resposta => setDados(resposta.data))
    .catch(err => console.log(err));
  }, [])

  const handleDelete = (id) => {

    const resposta = window.confirm("Deseja mesmo deletar esse aluno");

    if(resposta)
    {
        axios.delete("http://localhost:5000/alunos/"+ id)
        .then(res =>{
            window.location.reload();
        })
        .catch(err => console.log(err));
    }

    
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>Lista de Alunos</h1>
      <div className= 'w-75 rounded bg-white border shadow p-4'>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <td>Nome</td>
                    <td>Idade</td>
                    <td>Matricula</td>
                    <td>Ação</td>
                </tr>
            </thead>
            <tbody>
                {
                    dados.map((aluno,indice) => (
                        <tr key={indice}>
                            <td>{aluno.nome}</td>
                            <td>{aluno.idade}</td>
                            <td>{aluno.matricula}</td>
                            <td>
                                <Link to={`/ler/${aluno.id}`} className='btn btn-sm btn-info me-2'>Detalhes</Link>
                                <Link to={`/editar/${aluno.id}`} className='btn btn-sm btn-primary me-2'>Editar</Link>
                                <button onClick={e => handleDelete(aluno.id)} className='btn btn-sm btn-danger'>Deletar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            
        </table>
        <div className='d-flex justify-content-end'>
                <Link to="/criar" className='btn btn-success'>Adicionar Aluno</Link>
            </div>
      </div>
    </div>
  );
}

export default Home;