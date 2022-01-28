import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const data = [
  {name: 'Николай', id: 1},
  {name: 'Василий', id: 2},
  {name: 'Евгений', id: 3},
]

function App() {
  
  const [newData, setNewData] = useState(data)
  const [value, setValue] = useState('')

  const handelSearch = (e) => {
    e.preventDefault()
    const searchResult = data.filter(item => item.name.includes(value))
    if (searchResult.length === 0) {
      setNewData(data)
    } else {
      setNewData(searchResult)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
        <input type={"search"} onChange={(e)=>setValue(e.target.value)} value={value}/>
        <button type={'submit'} onClick={(e)=>handelSearch(e)}>Искать</button>
        </form>
        <ul>
          {newData.map(name => (
            <li key={name.id}>{name.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
