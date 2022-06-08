import { environment } from '../../../environments/environment';
export class AppUtil {
  constructor() {}

  /**
   * @name searchInArrayOfObjects
   * @desc Search string in array of objects
   */
  static searchInArrayOfObjects(array: Array<any>, key: string, value: number) {
    for (let i = 0; i < array.length; i++) {
      if (array[i][key] === value) {
        return array[i];
      }
    }
  }
}
