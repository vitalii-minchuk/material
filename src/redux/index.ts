import { combineReducers, configureStore } from "@reduxjs/toolkit"
import transactionsReducer from "./transactionsSlice"
import importReducer from "./importDataSlice"
import logger from "redux-logger"
import createSagaMiddleware from "@redux-saga/core"
import { all, fork } from "@redux-saga/core/effects"
import { rootTransactionsSaga } from "./transactionsSaga"
import { rootImportDataSaga } from "./importDataSaga"

const combinedReducer = combineReducers({
  transactions: transactionsReducer,
  import: importReducer
})

const rootSaga = function* rootGenerator() {
  yield all([fork(rootTransactionsSaga), fork(rootImportDataSaga)])
}

const sagaMMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware()
    return [...defaultMiddleware, sagaMMiddleware, logger]
  }
})

sagaMMiddleware.run(rootSaga)

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch