import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './styles/index.css';
import App from './App';
import Home from './components/Home';
import StoreSetInfo from './components/StoreSetInfo';
import MapPage from './components/MapPage';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/home" component={Home} />
            <Route path="/map" component={MapPage} />
            <Route path="/store" component={StoreSetInfo} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
