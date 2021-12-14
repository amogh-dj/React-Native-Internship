import React, {Component} from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, ApplyMiddleWare, applyMiddleware } from 'redux';
import reducers from './reducers';

import ListViewScreen from './components/ListViewScreen';

class App extends Component {
    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        // createStore takes 3 params,
        // reducer file pointing to combined reducers
        // value of initial state
        // applyMiddleWare for whatever middleware you wanna use e.g ReduxThunk, ReduxPromise, ReduxSaga etc. ReduxThunk is most popular
        return (<Provider store={store}>
                <ListViewScreen/>
            </Provider>);
    }
}

export default App;