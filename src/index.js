// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server'; 

import ReactDOM from 'react-dom';
const JSX = <div>hello</div>;
ReactDOM.render(JSX, document.getElementById('create_a_simple_jsx_element'));

const JSX1 =
<div>
  <h1>ciao</h1>
  <p>welcome</p>
  <ul>
    <li>ciao</li>
    <li>ciao</li>
    <li>ciao</li>
  </ul>
</div>
ReactDOM.render(JSX1, document.getElementById('create_a_complex_JSX_element'));




const JSX2 =  (
<div>
{/* COMMENT */}
<h1>This is a block of JSX</h1>
<p>Here's a subtitle</p>
</div>
);

ReactDOM.render(JSX2, document.getElementById('add_comments_in_jSX'));

const JSX3 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

ReactDOM.render(JSX3, document.getElementById('define_an_HTML_class_in_jSX'));


const JSX4 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

ReactDOM.render(JSX4, document.getElementById('learn_about_self-closing_jSX_tags'));


const MyComponent = () => <div>my component</div>
ReactDOM.render(MyComponent(), document.getElementById('create_a_stateless_functional_component'));



class MyComponent1 extends React.Component {
/**So the MyComponent1 class now has access to many useful React features, 
 * such as local state and lifecycle hooks */
  render() {
    return (
    <div>
      <h1>
      rendered our second component by importing react!!!!
      </h1>
    </div>
    )
  }
};
ReactDOM.render(<MyComponent1/>, document.getElementById('create_a_react_component'));




const ChildComponent = () => <div> <p>I am the child</p> </div>

class ParentComponent extends React.Component {

  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};
ReactDOM.render(<ParentComponent/>, document.getElementById('create_a_component_with_composition'));



/**
 * ----------------------------------------------------------------------------
 */
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
};

ReactDOM.render(<TypesOfFood/>, document.getElementById('use_react_to_render_nested_components'));


//------------------------------------------------------------------------------------------------------

const NonCitrus = () => {

  return (
    <div> <h4>Non Citrus:</h4>
    <ul><li>Apples</li><li>Blueberries</li><li>Strawberries</li><li>Bananas</li></ul>
    </div>
  )
}; 
const Citrus = () => {

  return (
    <div> <h4>Citrus: </h4>
    <ul><li>Lemon</li><li>Lime</li><li>Orange</li><li>Grapefruit</li></ul>
    </div>
  )
}; 
const Vegetables1 = () => {

  return (
    <div> <h4>Vegetables: </h4>
    <ul><li>Brussel Sprouts</li><li>Broccoli</li><li>Squash</li></ul>
    </div>
  )
}; 
class Fruits1 extends React.Component {
 
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

class TypesOfFood1 extends React.Component {

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits1 />
        <Vegetables1 />
      </div>
    );
  }
};
ReactDOM.render(<TypesOfFood1/>, document.getElementById('compose_react_components'));

//________________________________________________
const CurrentDate = (props) => {
  return (
    <div>

      <p>The current date is: {props.date}</p>
    
    </div>
  );
};

class Calendar extends React.Component {

  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        {/* date =attributo custom html*/}
        <CurrentDate date = {Date()} />
      
      </div>
    );
  }
};
ReactDOM.render(<Calendar/>, document.getElementById('pass_props_to_a_stateless_functional_component'));
//___________________________________________________

const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>
};

class ToDo extends React.Component {

  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks = {[ "walk dog", "workout"]}/>
        <h2>Tomorrow</h2>
        <List tasks = {[ "walk dog", "workout", "find out a high-value club"]}/>
      </div>
    );
  }
};

ReactDOM.render(<ToDo/>, document.getElementById('pass_an_array_as_props'));
//___________________________________________


const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component {props.items}</h1>
    </div>
  )
};

ShoppingCart.defaultProps = {
  items: 0
};
ReactDOM.render(<ShoppingCart/>, document.getElementById('use_default_props'));
//____________

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}
class ShoppingCart1 extends React.Component {

  render() {
    return <Items quantity= {10} />
  }
};
ReactDOM.render(<ShoppingCart1/>, document.getElementById('override_default_props'));
//__________________________________________________________________________________
const Items1 = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

