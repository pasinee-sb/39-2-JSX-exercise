const App = () => (
  <div>
    <Tweet username="Dani" name="Danii" date="June 5, 20223" message="Hello" />
    <Tweet username="Mimi" name="Mimii" date="June 6, 20223" message="Halo" />
    <Tweet username="Momo" name="Momop" date="June 7, 20223" message="Hell" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
