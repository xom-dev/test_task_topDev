import React from 'react';
import { EmployeesListInterface } from '../../../../entities/Employees/interface';
import styles from './ActiveEmloyees.module.scss';

type Props = { employeesList: EmployeesListInterface[] };

export const ActiveEmployees: React.FC<Props> = ({ employeesList }) => {
  return (
    <div className={styles.wrapper}>
      {employeesList?.map((employee, index) => (
        <div key={index}>
          {employee?.user?.map((info, index) => (
            <div key={index}>
              {info.isActive ? (
                <span className={styles.info}>
                  {info?.firstName} {info?.lastName} - {info.dob}
                </span>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
