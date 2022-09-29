import { useEffect, useState } from "react";
import CardAtrizes from "../components/CardAtrizes";
import "../styles/AtrizesScreen.css";

function AtrizesScreen() {
  // 1 - Endereço do servidor
  const URL =
    process.env.ENVIRONMENT === "prod"
      ? "/api/atrizes"
      : "http://localhost:3000/atrizes/";
  //2 - Vetor para armazenar objetos que vem do end-point
  const [atrizes, setAtrizes] = useState([]);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [atualizar] = useState(false);
  // carregar - faz a verificação se as informações estão
  //prontas para serem apresentadas, se não estiverem
  //prontas, apresenta tela de loading...
  // Inicia com true para apresentar a info e após carregar as infos seta false
  const [carregar, setCarregar] = useState(true);
  //--------------------------------------------------------------------------
  //3 - hook use-effect para obter dados do end-point
  useEffect(() => {
    // aguardar o carregamento das informações
    async function fetchData() {
      setCarregar(true);
      //----------momento 1--------------
      // coleta o json da URL
      const response = await fetch(URL);
      // armazena o json da URL na constante data
      const data = await response.json();
      // atualiza o vetor de atrizes com as informações do data
      setAtrizes(data);
      //----------momento 2--------------
      setCarregar(false);
    }
    // chama a função para execução
    fetchData();
    console.log("event");
    // '[]' - usado para ativar o useEffect apenas quando houver modificações
  }, [atualizar]);
  //--------------------------------------------------------------------------

  // const handleAtualizarListagem = () => {
  //   setAtualizar(!atualizar);
  // };

  const handleCadastrarAtriz = async (e) => {
    e.preventDefault();
    // ---- Cria objeto atriz
    const atriz = {
      nome: nome,
      idade: idade,
    };
    // ----------------------
    const adicionaAtriz = await fetch(URL, {
      // qual o metodo da função que é postar informação
      method: "POST",
      //
      headers: { "content-Type": "application/json" },
      // informando tipo de dado
      body: JSON.stringify(atriz),
    });

    const listaAtualizadaDeAtrizes = await adicionaAtriz.json();

    setAtrizes((a) => [...a, listaAtualizadaDeAtrizes]);

    setNome("");
    setIdade("");
  };

  return (
    <div className="atrizesContainer">
      <h1>Cadastro de atrizes</h1>
      <form
        className="atrizesFormContainer"
        action="#"
        onSubmit={handleCadastrarAtriz}
      >
        <p>
          <label htmlFor="#">
            Nome:{" "}
            <input
              className="atrizesInputNomeCadastro"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </label>{" "}
          <label htmlFor="#">
            Idade:{" "}
            <input
              className="atrizesInputIdadeCadastro"
              type="text"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
          </label>
        </p>
        <input
          className="atrizesInputButtonCadastro"
          type="submit"
          value="cadastrar"
        />
      </form>
      <h1>Listagem de atrizes</h1>
      <div className="listaAtrizesContainer">
        {!carregar &&
          atrizes.map((atriz, i) => (
            <CardAtrizes nome={atriz.nome} idade={atriz.idade} />
          ))}
      </div>
    </div>
  );
}
export default AtrizesScreen;