//It's considered a best practice to set propTypes when you know the type of a prop ahead of time.
Items1.propTypes = {quantity:PropTypes.number.isRequired}


Items1.defaultProps = {
  quantity: 10
};

class ShoppingCart2 extends React.Component {

  render() {
    return <Items1  />
  }
};
ReactDOM.render(<ShoppingCart2/>, document.getElementById('use_propTypes_to_define_the_props_you_expect'));
//__________________________-------------

class App extends React.Component {
  render() {
    return (
        <div>
            <Welcome name = {"Giulia"}/>
        </div>
    );
  }
};
class Welcome extends React.Component {
  render() {
    return (
        <div>
          <p>Hello, <strong> {this.props.name} </strong>!</p>
        </div>
    );
  }
};
/**
Le ultime numerose sfide hanno riguardato i modi di base per passare le props
ai componenti del child. Ma cosa succede se il componente figlio a cui 
stai passando una props è un componente di classe ES6, piuttosto che un 
componente funzionale senza stato? Il componente di classe ES6 utilizza una convenzione
leggermente diversa per accedere alle props.

Ogni volta che fai riferimento a un componente di classe al suo interno, 
usi la parola chiave this. Per accedere alle props  all'interno di un 
componente di classe, premetti il codice che usi per accedervi con this. Ad esempio, 
se un componente di classe ES6 ha un prop chiamato name, scrivi {this.props.name} in JSX.
*/
ReactDOM.render(<App/>, document.getElementById('access_props_using_this_props'));

//_________________

/**
Un componente funzionale stateless è qualsiasi funzione che scrivi che accetta prop e restituisce JSX. 
Un componente stateless, d'altra parte, è una classe che estende React.Component, ma non utilizza 
lo stato interno. 
Infine, un componente stateful è un componente di classe che mantiene il proprio stato interno.

*/
class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
      this.state= { name:  "giulia" }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
ReactDOM.render(<StatefulComponent/>, document.getElementById('create_a_stateful_component'));
/**
Lo stato è costituito da tutti i dati di cui l'applicazione deve essere a conoscenza e che possono cambiare nel tempo.
 
Vuoi che le tue app rispondano alle modifiche di stato e presentino un'interfaccia utente aggiornata quando necessario. 
React offre una buona soluzione per la gestione dello stato delle moderne applicazioni web.

Si crea lo stato in un componente React dichiarando una proprietà di stato sulla classe del componente nel relativo 
costruttore. Questo inizializza il componente con lo stato quando viene creato. La proprietà state deve essere impostata 
su un oggetto JavaScript. Dichiarando si presenta così:

this.state = {

}

Hai accesso all'oggetto di stato per tutta la vita del tuo componente. 
Puoi aggiornarlo, eseguirne il rendering nell'interfaccia utente e passarlo come props ai componenti figlio.
L'oggetto di stato può essere complesso o semplice come è necessario. Nota che devi creare un componente di classe 
estendendo React.Component per creare uno stato come questo.

C'è un componente nell'editor di codice che sta tentando di eseguire il rendering di una proprietà del nome dal suo stato.
Tuttavia, non esiste uno stato definito. Inizializza il componente con lo stato nel costruttore e assegna il tuo nome
a una proprietà di nome.
*/
//come inizializzare lo stato nel costruttore.
class MyComponent3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {

    const name = this.state.name

    return (
      <div>
   
        <h1>{name}</h1>

      </div>
    );
  }
};
ReactDOM.render(<MyComponent3/>, document.getElementById('render_state_in_the_user_interface_another_way'));

