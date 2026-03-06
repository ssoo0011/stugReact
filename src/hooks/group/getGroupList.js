import { useEffect, useState } from "react";
import api from "../../services/apiClient.js";
import { useAlert } from "../../components/common/AlertSystem.jsx";

export default function useGroupList(category, page = 1, keyword = "", meetType) {
    const { openAlert } = useAlert();
    const [data, setData] = useState([]);
    const [maxPage, setMaxPage] = useState(1);
    const [hasNext, setHasNext] = useState(false);
    const [popularGroupList, setPopularGroupList] = useState([]);

    useEffect(() => {
        if (!category) return;

        const fetch = async () => {
            try {
                const res = await api.get(`/api/group/${category}/list?page=${page}&keyword=${keyword}&meetType=${meetType}`);

                const newData = res.data.groupList || [];

                setData(prevData => {
                    if (page === 1) return newData;
                    return [...prevData, ...newData];
                });
                setMaxPage(res.data.maxPage || 1);
                setPopularGroupList(res.data.popularGroupList || []);
                setHasNext(res.data.hasNext || false);

            } catch (e) {
                console.log(e);
                openAlert("danger", "서버 요청 중 오류가 발생했습니다.");
            }
        };

        fetch();
    }, [category, page, keyword, meetType]); // 💡 category나 page가 바뀔 때마다 실행됨!

    return {data, maxPage, popularGroupList, hasNext};
}