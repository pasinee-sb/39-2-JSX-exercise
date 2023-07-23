const App = () => (
  <div>
    <FirstComponent />
    <NamedComponent name="Dani" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