//_____________________________________________________________
class MyComponent4  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    // Necessario per accedere al corretto valore di `this` all'interno della callback
    this.click = this.handleClick.bind(this);
  }
  handleClick() {
  
    this.setState({
      name: 'React Rocks!'
    })

  }
  render() {
    return (
      <div>
        <button  onClick={this.click}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
ReactDOM.render(<MyComponent4/>, document.getElementById('set_State_with_this_setState'));
/* 
 C'è anche un modo per cambiare lo stato del componente. 
 React fornisce un metodo per aggiornare lo stato del componente chiamato setState. 
 Chiama il metodo setState all'interno della tua classe componente in questo modo: this.setState(), passando un oggetto con coppie chiave-valore.
  Le chiavi sono le tue proprietà di stato e i valori sono i dati di stato aggiornati. 
  Ad esempio, se memorizzassimo un nome utente nello stato 
  e volessimo aggiornarlo, sarebbe simile a questo:React si aspetta che tu non modifichi mai direttamente lo stato, ma usi sempre this.setState()
  quando si verificano cambiamenti di stato. Inoltre, dovresti notare che React può raggruppare più aggiornamenti di stato per migliorare
  le prestazioni.
  Ciò significa che gli aggiornamenti di stato tramite il metodo setState possono essere asincroni. Esiste una sintassi 
  alternativa per il metodo setState che fornisce un modo per aggirare questo problema. Questo è raramente necessario, ma è bene tenerlo 
  a mente! Si prega di consultare la documentazione di React per ulteriori dettagli.
*/


//____________________________________________________________________________________________________________________________________________

/*A volte potrebbe essere necessario conoscere lo stato precedente durante l'aggiornamento dello stato. 
Tuttavia, gli aggiornamenti di stato possono essere asincroni: ciò significa che React può raggruppare
 più chiamate setState() in un unico aggiornamento. 
 Ciò significa che non puoi fare affidamento sul valore precedente di this.state o this.props 
 quando calcoli il valore successivo.
  Quindi, non dovresti usare un codice come questo:
this.setState({
  counter: this.state.counter + this.props.increment
});
Invece, dovresti passare a setState una funzione che ti consente di accedere allo stato e
 agli props. L'uso di una funzione con setState garantisce di lavorare con i valori 
 più attuali di state e props. Ciò significa che quanto sopra dovrebbe essere riscritto come:*/

class MyComponent5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };

  this.click= this.toggleVisibility.bind(this)
 
  }

  toggleVisibility() {
    this.setState(state => ({visibility: !state.visibility }))
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.click}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.click}>Click Me</button>
        </div>
      );
    }
  }
}
ReactDOM.render(<MyComponent5/>, document.getElementById('use_state_to_toggle_an_element'));
//________________________________________________________________________________
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  
    this.increment = this.methodIncrement.bind(this)
    this.decrement = this.methodDecrement.bind(this)
    this.reset = this.methodReset.bind(this)

  }
 
  methodIncrement(){
    this.setState((state)=> ({
      count:state.count + 1
    }))
  }
   methodDecrement(){
    this.setState(state=> ({
      count:state.count - 1
    }))
   }

     methodReset(){
      this.setState ({
        count:0
      })
   }

  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
ReactDOM.render(<Counter/>, document.getElementById('write_a_simple_counter'));
//_______________________________________________________________________________________
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

    this.handleInputChange = this.handleChange.bind(this)

  }
  
  handleChange(event) {    
    this.setState({
      input: event.target.value
      });  
  }
  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} value={this.state.input}/>
     
        <h4>Controlled Input: </h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
ReactDOM.render(<ControlledInput/>, document.getElementById('create_a_controlled_input'));
////


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
  event.preventDefault()
    this.setState(state => ({
        submit: state.input
    }))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
         
          <input value= {this.state.input} onChange={ this.handleChange } />
      
          <button type='submit'>Submit!</button>
        </form>
     
        <h1>{this.state.submit}</h1>
    
      </div>
    );
  }
}

ReactDOM.render(<MyForm/>, document.getElementById('create_a_controlled_form'));
///----

