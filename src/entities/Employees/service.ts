import { AxiosResponse } from 'axios';

import { instance as axios } from '../../api/axios';

export class EmployeesService {
  public static async getEmployees() {
    try {
      const url = 'tasks/users';
      const response: AxiosResponse = await axios.get(url);

      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
