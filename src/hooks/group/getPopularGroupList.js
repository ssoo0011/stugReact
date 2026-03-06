import { useEffect, useState } from "react";
import api from "../../services/apiClient.js";
import { useAlert } from "../../components/common/AlertSystem.jsx";

export default function usePopularGroupList(category) {
    const { openAlert } = useAlert();
    const [popularGroupList, setPopularGroupList] = useState([]);

    useEffect(() => {
        if (!category) return;

        const fetch = async () => {
            try {
                const res = await api.get(`/api/group/${category}/popular_list`);
                setPopularGroupList(res.data.popularGroupList || []);
            } catch (e) {
                console.log(e);
                openAlert("danger", "서버 요청 중 오류가 발생했습니다.");
            }
        };

        fetch();
    }, [category]); // 💡 category나 page가 바뀔 때마다 실행됨!

    return {popularGroupList};
}