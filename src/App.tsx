import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
        </div>
    );
}

export default App;
