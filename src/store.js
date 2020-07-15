import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import hackerNewsreducer from './ducks/hackerNewsReducer';
import mediumReducer from './ducks/mediumReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    hackerNews: hackerNewsreducer,
    medium: mediumReducer
})


export default createStore(rootReducer, applyMiddleware(promiseMiddleware));


