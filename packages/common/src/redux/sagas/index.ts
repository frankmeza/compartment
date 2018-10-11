import { takeEvery } from "redux-saga/effects"

/* tslint:disable */
const reset = () => console.log("reset from the saga")
const incr = () => console.log("incremented from the saga")
/* tslint:enable */

/* tslint:disable */
export default function* rootSaga(): Iterator<any> {
    yield [takeEvery("RESET", reset)]
    yield [takeEvery("INCREMENT", incr)]
}
/* tslint:enable */
