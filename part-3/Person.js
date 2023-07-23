const Person = ({ name, age, hobbies }) => {
  let h3;
  if (age >= 18) {
    h3 = "Please go vote";
  } else {
    h3 = "You must be 18";
  }

  if (name.length > 8) {
    name = name.slice(0, 6);
  }
  return (
    <div>
      <h1>
        Name: {name} Age: {age}
      </h1>
      <h3>{h3}</h3>

      <p>Learn some information about this person</p>
      <ul>
        Hobbies:
        {hobbies.map((t) => (
          <li>
            <b>{t}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};
