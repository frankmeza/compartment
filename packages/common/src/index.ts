// this is the source file while compiles @cashew/common, imported into web/

import {
    actions as importedActions,
    appState,
    AppState,
    INITIAL_STATE,
    store,
    storeCreatorWrapper,
} from "./redux/index"

import {
    DecrementAction,
    IncrementAction,
    ResetAction,
} from "./redux/modules/counter"

const actions = { ...importedActions }
const defaultAppState = INITIAL_STATE

export {
    actions,
    DecrementAction,
    IncrementAction,
    ResetAction,

    defaultAppState,
    store,
    storeCreatorWrapper,
    AppState,
    appState,
}
