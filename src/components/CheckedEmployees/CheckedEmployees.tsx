import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { deleteActiveEmployees, employeeType } from "../../store/reducers/employeesReducer";
import { createDOB, deleteSelectedEmployee } from "../../utils/utils";
import s from "./CheckedEmployees.module.css";

const CheckedEmployees: FC = () => {
  const { employeesActive } = useAppSelector((state) => state.employees);
  const dispatch = useAppDispatch()

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <h2>Checked Employees</h2>
        {Object.entries(employeesActive).map(([key, value]) => (
          <div className={s.monthList}>
            {value.length !== 0 ? <div className={s.month}>{key}</div> : null}
            {value.map((item: employeeType) => (
              <div className={s.employee}>
                <span className={s.deleteBtn} onClick={() => dispatch(deleteActiveEmployees(deleteSelectedEmployee(item)))}></span>{item.lastName} - {createDOB(item.dob)} 
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckedEmployees;
