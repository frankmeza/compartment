import * as redux from "redux"
import { applyMiddleware, createStore, Middleware } from "redux"
import { createLogger } from "redux-logger"
import { actions, counter } from "../redux/modules/counter"

// begin imports without special characters
import createSagaMiddleware, { SagaMiddleware } from "redux-saga"
import rootSaga from "../redux/sagas"

export interface AppState {
    readonly counter: number
}

const appState: AppState = {
    counter: 0,
}

const INITIAL_STATE: AppState = appState

const appReducer: redux.Reducer = redux.combineReducers({ counter })
const logger: Middleware = createLogger({
    stateTransformer: (state: AppState) => state,
})
const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware()
const commonMiddleware: ReadonlyArray<Middleware> = [sagaMiddleware, logger]

// we need a function that accepts more middleware and then returns a function that returns a store
// then export that function

const createStoreWithMiddleware = createStore(
    appReducer,
    INITIAL_STATE as redux.DeepPartial<{}>,
    applyMiddleware(...commonMiddleware),
)

const store = createStoreWithMiddleware

// fn that returns a wrapped store creator
// storeCreatorWrapper :: clientMiddleware -> () -> sreateStoreWithMiddleWAre
const storeCreatorWrapper = (clientMiddleWare: ReadonlyArray<Middleware>) => {
    const combinedMiddleware = [...commonMiddleware, ...clientMiddleWare]
    return () =>
        createStore(
            appReducer,
            INITIAL_STATE as redux.DeepPartial<{}>,
            applyMiddleware(...combinedMiddleware),
        )
}

// fn that accepts middleware and returns a created store
// storeCreator :: fn, Middleware -> redux.Store<any, redux.AnyAction> & { dispatch: {} }

sagaMiddleware.run(rootSaga)

export { actions, appState, store, storeCreatorWrapper, INITIAL_STATE }
