import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tarefas !== this.state.tarefas) {
      localStorage.setItem("tarefa", this.state.tarefas);
    }
  }
  
  componentDidMount() {
    this.pegarTarefas()
    const tarefaLS = localStorage.getItem('tarefa') || '';
    this.setState({tarefa: tarefaLS})
  }
  
  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  
  pegarTarefas = () => {
    const tarefa = JSON.parse(localStorage.getItem("historicoTarefas")) || [];
    this.setState({ tarefas: tarefa });
    
  }
  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };
    const novasTarefas = [...this.state.tarefas, novaTarefa];
    this.setState({ tarefas: novasTarefas });
    
    localStorage.setItem("historicoTarefas", JSON.stringify(novasTarefas));
    this.limpaInput();
  };
  
  limpaInput = () => {
    this.setState({ inputValue: "" });
  };

  selectTarefa = (id) => {
    const listaEditada = this.state.tarefas.map((tarefa) => {
      if (id == tarefa.id) {
        const lista = {
          ...tarefa,
          completa: !tarefa.completa,
        };
        return lista;
      } else {
        return tarefa;
      }
    });
    this.setState({ tarefas: listaEditada });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((item) => {
            return (
              <Tarefa
                key={item.id}
                completa={item.completa}
                onClick={() => this.selectTarefa(item.id)}
              >
                {item.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
