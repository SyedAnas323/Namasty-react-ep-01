/**
 * <div id = "parent">
 *      <div id = "child">
 *           <h1>I'm H1 tag</h1>
 *           <h2>I'm H1 tag</h2>
 *      </div>
 * 
 *      <div id = "child2">
 *             <h1>I'm H1 tag</h1>
 *             <h2>I'm H1 tag</h2>
 *      </div>
 * </div>
 * 
 * 
 * ReactElement(object) => HTML(Browers Understands)
 * 
 */


const parent = React.createElement(
    "div",
    { id: "parent" },
    [
      React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm an H1 tag"),
        React.createElement("h2", {}, "I'm an H2 tag")
      ]),
      React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "I'm an H1 tag"),
        React.createElement("h2", {}, "I'm an H2 tag")
      ])
    ]);
  



console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);