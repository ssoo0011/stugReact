import { useEffect, useState, useCallback } from "react"; // useCallback 추가
import api from "../../services/apiClient.js";
import { useAlert } from "../../components/common/AlertSystem.jsx";

export default function useGroupDetail(groupId) {
    const { openAlert } = useAlert();
    const [data, setData] = useState([]);

    // 1. fetch 로직을 useEffect 밖으로 빼서 useCallback으로 감싸면 더 관리하기 편해요.
    const fetchData = useCallback(async () => {
        if (!groupId) return;

        try {
            const res = await api.get(`/api/group/detail?groupId=${groupId}`);
            setData(res.data.group || {});
        } catch (e) {
            console.error(e);
            openAlert("danger", "서버 요청 중 오류가 발생했습니다.");
        }
    }, [groupId, openAlert]); // 여기서 필요한 모든 의존성을 관리

    useEffect(() => {
        fetchData();
    }, [fetchData]); // 의존성 배열에는 fetchData만 넣으면 끝!

    return { data };
}