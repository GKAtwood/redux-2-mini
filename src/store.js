import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import hackerNewsreducer from './ducks/hackerNewsreducer';

export default createStore(hackerNewsreducer, applyMiddleware(promiseMiddleware));


