var container = document.getElementById("app");

//var titulo = document.createElement("h1");
//titulo.innerHTML = "Titulo inserido por JavaScript :o";
//container.appendChild(titulo);


function Contador(props){

    const[numero, setNumero] = React.useState(0);

    function somar(){
        setNumero(numero + 1);
        console.log("adicionei 1 e agora o número é = " + numero);
    }

    
    function subtrair(){
        setNumero(numero - 1);
        console.log("subtrai 1 e agora o número é = " + numero);
    }


    return(
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
        
    );
}

function App(){
    return (
        <React.Fragment>
            <h1>Vote no melhor RPG</h1>
            <Contador titulo="The Witcher 3"/>
            <Contador titulo="Dragon Age Inquisition"/>
            <Contador titulo="TES V - Skyrim"/>
        </React.Fragment>        
    );

}

ReactDOM.render(React.createElement(App,null,null), container);


//ReactDOM.render(App(), container);