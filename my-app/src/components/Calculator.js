//  @TODO2 - Display another emoji, which is the same as that in the Emoji component and reflects when 
// ‘Change Mood’,  next to the clock. (Hint: useContext).
import React from 'react';

const Calculator = () => {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const [result, setResult] = React.useState(0);

  const handleChangeA = (event) => {
    event.preventDefault();
    setA(event.target.value);
  }
  const handleChangeB = (event) => {
    event.preventDefault();
    setB(event.target.value);

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    switch (event.target.operators.value) {
      case '+':
        setResult(parseInt(a) + parseInt(b));
        break;
      case '-':
        setResult(parseInt(a) - parseInt(b));
        break;
      case '*':
        setResult(parseInt(a) * parseInt(b));
        break;
      case '/':
        setResult(parseInt(a) / parseInt(b));
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <h1>Calculator</h1>
      <form onSubmit={handleSubmit}>
        <>
          <label>
            A:
            <input type="text" value={a} onChange={handleChangeA} />
          </label>
        </>
        <br />

        <>
          <label>
            Op:
            <select name="operators" id="operators">
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </label>
        </>
        <br />

        <>
          <label>
            B:
            <input type="text" value={b} onChange={handleChangeB} />
          </label>
          <input type="submit" value="Submit" />
        </>
      </form>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;