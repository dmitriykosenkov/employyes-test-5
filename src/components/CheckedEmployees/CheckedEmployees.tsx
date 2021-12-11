import { FC } from "react";
import { useAppSelector } from "../../store/hooks/hooks";
import { createDOB } from "../../utils/utils";
import s from "./CheckedEmployees.module.css";


const CheckedEmployees: FC = () => {
   const {employeesActive} = useAppSelector(state => state.employees)

   return (
      <div className={s.wrapper}>
         <div className={s.container}>
            <h2>Checked Employees</h2>
            {employeesActive.map(item => (
               <div className={s.employee}>{item.lastName} - {createDOB(item.dob)}</div>
            ))}
         </div>
      </div>
   )
}

export default CheckedEmployees
