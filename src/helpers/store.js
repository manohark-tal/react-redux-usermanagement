import {createStore,applyMiddleware}from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from '../reducers'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'

export const history = createBrowserHistory()

const middleware=composeWithDevTools(applyMiddleware(thunkMiddleware,routerMiddleware(history)))

export default createStore(connectRouter(history)(rootReducer),middleware)
