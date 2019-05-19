import { put, takeLatest, all } from "redux-saga/effects";

function* fetchNews(tab) {
  // const json = yield fetch(
  //   "https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc"
  // ).then(response => response.json());
  yield put({ type: "SELECT_TAB", tab: tab });

  console.log("hello");
}
function* actionWatcher() {
  yield takeLatest("SELECT_TAB", fetchNews);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
