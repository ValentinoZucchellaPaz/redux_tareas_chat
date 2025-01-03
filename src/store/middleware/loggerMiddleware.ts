import { Middleware } from "@reduxjs/toolkit";

export const loggerMiddleware: Middleware = (storeAPI) => (next) => (action) => {
    console.log("Despatching action: ", action);
    console.log("Previous state", storeAPI.getState());
    const res = next(action)
    console.log("After state", storeAPI.getState());
    return res
}