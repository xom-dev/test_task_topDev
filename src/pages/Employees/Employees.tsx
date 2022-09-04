import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeesRequest } from './services/actions';
import { EmployeesList } from './components/EmployeesList/EmployeesList';
import { RootState } from '../../rootReducer';
import { ActiveEmployees } from './components/ActiveEmployees/ActiveEmployees';
import styles from './Empoyees.module.scss';

export const Employees = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeesRequest());
  }, []);

  const employeesList = useSelector((state: RootState) => state.EmployeesReducer.employeesList);

  return (
    <div>
      <div className={styles.wrapper}>
        <div>
          <h1>Employees</h1>
          <EmployeesList employeesList={employeesList} />
        </div>
        <div>
          <h1>Active Employees</h1>
          <ActiveEmployees employeesList={employeesList} />
        </div>
      </div>
    </div>
  );
};