/**
 * Ad esempio, potresti avere un componente App che esegue il rendering di una Navbar,
 *  tra gli altri componenti. Nella tua app, hai uno stato che contiene molte informazioni 
 * sull'utente, ma la Navbar deve solo accedere al nome utente dell'utente in modo che possa 
 * visualizzarlo. Passi quel pezzo di stato al componente Navbar come props.
 * 
 
 * 
 * Questo modello illustra alcuni importanti paradigmi in React. 
 * Il primo è il flusso di dati 
 * unidirezionale. Lo stato scorre in una direzione lungo l'albero dei componenti 
 * dell'applicazione, dal componente padre con stato ai componenti figlio. 
 * I componenti figlio ricevono solo i dati di stato di cui hanno bisogno. 
 * 
 * Il secondo è che le app con stato complesse possono essere suddivise in pochi, 
 * o forse un singolo componente con stato. Il resto dei tuoi componenti riceve semplicemente 
 * lo stato dal genitore come oggetti di scena e esegue il rendering di un'interfaccia utente
 *  da quello stato. Inizia a creare una separazione in cui la gestione dello stato viene
 *  gestita in una parte del codice e il rendering dell'interfaccia utente in un'altra. 
 * Questo principio di separazione della logica di stato dalla logica dell'interfaccia
 *  utente è uno dei principi chiave di React. Se utilizzato correttamente, semplifica 
 * notevolmente la gestione della progettazione di applicazioni complesse e con stato.
*/


class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar nameCustom={this.state.name} />
       </div>
    );
  }
};

class Navbar extends React.Component {

  render() {
    return (
    <div>
      <h1>Hello, my name is:{this.props.nameCustom} </h1>
    </div>
    );
  }
};
ReactDOM.render(<MyApp/>, document.getElementById('Pass_State_as Props_to_Child_components'));
//___________________________________________________________________________________________
class MyApp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange= this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
          <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
          <RenderInput input={this.state.inputValue} />
       </div>
    );
  }
};
class GetInput extends React.Component {
 
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};
class RenderInput extends React.Component {

  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
ReactDOM.render(<MyApp2/>, document.getElementById('Pass_a_Callback_as_Props'));

//________________________________
class MyComponent6 extends React.Component {
 
  componentWillMount() {
    console.log("ciao");

  }
  render() {
    return <div />
  }
};
ReactDOM.render(<MyComponent6/>, document.getElementById('Use_the_Lifecycle_Method_componentWillMount'));
/**
 * 
 * I componenti React hanno diversi metodi speciali che offrono l'opportunità di eseguire azioni in punti specifici
 *  del ciclo di vita di un componente. Questi sono chiamati metodi del ciclo di vita o hook del ciclo di vita
 *  e consentono di catturare i componenti in determinati momenti. Questo può avvenire prima che vengano renderizzati,
 *  prima che vengano aggiornati, prima che ricevano le props, prima che vengano smontati e così via.
*/


//------------------
class MyComponent7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users:{this.state.activeUsers}</h1>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent7/>, document.getElementById('Use_the_Lifecycle_Method_componentDidMount'));
/*
La maggior parte degli sviluppatori Web, chiamare un endpoint API per recuperare i dati.
Se stai lavorando con React, è importante sapere dove eseguire questa azione.

La migliore pratica con React consiste nell'effettuare chiamate API o qualsiasi chiamata al server nel metodo 
del ciclo di vita componentDidMount(). Questo metodo viene chiamato dopo che un componente è stato montato sul DOM.
Qualsiasi chiamata a setState() qui attiverà un nuovo rendering del componente. Quando chiami un'API con questo metodo 
e imposti il tuo stato con i dati restituiti dall'API, attiverà automaticamente un aggiornamento una volta ricevuti 
i dati.

C'è una chiamata API simulata in componentDidMount(). Imposta lo stato dopo 2,5 secondi per simulare la chiamata a
un server per recuperare i dati. Questo esempio richiede gli utenti attivi totali correnti per un sito. 
Nel metodo di rendering, renderizza il valore di activeUsers in h1 dopo il testo Utenti attivi:.
Guarda cosa succede nell'anteprima e sentiti libero di cambiare il timeout per vedere i diversi effetti.
*/

class MyComponent8 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
ReactDOM.render(<MyComponent8/>, document.getElementById('Add_Event_Listeners'));
/**
Il metodo componentDidMount() è anche il posto migliore per collegare eventuali listener
di eventi che è necessario aggiungere per funzionalità specifiche.
Il metodo componentDidMount() è anche il posto migliore per collegare eventuali listener di eventi che è necessario aggiungere per funzionalità specifiche.

React fornisce un sistema di eventi sintetici(keydown, onclick ecc) che avvolge il sistema
di eventi nativo presente
nei browser. Ciò significa che il sistema di eventi sintetici si comporta esattamente 
allo stesso modo indipendentemente dal browser dell'utente, anche se gli eventi nativi
possono comportarsi in modo diverso tra browser diversi.
*/

