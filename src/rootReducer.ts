import { combineReducers } from 'redux';
import { EmployeesReducer } from './pages/Employees/services/reducer';

const rootReducer = combineReducers({
  EmployeesReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
