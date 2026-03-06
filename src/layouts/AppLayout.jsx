import { Outlet } from "react-router-dom";
import Header from "../layouts/header/Header.jsx";

export default function AppLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}