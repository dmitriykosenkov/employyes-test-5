import React, { FC, useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks/hooks";
import {
  addActiveEmployees,
  deleteActiveEmployees,
  employeeType,
} from "../../store/reducers/employeesReducer";
import { createSelectedEmployee, deleteSelectedEmployee } from "../../utils/utils";
import s from "./Employee.module.css";
import RadioBtn from "./RadioBtn/RadioBtn";

type PropsType = {
  employee: employeeType;
};

const Employee: FC<PropsType> = ({ employee }) => {
  const { firstName, lastName, id, isActive } = employee;
  const [value, setValue] = useState("not active");
  const dispatch = useAppDispatch();

  const changeValue = (e: any) => {
    setValue(e.target.value);
    switch (e.target.value) {
       case "not active":
          dispatch(deleteActiveEmployees(deleteSelectedEmployee(employee)))
          break;
       case "active":
          dispatch(addActiveEmployees(createSelectedEmployee(employee)));
          break;
    }
  };
  return (
    <div className={s.employeeWrapper}>
      <div className={!isActive ? s.employeeName : `${s.employeeName} ${s.active}`}>
        {lastName} {firstName}
      </div>
      <RadioBtn id={id} value={value} changeValue={changeValue} isActive={isActive} />
    </div>
  );
};

export default Employee;