class OnlyEvens extends React.Component {
  /**
  
   */
  //di default react ha questo comportamento: quando riceve nuove props si aggiorna il componentente, 
  //shouldComponentUpdate reindirazzmento solo a certa condizione solo quando il valore è pari nel nostro caso
  shouldComponentUpdate(nextProps) {
    console.log('Should I update?');

    return nextProps.value % 2 === 0;

  }
  //** */
  componentDidUpdate() {
    console.log('Component re-rendered.');
    
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
ReactDOM.render(<Controller/>, document.getElementById('Optimize_Re-Renders_with_shouldComponentUpdate'));

//

class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: 'red', fontSize: 72}}>Big Red</div>
    );
  }
};
ReactDOM.render(<Colorful/>, document.getElementById('Introducing_Inline_Styles'));


//------

const styles ={
  color: 'purple',
  fontSize: 40,
  border: "2px solid purple", 
}
class Colorful1 extends React.Component {
  render() {

    return (
      <div style={styles}>Style Me!</div>
    );
   
  }
};

ReactDOM.render(<Colorful1/>, document.getElementById('colorful'));
/**
 * Si presume che tutte le unità di lunghezza del valore della proprietà 
 * (come altezza, larghezza e fontSize) siano in px se non 
 * diversamente specificato. Se vuoi usarli, ad esempio, avvolgi 
 * il valore e le unità tra virgolette, come {fontSize: "4em"}. 
 * A parte i valori di lunghezza che per impostazione predefinita sono px,
 *  tutti gli altri valori di proprietà devono essere racchiusi tra virgolette
 */


/**Nelle sfide precedenti, hai imparato come iniettare codice JavaScript nel codice JSX usando parentesi
 graffe, { }, per attività come l'accesso agli oggetti di scena, il passaggio di oggetti di scena, 
 l'accesso allo stato, l'inserimento di commenti nel codice e, più recentemente, lo stile dei componenti.
 Questi sono tutti casi d'uso comuni per inserire JavaScript in JSX, ma non sono l'unico modo per utilizzare
 il codice JavaScript nei componenti React.

Puoi anche scrivere JavaScript direttamente nei tuoi metodi di rendering, prima dell'istruzione return,
senza inserirlo all'interno di parentesi graffe. Questo perché non è ancora all'interno del codice JSX. 
Quando si desidera utilizzare una variabile più avanti nel codice JSX all'interno dell'istruzione di ritorno, 
inserire il nome della variabile tra parentesi graffe. */
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex]
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {answer}          
        </p>
      </div>
    );
  }
}
ReactDOM.render(<MagicEightBall/>, document.getElementById('Use_Advanced_JavaScript_in_React_Render_Method'));
//---
class MyComponent9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display
    }));
  }
  render() {
    if (this.state.display) {
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           <h1>Displayed!</h1>
         </div>
      );
    } else {
      return (
        <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
         </div>
      );
    }
  }
};
ReactDOM.render(<MyComponent9/>, document.getElementById('Render_with_n_f-Else_Condition'));
///______________________________________________________
/**
 Le affermazioni if/else hanno funzionato nell'ultima sfida, ma c'è un modo più conciso per 
 ottenere lo stesso risultato. Immagina di monitorare diverse condizioni in un componente e di voler
 eseguire il rendering di elementi diversi a seconda di ciascuna di queste condizioni. 
 Se scrivi molte istruzioni else if per restituire UI leggermente diverse, potresti ripetere 
 il codice che lascia spazio a errori. Invece, puoi usare l'operatore logico && per eseguire 
 la logica condizionale in modo più conciso. Ciò è possibile perché si desidera verificare se una
 condizione è vera e, in tal caso, restituire del markup. Ecco un esempio:

  {condizione && <p>marcatura</p>}
  Se la condizione è vera, verrà restituito il markup. Se la condizione è falsa, l'operazione restituirà 
  immediatamente false dopo aver valutato la condizione e non restituirà nulla. Puoi includere queste
  istruzioni direttamente nel tuo JSX e mettere insieme più condizioni scrivendo && dopo ciascuna di esse.
  Ciò ti consente di gestire una logica condizionale più complessa nel tuo metodo render() senza ripetere 
  molto codice.

  Risolvi di nuovo l'esempio precedente, quindi h1 esegue il rendering solo se display è vero, ma usa 
  l'operatore logico && invece di un'istruzione if/else.
*/
class MyComponent10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {

    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
          {this.state.display && <h1> Displayed! </h1>}
       </div>
    );
  }
};
ReactDOM.render(<MyComponent10/>, document.getElementById('Use_&&_for_a_More_Concise_Conditional'));

