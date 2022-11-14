import config from "../config.json";

function HomePage() {
    const mensagem = 'Bem vindo ao aluratTUBE!'
    const estilosDaHomePage ={backgroundColor:"black", color: 'white'};
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
    return (
        <div>
            <h1>VAI PORRA</h1>
        </div>
    )
  }
  function Header() {
    return (
        <div>
            <img src="banner"/>
            <img src={`https://github.com/${config.github}.png`}/>
        </div>

    )
  }
  function TimeLine() {
    return (
        <div>TimeLine</div>
    )
  }