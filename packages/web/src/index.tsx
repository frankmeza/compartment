import { actions, store } from "@cashew/common"
import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import App from "./App"
import "./index.css"
import registerServiceWorker from "./registerServiceWorker"

/* tslint:disable */
console.log(Object.keys(actions))
/* tslint:enable */

ReactDOM.render(
    <Provider store={store}>
        <App actions={actions} appState={store.getState()} />
    </Provider>,
    document.getElementById("root") as HTMLElement,
)
registerServiceWorker()
