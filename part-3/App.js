const App = () => (
  <div>
    <Person name="Bobo" age={5} hobbies={["swimming", "cooking"]} />
    <Person name="Bobiobalaba" age={18} hobbies={["dancing", "gaming"]} />
    <Person name="Bobiobadd" age={18} hobbies={["sleeping", "baking"]} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("root"));
