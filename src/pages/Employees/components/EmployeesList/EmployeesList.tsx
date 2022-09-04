import React from 'react';
import classNames from 'classnames';
import { Employees, EmployeesListInterface } from '../../../../entities/Employees/interface';
import { useDispatch } from 'react-redux';
import { setEmployees } from '../../services/actions';
import styles from './EmployeesList.module.scss';

type Props = { employeesList: EmployeesListInterface[] };

export const EmployeesList: React.FC<Props> = ({ employeesList }) => {
  const dispatch = useDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, employee: Employees) => {
    employee.isActive = e.target.value === 'Active';
    const updatedArr = [...employeesList];
    dispatch(setEmployees(updatedArr));
  };
  return (
    <div className={styles.wrapper}>
      {employeesList?.map((employee, index) => (
        <div key={index} className={styles.users}>
          <h1>{employee.letter}</h1>
          {employee?.user?.map((info, index) => (
            <div key={index} className={styles.user}>
              <span className={classNames(info?.isActive ? styles.isActive : '')}>
                {info?.firstName} {info?.lastName}
              </span>
              <div>
                <input
                  type="radio"
                  value="notActive"
                  checked={!info?.isActive}
                  onChange={(e) => handleChange(e, info)}
                />
                <span>Not Active</span>
              </div>
              <div>
                <input type="radio" value="Active" checked={info?.isActive} onChange={(e) => handleChange(e, info)} />
                <span>Active</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
