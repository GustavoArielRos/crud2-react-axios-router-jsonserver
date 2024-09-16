
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Criar() {

  const navigate = useNavigate();

  const [aluno, setAluno] = useState({
    nome: '',
    idade: 0,
    matricula: '',
  });

  //criei isso para renderizar algo caso o usuário não digite corretamente
  const [criado,setCriado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //esse if vai impedir dele enviar dados vazios
    if(aluno.nome == '' || aluno.idade <= 0 || aluno.matricula == '')
    {
      setCriado(true);
    }
    else{
      axios.post("http://localhost:5000/alunos",aluno)
      .then(resposta => {
        navigate('/');
      })
      .catch(err => console.log(err));
    }
  }
    

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className = 'w-50 border bg-white shadow px-5 pt-3 pb-5 rounder'>
        <h1>Adicionar Aluno</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-2'>
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" className="form-control" placeholder="Enter Name"
              onChange={(e) => setAluno({...aluno , nome: e.target.value})} />
          </div>
          <div className='mb-2'>
              <label htmlFor="idade">Idade:</label>
              <input type="text" name="idade" className="form-control" placeholder="Enter Name"
              onChange={(e) => setAluno({...aluno ,idade: e.target.value})} />
          </div>
          <div className='mb-2'>
              <label htmlFor="nome">Matricula:</label>
              <input type="text" name="nome" className="form-control" placeholder="Enter Name"
              onChange={(e) => setAluno({...aluno ,matricula: e.target.value})} />
          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to='/' className='btn btn-primary ms-3'>Voltar</Link>
          {criado && <div>Esta faltando dados para serem adicionados!</div>}{/*isso só renderiza se o state criado for "true" */}
        </form>
        
      </div>
    </div>
  );
}

export default Criar;
