import React, { FC, useState } from "react";
import s from "./RadioBtn.module.css";

interface PropsType {
  id: string;
  value: string
  changeValue:(e: any) => void
}
const RadioBtn: FC<PropsType> = ({ id, changeValue, value }) => {
  return (
    <div>
       <Radio id={id} value={value} changeValue={changeValue} label="not active" />
       <Radio id={id} value={value} changeValue={changeValue} label="active" />
    </div>
  );
};

interface radioPropsType extends PropsType {
   label: string
}
const Radio: FC<radioPropsType> = ({ id, changeValue, value, label }) => {
   return (
      <div className={s.radio}>
        <label>
          <input
            className={s.radioInput}
            onChange={changeValue}
            type="radio"
            name={id}
            value={label}
            checked={value === label ? true : false}
          />
          <span className={s.radioStyles}></span>
          {label}
        </label>
      </div>
   )
}

export default RadioBtn;
