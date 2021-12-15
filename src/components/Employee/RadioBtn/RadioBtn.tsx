import React, { FC, memo, useState } from "react";
import s from "./RadioBtn.module.css";

interface PropsType {
  id: string;
  value: string
  changeValue:(e: any) => void
  isActive: boolean
}
const RadioBtn: FC<PropsType> = ({ id, changeValue, value, isActive }) => {
   
  return (
    <div>
       <div className={s.radio}>
        <label>
          <input
            className={s.radioInput}
            onChange={changeValue}
            type="radio"
            name={id}
            value="not active"
            checked={!isActive ? true : false}
          />
          <span className={s.radioStyles}></span>
          not active
        </label>
      </div>
      <div className={s.radio}>
        <label>
          <input
            className={s.radioInput}
            onChange={changeValue}
            type="radio"
            name={id}
            value={"active"}
            checked={isActive ? true : false}
          />
          <span className={s.radioStyles}></span>
          active
        </label>
      </div>
       {/* <Radio id={id} value={value} changeValue={changeValue} label="not active" isActive={isActive} />
       <Radio id={id} value={value} changeValue={changeValue} label="active" isActive={isActive} /> */}
    </div>
  );
};

// interface radioPropsType extends PropsType {
//    label: string
// }
// const Radio: FC<radioPropsType> = ({ id, changeValue, value, label, isActive }) => {
//    console.log(isActive);
   
//    return (
//       <div className={s.radio}>
//         <label>
//           <input
//             className={s.radioInput}
//             onChange={changeValue}
//             type="radio"
//             name={id}
//             value={label}
//             checked={value === label ? true : false}
//           />
//           <span className={s.radioStyles}></span>
//           {label}
//         </label>
//       </div>
//    )
// }

export default RadioBtn;
