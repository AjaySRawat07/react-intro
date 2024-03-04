const H1 = React.createElement("h1", {}, "Namaste React");
const Para = React.createElement("p", { id: "para" }, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, amet.");
const Btn = React.createElement("button", { id: "b1" }, "Click here");
const Div = React.createElement("div", { id: "main" }, [H1, Para, Btn]);

ReactDOM.render(Div, document.querySelector(".root"));
