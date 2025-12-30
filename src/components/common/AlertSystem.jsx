import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import AlertBox from "./AlertBox.jsx";

const AlertContext = createContext(null);
const CLEAR_AFTER_MS = 2500;

export function AlertProvider({ children }) {
    const [alert, setAlert] = useState({ type: "", message: "" });
    const [visible, setVisible] = useState(false);

    const hideTimerRef = useRef(null);
    const clearTimerRef = useRef(null);

    const clearTimers = useCallback(() => {
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        if (clearTimerRef.current) clearTimeout(clearTimerRef.current);
        hideTimerRef.current = null;
        clearTimerRef.current = null;
    }, []);

    const closeAlert = useCallback(() => {
        clearTimers();
        setVisible(false);

        clearTimerRef.current = setTimeout(() => {
            setAlert({ type: "", message: "" });
            clearTimers();
        }, CLEAR_AFTER_MS);
    }, [clearTimers]);

    const openAlert = useCallback(
        (type, message, ms = 3000) => {
            clearTimers();

            setAlert({ type, message });
            setVisible(true);

            hideTimerRef.current = setTimeout(() => {
                setVisible(false);

                clearTimerRef.current = setTimeout(() => {
                    setAlert({ type: "", message: "" });
                    clearTimers();
                }, CLEAR_AFTER_MS);
            }, ms);
        },
        [clearTimers]
    );

    useEffect(() => {
        return () => clearTimers();
    }, [clearTimers]);

    const value = { alert, visible, openAlert, closeAlert };

    return (
        <AlertContext.Provider value={value}>
            {children}

            {/* 전역으로 떠있는 자리 */}
            <div
                className="position-fixed top-0 end-0 p-3"
                style={{ zIndex: 1080, width: "min(420px, 100%)" }}
            >
                <AlertBox
                    type={alert.type}
                    message={alert.message}
                    visible={visible}
                    onClose={closeAlert}
                />
            </div>
        </AlertContext.Provider>
    );
}

export function useAlert() {
    const ctx = useContext(AlertContext);
    if (!ctx) throw new Error("useAlert must be used within <AlertProvider>.");
    return ctx;
}
