import { createContext } from "react";

export const FormContext = createContext({
  incomeTotal: 0,
  familyTotal: 0,
  expensesTotal: 0,
});
