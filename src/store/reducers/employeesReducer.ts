import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface employeeType {
   id: string,
   firstName: string,
   lastName: string,
   dob: string
}
// interface EmployeesActive {
//    january?: employeeType[]
//    february?: employeeType[]
//    march?: employeeType[]
//    april?: employeeType[]
//    may?: employeeType[]
//    june?: employeeType[]
//    july?: employeeType[]
//    august?: employeeType[]
//    september?: employeeType[]
//    october?: employeeType[]
//    november?: employeeType[]
//    december?: employeeType[]
// }
interface initialStateType {
   employees: employeeType[]
   employeesActive: employeeType[]
   status: null | string
   error: null | string
}
const initialState: initialStateType = {
   employees: [],
   employeesActive: [],
   status: null,
   error: null,
}
export const fetchEmployees = createAsyncThunk("fetchEmployees", async (_, thunkApi) => {
   try {
      const response = await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      return response.data.sort((a: employeeType, b: employeeType) => a.lastName > b.lastName ? 1 : -1)
   } catch (error) {
      return thunkApi.rejectWithValue
   }
})

const employeesSlice = createSlice({
   name: "employees",
   initialState,
   reducers: {
      deleteActiveEmployees: (state, action: PayloadAction<employeeType>) => {
         state.employeesActive = state.employeesActive.filter(item => item.id !== action.payload.id)
      },
      addActiveEmployees: (state, action: PayloadAction<employeeType>) => {
         state.employeesActive.push(action.payload)
      }
   }, extraReducers: {
      [fetchEmployees.pending.type]: (state) => {
         state.status = "loading"
      },
      [fetchEmployees.fulfilled.type]: (state, action: PayloadAction<employeeType[]>) => {
         state.status = "resolved"
         state.employees = action.payload
         state.error = null
      },
      [fetchEmployees.rejected.type]: (state, action: PayloadAction<string>) => {
         state.status = "rejected"
         state.error = action.payload
      }
   }
})


export const { addActiveEmployees, deleteActiveEmployees } = employeesSlice.actions
export default employeesSlice.reducer