import { GET_EMPLOYEES_ERROR, GET_EMPLOYEES_REQUEST, GET_EMPLOYEES_SUCCESS, SET_STATUS } from './constants';
import { EmployeesListInterface } from '../../../entities/Employees/interface';

export const getEmployeesRequest = () => ({
  type: GET_EMPLOYEES_REQUEST
});

export const getEmployeesSuccess = (response: EmployeesListInterface[]) => ({
  type: GET_EMPLOYEES_SUCCESS,
  payload: response
});

export const getEmployeesError = (error: any) => ({
  type: GET_EMPLOYEES_ERROR,
  payload: error
});

export const setEmployees = (employees: EmployeesListInterface[]) => ({
  type: SET_STATUS,
  payload: employees
});

export type Actions =
  | ReturnType<typeof getEmployeesRequest>
  | ReturnType<typeof getEmployeesSuccess>
  | ReturnType<typeof getEmployeesError>
  | ReturnType<typeof setEmployees>;
