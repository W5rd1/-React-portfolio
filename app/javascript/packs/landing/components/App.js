import "./App.css";
import React from "react";
import { CSSTransition } from "react-transition-group";

class App extends React.Component {
  //   state = { items: ["Hi", "Welcome", "Bye"] };
  render() {
    return (
      <CSSTransition in={true} appear={true} timeout={3000} classNames="fade">
        <div>Fading at Initial Mount</div>
      </CSSTransition>
    );
  }
}
export default App;
