import { call, put, takeLatest } from 'redux-saga/effects';
import { filter } from 'lodash';
import { GET_EMPLOYEES_REQUEST } from './constants';
import { EmployeesService } from '../../../entities/Employees/service';
import { Employees, EmployeesListInterface } from '../../../entities/Employees/interface';
import { getEmployeesError, getEmployeesSuccess } from './actions';

function* getEmployeesSaga() {
  try {
    const response: [Employees] = yield call(EmployeesService.getEmployees);
    response.map((user) => (user.isActive = false));
    response.map(
      (user) =>
        (user.dob = new Date(user.dob).toLocaleDateString('en-us', {
          day: 'numeric',
          year: 'numeric',
          month: 'short'
        }))
    );

    const alphabetArr: EmployeesListInterface[] = [
      { letter: 'A', user: [] },
      { letter: 'B', user: [] },
      { letter: 'C', user: [] },
      { letter: 'D', user: [] },
      { letter: 'E', user: [] },
      { letter: 'F', user: [] },
      { letter: 'G', user: [] },
      { letter: 'H', user: [] },
      { letter: 'I', user: [] },
      { letter: 'J', user: [] },
      { letter: 'K', user: [] },
      { letter: 'L', user: [] },
      { letter: 'M', user: [] },
      { letter: 'N', user: [] },
      { letter: 'O', user: [] },
      { letter: 'P', user: [] },
      { letter: 'Q', user: [] },
      { letter: 'R', user: [] },
      { letter: 'S', user: [] },
      { letter: 'T', user: [] },
      { letter: 'U', user: [] },
      { letter: 'V', user: [] },
      { letter: 'W', user: [] },
      { letter: 'X', user: [] },
      { letter: 'Y', user: [] },
      { letter: 'Z', user: [] }
    ];

    alphabetArr.map((symbol: { letter: string; user: Employees[] }) => {
      symbol.user = filter(response, (employee: Employees) => employee.firstName.slice(0, 1) === symbol.letter);
    });

    yield put(getEmployeesSuccess(alphabetArr));
  } catch (error: any) {
    yield put(getEmployeesError(error));
  }
}

export function* employeesSagaWatcher() {
  yield takeLatest(GET_EMPLOYEES_REQUEST, getEmployeesSaga);
}
