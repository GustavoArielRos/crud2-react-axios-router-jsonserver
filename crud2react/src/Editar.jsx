import { useNavigate, useParams } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Editar() {

  const { id } = useParams();
  const navigate = useNavigate();

  //const [aluno, setAluno] = useState([]);
  const [alunoed, setAlunoed] = useState({
    nome:'',
    idade: 0,
    matricula: ''
  });

  const [editado,setEditado] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/alunos/" + id)
    .then(resposta => setAlunoed(resposta.data))
    .catch(err => console.log(err));


  },[]);

  const handleEdit = (e) => {
    e.preventDefault();

    if(alunoed.nome == '' || alunoed.idade <= 0 || alunoed.matricula == '')
    {
      setEditado(true);
    }
    else{
      axios.put("http://localhost:5000/alunos/" + id, alunoed)
      .then(resposta => navigate('/'))
      .catch(err => console.log(err) );
    }  
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className = 'w-50 border bg-white shadow px-5 pt-3 pb-5 rounder'>
        <h1>Editar Aluno</h1>
        <form onSubmit={handleEdit}>
          <div className='mb-2'>
              <label htmlFor="nome">Nome:</label>
              <input type="text" name="nome" className="form-control" placeholder="Enter Name"
              value={alunoed.nome}
              onChange={(e) => setAlunoed({...alunoed , nome: e.target.value})} />
          </div>
          <div className='mb-2'>
              <label htmlFor="idade">Idade:</label>
              <input type="text" name="idade" className="form-control" placeholder="Enter Name"
              value={alunoed.idade}
              onChange={(e) => setAlunoed({...alunoed ,idade: e.target.value})} />
          </div>
          <div className='mb-2'>
              <label htmlFor="nome">Matricula:</label>
              <input type="text" name="nome" className="form-control" placeholder="Enter Name"
              value={alunoed.matricula}
              onChange={(e) => setAlunoed({...alunoed ,matricula: e.target.value})} />
          </div>
          <button className='btn btn-success'>Editar</button>
          <Link to='/' className='btn btn-primary ms-3'>Voltar</Link>
          {editado && <div>Esta faltando dados para serem adicionados!</div>}{/*isso só renderiza se o state criado for "true" */}
        </form>
        
      </div>
    </div>
  );
}

export default Editar;