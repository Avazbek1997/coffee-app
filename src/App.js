import React from "react";
import Content from "./Component/Content/Content";
import Header from "./Component/Header/Header";
import Text from "./Component/Text/Text";
import "./App.css";
import "./Responsive.css"



const App = () => {
  return (
    <div className="App">
      <Header />
      <Text />
      <Content />
    </div>
  );
};

export default App;
