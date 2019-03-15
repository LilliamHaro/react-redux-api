import React, { Component } from "react";
import { connect } from "react-redux";
import { setDataApi } from "../actions";

//2- obtendiendo la data del store como prop del componentes -- disponible despues de conectar el componente a redux
// revisar el reducer para ver que cambios esta haciendo el action_creator que se executo anteriomente
//obtenfiendo los 10 primeros post
function mapStateToProps(state) {
  return {
    post: state.post.slice(1, 10)
  };
}

class Post extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // 1 - ejecuatr el action cretor que estara disponible como prop(y hara cambios en el store) cuando conectemos en componente a redux
    this.props.setDataApi();
  }

  render() {
    return (
      <ul>
        {/* usar la data que gracias a connect ya esta disponible como prop del component */}
        {this.props.post.map((el, i) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

// 3 -- conectar el componente con redux
export default connect(mapStateToProps,{ setDataApi })(Post);
