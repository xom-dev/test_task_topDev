import { Actions } from './actions';
import { GET_EMPLOYEES_ERROR, GET_EMPLOYEES_REQUEST, GET_EMPLOYEES_SUCCESS, SET_STATUS } from './constants';
import { EmployeesListInterface } from '../../../entities/Employees/interface';

const initialState = {
  error: null as Error | null,
  employeesList: [] as EmployeesListInterface[]
};

type EmployeesState = typeof initialState;

export const EmployeesReducer = (state: EmployeesState = initialState, action: Actions) => {
  switch (action.type) {
    case GET_EMPLOYEES_REQUEST: {
      return {
        ...state,
        error: null
      };
    }
    case GET_EMPLOYEES_SUCCESS: {
      return {
        ...state,
        employeesList: action.payload
      };
    }
    case GET_EMPLOYEES_ERROR: {
      return {
        ...state,
        error: action.payload
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        employeesList: action.payload
      };
    }
    default: {
      return state;
    }
  }
};
