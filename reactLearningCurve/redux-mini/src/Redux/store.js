import { createStore } from "redux";
import reducers from "./Reducers/index"

const store = createStore(reducers,{},window.__REDUX_DEVTOOLS_EXTENSIONS__&&window.__REDUX_DEVTOOLS_EXTENSIONS());

export default store;