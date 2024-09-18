import { createStore } from "redux";
import reducer from "./reducer/reducer";  // 리듀서를 가져옴

let store = createStore(reducer);  // 리덕스 스토어 생성

export default store;
