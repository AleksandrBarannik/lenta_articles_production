import React from 'react';
import Counter from './components/Counter';
import  './Index.scss';

const App = () => {
    return (
        <div className="app">
            Счетчик
            <Counter/>
        </div>
    );
};

export default App;