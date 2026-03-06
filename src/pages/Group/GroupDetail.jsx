import useGroupDetail from "../../hooks/group/getGroupDetail.js";
import InfoItem from "../../components/common/InfoItem.jsx";
import Progress from "../../components/common/Progress.jsx";
import Button from "../../components/common/Button.jsx";
import {useParams, useSearchParams, Navigate, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function GroupForm() {

    const [searchParams] = useSearchParams();
    const groupId = searchParams.get('groupId');
    const data = useGroupDetail(groupId).data;
    const navigate = useNavigate();
    const listUrl = "/group/" + data.category + "/list";

    const hashtags = data.hashtag ? data.hashtag.split(",") : [];
    const goToList = () => {
        navigate(listUrl);
    }

    useEffect(() => {
        if (!data) {
            alert("존재하지 않는 그룹입니다.");
            navigate("/group/list");
        }
    }, [data, navigate]);

    return (
        <>
            <main id="content" role="main">
                <div className="py-4">
                    <div className="container justify-content-center d-flex content-space-t-2 content-space-b-2">
                        <div className="card col-12">
                            <div className="card-header">
                                <div className={"row"}>
                                    <div className={"col-6"}>
                                        <h2>{data.groupName}</h2>
                                        <div>
                                            <Progress
                                                occupancy={10}
                                                capacity={20}
                                                unit={"명"}
                                            />
                                        </div>
                                    </div>
                                    <div className={"col-6 d-flex justify-content-end align-items-center"}>
                                        <span>{data.ownerNickname}</span>&nbsp; | &nbsp;
                                        <span>{data.createDate?.substring(0, 10)}</span>&nbsp; | &nbsp;
                                        <span className="badge bg-primary text-white">{data.category}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <InfoItem
                                    label={"그룹 설명"}
                                    value={data.description}
                                />
                                <div className="mb-7">
                                    <h5>모임 형식</h5>
                                    <span className="badge bg-primary text-white">{data.meetType}</span>
                                </div>

                                <div className="mb-7">
                                    <h5>연관 단어</h5>
                                    {
                                        hashtags.map((hashtag, index) => (
                                            <span key={index} className="badge bg-warning text-white me-1">{hashtag}</span>
                                        ))
                                    }
                                </div>

                                <div className={"row col-12 d-flex justify-content-end"}>
                                    <Button type={"button"} cssStyle={"btn-sm btn-light col-2"} text={"목록"}
                                            clickEvent={() => goToList}></Button>
                                    <Button type={"button"} cssStyle={"btn-sm btn-primary col-2"}
                                            text={"모임 신청"}></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}