import logo from './logo.svg';
import './App.css';

function App() {

  function findMaxValue(arr) {
    let maxValue = arr[0]; // Assume the first element is the maximum value
  
    // Iterate over the array
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxValue) { // If current element is greater than the maximum value
        maxValue = arr[i]; // Update maximum value
      }
    }
  
    return maxValue; // Return the maximum value found
  }
  
  // Example usage:
  const numbers = [3, 6, 2, 8, 1, 9];
  const maxNumber = findMaxValue(numbers);
  console.log(maxNumber); // Output: 9

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{maxNumber}</p>
      </header>
    </div>
  );
}

export default App;
