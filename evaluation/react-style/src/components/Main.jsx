import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  margin-top: 30px;
  cursor: pointer;
  padding: 1rem;
  margin-right: 20px;
  border-radius: 5px;
  background-color: ${(props) => (
    props.theme === "dark" ? "black" : "white"
  )};
  color: ${(props) => (
    props.theme === "dark" ? "white" : "black"
  )};
`
const A = styled.button`
  background-color: transparent;
  margin-top: 30px;
  cursor: pointer;
  padding: 1rem;
  margin-right: 20px;
  border-radius: 5px;
  background-color: ${(props) => (
    props.color === "red" ? "green" : "yellow"
  )};
  color: ${(props) => (
    props.color === "red" ? "yellow" : "green"
  )};
`

const Main = () => {

    const [theme, setTheme] = React.useState("dark");
    const [color, setColor] = React.useState("red");
    return(
        <div>
            <Button theme={theme}>Button1</Button>
            <Button theme={theme}>Button2</Button>
            <A color={color}>Button3</A>
            <A color={color}>Button4</A>
        </div>
    )
}

export default Main;