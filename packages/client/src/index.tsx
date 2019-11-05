import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Router } from './components/App/App';

ReactDOM.render(<Router />, document.getElementById('root'));

serviceWorker.unregister();
