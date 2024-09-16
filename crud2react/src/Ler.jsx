import axios from 'axios';
import './App.css';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Ler() {

  const [aluno, setAluno] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:5000/alunos/"+ id)
    .then(resposta => setAluno(resposta.data))
    .catch(err => console.log(err));

  },[]);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Detalhes do Aluno</h3>
        <div className='mb-2'>
          <strong>Name: {aluno.nome}</strong>
        </div>
        <div className='mb-2'>
          <strong>Idade: {aluno.idade}</strong>
        </div>
        <div className='mb-2'>
          <strong>Matricula: {aluno.matricula}</strong>
        </div>
        <Link to='/' className='btn btn-primary ms-2'>Voltar</Link>
      </div>
      
    </div>
  );
}

export default Ler;