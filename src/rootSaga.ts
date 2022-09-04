import { all, fork } from 'redux-saga/effects';
import { employeesSagaWatcher } from './pages/Employees/services/saga';

const moduleSaga = [employeesSagaWatcher];

const sagas: Array<() => Generator> = [...moduleSaga];

export default function* rootSaga() {
  const globalSagasForks = sagas.map((saga) => fork(saga));
  yield all([...globalSagasForks]);
}
