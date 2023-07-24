import config from "../config.json";
import styled from "styled-components";
function HomePage() {
    const mensagem = 'Bem vindo ao aluratTUBE!'
    const estilosDaHomePage ={backgroundColor:"black", color: 'white', borderRadius: '15px', margin: '25px'};
    return (
        <div style={estilosDaHomePage}>
        <Menu/>
        <Header/>
        <TimeLine/>
        </div>
    )
  }
  
  export default HomePage

  function Menu() {
    const estilosDoMenu ={margin: '25px'};
    return (
        <div style={estilosDoMenu}>
            <h1>VAI PORRA</h1>
        </div>
    )
  }

  const StyledHeader = styled.div`
  img{
    width:80px;
    height: 80px;
    border-radius:50%;
  }
  .user-info{
    display: flex;
    align-items: center;
    
  }
  `;

  function Header() {

    return (
        <StyledHeader >
          <section className="user-info">
            {/*<img src="banner"*/}
            <img src={`https://github.com/${config.github}.png`}/>
            {config.nome}
            {config.trabalho}
          </section>

        </StyledHeader>

    )
  }
  function TimeLine() {
    return (
        <div>TimeLine</div>
    )
  }