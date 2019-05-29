import React, { createContext, Component } from "react";

const FavesContext = createContext();

class FavesProvider extends Component {
  constructor(props) {
    super();
    this.state = { faveIds: [] };
  }

  render() {
    return (
      <FavesContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export default FavesProvider;
