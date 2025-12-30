import { useEffect, useState } from "react";
import { getApi } from "../../utils/common.js";

export default function useMyPageUser(navigate) {
    const [user, setUser] = useState({ id: "", name: "", email: "" });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let alive = true;

        getApi("/api/user/myPage")
            .then((res) => {
                if (!alive) return;
                setUser(res.data);
            })
            .catch((e) => {
                console.log(e);
                navigate("/login");
            })
            .finally(() => {
                if (!alive) return;
                setLoading(false);
            });

        return () => {
            alive = false;
        };
    }, [navigate]);

    return { user, setUser, loading };
}