//-------------------------------------------------------------------------------------------------

const inputStyle1 = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      input: '',
      userAge: ''
    };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle1}
          type='number'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
       
        {
          this.state.userAge === ''
            ? buttonOne
            : this.state.userAge >= 18
              ? buttonTwo
              : buttonThree
          }
      </div>
    );
  }
}

ReactDOM.render(<CheckUserAge/>, document.getElementById('Use_a_Ternary_Expression_for_Conditional_Rendering'));
//-------------------------------------------------------------------

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    {/* Change code below this line */}
    return <h1>{this.props.fiftyFifty}</h1>;
    {/* Change code above this line */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Complete the return statement:
      return {
        counter: prevState.counter + 1
      }
    });
  }
  render() {
    const expression = Math.random() >= .5 ; 
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        <Results fiftyFifty={expression ? "you win!": "You lose!"}/>
        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}
ReactDOM.render(<GameOfChance/>, document.getElementById('Render_Conditionally_from_Props'));
//____________________________________________________________________________________________________

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    // Change code below this line
    if(this.state.input.length > 15 ) {
      inputStyle.border = '3px solid red';
    } 
    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};

ReactDOM.render(<GateKeeper/>, document.getElementById('Change_Inline_CSS_Conditionally_Based_on_Component_State'));
//-------------------------------------------------------------------------------------------------------------------

const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // Change code below this line
    this.state={
      userInput: '',
      toDoList: []
    }
    // Change code above this line
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(el=> <li>{el}</li>); // Change this line
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder='Separate Items With Commas'
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

ReactDOM.render(<MyToDoList/>, document.getElementById('Use_Arraymap_to_Dynamically_Render_Elements'));
//----------------------------------------------------------------------------
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  //React uses these keys to keep track of which items are added, changed, or removed. 
  //This helps make the re-rendering process more efficient when the list is modified 
  //in any way.
  //si utilizza key attribute = element e non index perchè la posizione degli elementi 
  //può confondersi con la posizione di altri elementi nell'array 
  const renderFrameworks = frontEndFrameworks.map((el)=> <li key={el}>{el}</li>); 
  // Change this line
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
ReactDOM.render(<Frameworks/>, document.getElementById('Give_Sibling_Elements_a_Unique_Key_Attribute'));
//_____________________
class MyComponent11 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },

        {
          username: 'Alan',
          online: false
        },

        {
          username: 'Mary',
          online: true
        },

        {
          username: 'Jim',
          online: false
        },

        {
          username: 'Sara',
          online: true

        },

        {
          username: 'Laura',
          online: true
        }

      ]

    };

  }

  render() {
    const usersOnline = this.state.users.filter(el => el.online); // Change this line
    const renderOnline = usersOnline.map(el => <li key={el.username}>{el.username}</li>); // Change this line

    return (
      <div>

        <h1>Current Online Users:</h1>

        <ul>{renderOnline}</ul>

      </div>

    );

  }

}
ReactDOM.render(<MyComponent11/>, document.getElementById('Use_Array.filter()_to Dynamically_Filter_an_Array'));
//_________________
class App1 extends React.Component {
 
  render() {
    return <div>
    <h1> ciaooo</h1>
    </div>
  }
};

// Change code below this line


// eslint-disable-next-line no-undef
ReactDOMServer.renderToString(<App1/>)