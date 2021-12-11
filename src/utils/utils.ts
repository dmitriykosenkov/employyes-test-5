import { employeeType } from "../store/reducers/employeesReducer";

export const alphabets = [
   "a",
   "b",
   "c",
   "d",
   "e",
   "f",
   "g",
   "h",
   "i",
   "j",
   "k",
   "l",
   "m",
   "n",
   "o",
   "p",
   "q",
   "r",
   "s",
   "t",
   "u",
   "v",
   "w",
   "x",
   "y",
   "z",
 ];

export const filterEmployees = (emp: employeeType[], letter: string) => {
   return emp.filter((item) => item.lastName[0].toLowerCase() === letter);
 };

 export const createDOB = (date: string) => {
   const dob = new Date(date)
   const month = dob.toLocaleString('en', {       
      month: 'long'       
    });
   return `${dob.getDate()} ${month}, ${dob.getFullYear()} year`
}