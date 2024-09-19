const aluno = {
  nome: "",
  idade: 0,
  matricula: "",
  curso: ""
};

const TurmaInicial =  [ {
    nome: "João Silva",
    idade: 20,
    matricula: "202301",
    curso: "Ciência da Computação"
},
{
    nome: "Maria Sampaio",
    idade: 22,
    matricula: "202302",
    curso: "Medicina"
},
{
    nome: "Pedro Souza",
    idade: 19,
    matricula: "202303",
    curso: "Direito"
},
{
    nome: "Ana Costa",
    idade: 21,
    matricula: "202304",
    curso: "Administração"
},
{
    nome: "Lucas Pereira",
    idade: 23,
    matricula: "202305",
    curso: "Ciência da Computação"
}
]

const adicionarAluno = (nome, idade, matricula, curso, lista) => {
    const novoAluno = {
        ...aluno,
        nome: nome,
        idade: idade,
        matricula: matricula,
        curso: curso
    };

    return lista.concat(novoAluno);
};

const Turma = adicionarAluno("Dalbert Sousa", 20, 20220,"Engenharia Agrônoma", TurmaInicial)

const listarAlunos = (Turma) => {
    const alunosInfo = Turma.map(aluno => 
        `Nome: ${aluno.nome}, Idade: ${aluno.idade}, Matrícula: ${aluno.matricula}, Curso: ${aluno.curso}`
    );

    console.log(alunosInfo);

};


const buscarPorCurso = (Turma, curso) => {
    return Turma.filter(aluno => aluno.curso === curso);
};


const removerAluno = (Turma, nome) => {
    return Turma.filter(aluno => aluno.nome !== nome);
  };


  const ordenarPorMatricula = (Turma) => {
    return [...Turma].sort((a, b) => a.matricula - b.matricula);
  };

  
  const contarAlunosPorCurso = (Turma) => {
    return Turma.reduce((acc, aluno) => {
      acc[aluno.curso] = (acc[aluno.curso] || 0) + 1;
      return acc;
    }, {});
  }; 

  const editarAluno = (turma, nome, novosDados) => {
    return turma.map(aluno => 
      aluno.nome === nome ? { ...aluno, ...novosDados } : aluno
    );
  };

  listarAlunos(Turma)

  console.log(buscarPorCurso(Turma, "Medicina"))

  console.log(removerAluno(Turma, "João Silva"))

  console.log(ordenarPorMatricula(Turma))

  console.log(contarAlunosPorCurso(Turma))

  console.log(editarAluno(Turma, "Maria Sampaio", { idade: 21, curso: "Educação Física"})); 