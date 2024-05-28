
import './App.css';
import login from '../src/img-sequencial/Login.png';
import proced0 from '../src/img-sequencial/proced0.png';
import proced1 from '../src/img-sequencial/proced1.png';
import proced2 from '../src/img-sequencial/proced2.png';
import proced3 from '../src/img-sequencial/proced3.png';
import proced4 from '../src/img-sequencial/proced4.png';
import proced5 from '../src/img-sequencial/proced5.png';
import proced6 from '../src/img-sequencial/proced6.png';
import proced7 from '../src/img-sequencial/proced7.png';
import proced8 from '../src/img-sequencial/proced8.png';
import proced9 from '../src/img-sequencial/proced9.png';
import proced10 from '../src/img-sequencial/proced10.png';
import proced11 from '../src/img-sequencial/proced11.png';
import logo1 from '../src/img-sequencial/favicon.ico';
import logo2 from '../src/img-sequencial/logo-NFe.png';


function App() {
    return (
        <div className="App">

        <header className='div-logo'>
          <img className='logo1' src={logo1} />
          <img className='logo2' src={logo2} />
          <h1 className='titulo'>Sequencial do Tipo de Documento no Faturamento</h1>
        </header>

            <h3>ENTRAR NO SISTEMA E FAZER LOGIN</h3>
            <p>&bull; Entre no sistema ERP Client, faça o login com seu usuário e senha, clique em "ok" para ser direcionado ao ambiente do sistema! (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={login} />


            <h3>PROCESSO DE FATURAMENTO</h3>
            <p>&bull; Entre na area "Gestão de Vendas / Faturamento / Faturar" (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced3} />


            <h3>BUSCANDO ITENS QUE AINDA NÃO FORAM FATURADOS</h3>
            <p>&bull; Selecione o filtro "todos" e aperte em "pesquisar" e em seguida selecione o ícone "pesquisar" (binóculo), para que os itens sejam tragos<br />
               &bull; Em seguida, selecione o pedido que deseja faturar, e clique em "Faturar" <br />
               &bull; Aparecerá a mensagem de "Número sequencial diferente do último", mostrando qual o último número registrado, e perguntando se deseja continuar, pois como no exemplo o número sequencial está 5820 <br />
               &bull; Selecione o item "Não" (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced4} />


            <h3> CAMINHO PARA ACERTAR O NÚMERO SEQUENCIAL</h3>
            <p>&bull; Entre na area de "cadastro / Principal / Tipo de produto (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced5} />

            
            <h3> BUSCANDO NOTA FISCAL PARA ALTERAÇÃO DO NÚMERO SEQUENCIAL</h3>
            <p>&bull; Selecione o item "Todos" e em seguida selecione o ícone (binóculo) ao lado para pesquisar <br />
               &bull; Precione 2x com o botão esquerdo do mouse em "Nota fiscal" (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced1} />


            <h3>ALTERANDO O NÚMERO SEQUENCIAL "ERRADO" PARA O "CORRETO"</h3>
            "<p>&bull; Como podemos ver no canto direito, o número sequencial está "5820", e precisa ser "5817", conforme a mensagem de aviso nos mostrou <br />
               &bull; Para alterarmos esse sequencia, selecione os ícones "F2-Alterar / Lápis", e na parte sequencial, inserir o novo número indicado pela mensagem e apertar o "Enter no teclado"  (neste exemplo foi o número correto é o "5817")</p>
            <img className='img-proced-1' src={proced6} />
 

            <h3>NÚMERO SEQUENCIAL JÁ ALTERADO </h3>
            <p>&bull; Como podemos ver, o número foi alterado conforme mensagem de aviso nos mostrou. (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced7} />


            <h3>SALVANDO AS ALTERAÇÕES</h3>
            <p>&bull; Para salvar as alterações feitas, selecione o ícone "salvar" no canto direito, e selecione o ícone "salvar" na parte superior (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced8} />


            <h3>VOLTANDO  PARA A ÁREA DE FATURAMENTO</h3>
            <p>&bull; Entre na area "Gestão de Vendas / Faturamento / Faturar" (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced3} />


            <h3>FINALIZANDO O FATURAMENTO COM O NÚMERO SEQUENCIAL CORRETO</h3>
            <p>&bull; Por fim para finalizarmos, selecione novamente o pedido que deseja faturar, e em seguida aperte em "Faturar" (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced9} />


            <h3>PEDIDO JÁ FATURADO</h3>
            <p>&bull; Vemos que o pedido agora foi faturado corretamente, com o número do sequencial correto! (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced10} />


            <h3>HISTÓRICO DE FATURAMENTO</h3>
            <p>&bull;Nesta área podemos ver os pedidos que já foram faturados, neste caso o pedido que faturamos está no histórico.S (conforme imagem a seguir):</p>
            <img className='img-proced-1' src={proced11} />



        </div>
    )
};
export default App;
