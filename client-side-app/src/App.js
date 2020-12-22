import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './components/join.js';
import Chat from './components/chat.js';
import './wow.css';

const App=()=> (
    <Router>
        <Route path='/' exact component={Join} />
        <Route path='/chat' exact component={Chat}/>
    </Router>
);
export default App;