export interface EmployeesListInterface {
  letter: string;
  user: Employees[];
}

export interface Employees {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  isActive: boolean;
}
