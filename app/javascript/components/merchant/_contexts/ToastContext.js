import React, { 
    useEffect, useState,
    useCallback, createContext 
} from "react";

import { Toast } from "../../utils";

const ToastContext = createContext();

export default ToastContext;

export function ToastContextProvider({ children }){
    const [toast, setToast] = useState(null);

    return (
        <ToastContext.Provider value={setToast}>
            { children }
            {
                toast
                ?
                <Toast
                    type={toast.type}
                    message={toast.message}
                />
                : null
            }
        </ToastContext.Provider>
    );
}