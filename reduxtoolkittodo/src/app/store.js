import {configureStore} from "@reduxjs/toolkit"
import todoReduser from "../features/todo/todoSlice"

export const store = configureStore({
    reducer : todoReduser
}) 