import Reacr, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { fetchEmployees } from "../../store/reducers/employeesReducer";
import { alphabets, filterEmployees } from "../../utils/utils";
import Employee from "../Employee/Employee";
import s from "./BlockEmployees.module.css";


const BlockEmployees: FC = () => {
    const { employees, status } = useAppSelector(
      (state) => state.employees
    );
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(fetchEmployees());
    }, []);
  return (
    <div >
       {status === "loading" ? (
        <h2>Loading...</h2>
      ) : (
         <div className={s.wrapper}>
         <h2 className={s.title}>Employees</h2>
           {alphabets.map((char) => (
            <div className={s.emplByChar}>
            <div className={s.char}>{char.toUpperCase()}</div>
            {filterEmployees(employees, char).length !== 0
              ? filterEmployees(employees, char).map((employee) => (
                  <Employee employee={employee} />
                ))
              : "----"}
          </div>
           ))}
        </div>
      )}
    </div>
  );
};

export default BlockEmployees;
