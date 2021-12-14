import { createMonthTitle } from '../../utils/utils';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEmployees = createAsyncThunk("fetchEmployees", async (_, thunkApi) => {
   try {
      const response = await axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users')
      return response.data.sort((a: employeeType, b: employeeType) => a.lastName > b.lastName ? 1 : -1)
   } catch (error) {
      return thunkApi.rejectWithValue
   }
})

export interface employeeType {
   id: string,
   firstName: string,
   lastName: string,
   dob: string
   isActive: boolean | false
}

interface monthesType {
   [key: string]: employeeType[]
}

interface initialStateType {
   employees: employeeType[]
   employeesActive: monthesType
   status: null | string
   error: null | string
}

const initialState: initialStateType = {
   employees: [],
   employeesActive: {
      "january": [],
      "february": [],
      "march": [],
      "april": [],
      "may": [],
      "june": [],
      "july": [],
      "august": [],
      "september": [],
      "october": [],
      "november": [],
      "december": [],
   },
   status: null,
   error: null,
}

const employeesSlice = createSlice({
   name: "employees",
   initialState,
   reducers: {
      deleteActiveEmployees: (state, action: PayloadAction<employeeType>) => {
         const month = createMonthTitle(action.payload.dob).toLowerCase()
         state.employeesActive[month] = state.employeesActive[month].filter(item => item.id !== action.payload.id)
      },
      addActiveEmployees: (state, action: PayloadAction<employeeType>) => {
         const month: string = createMonthTitle(action.payload.dob).toLowerCase()
         state.employeesActive[month].push(action.payload)
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