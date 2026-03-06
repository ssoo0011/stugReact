import {useAuth} from "../../context/auth/AuthContext.jsx";
import Progress from "../common/Progress.jsx";
export default function GroupCard({data = []}) {

    const {isAuth, setIsAuth} = useAuth();

    if (!data) return  (
        <div className="mx-lg-auto">
            인기 그룹 없다.
        </div>
    );

    const handleLinkClick = (e, targetUrl) => {
        if (!isAuth) {
            e.preventDefault();
            alert('로그인이 필요한 서비스입니다.');

            const loginUrl = `/login?redirect=${encodeURIComponent(targetUrl)}`;
            window.location.href = loginUrl;
        } else {
            window.location.href = targetUrl;
        }
    };
    return (
        <>
            {data.map((row, idx) => (
                <div className="col-sm-6 col-md-4 mb-5" key={`row-${idx}`}>
                    <div className="card card-lg card-shadow card-pinned h-100">
                        <span className="badge bg-primary text-white card-pinned-top-end">{row.category}</span>
                        <div className="card-body">
                            <div className="mb-3">
                                <h4 className="mb-1">{row.groupName}</h4>
                                <Progress
                                    occupancy={row.occupancy}
                                    capacity={row.capacity}
                                    unit={"명"}
                                ></Progress>
                            </div>
                            <div className="mb-3">
                                <span className="mb-1"
                                      style={{fontSize: "1.1em", fontWeight: 'bold'}}>{row.description}</span>
                            </div>
                            <div className="d-flex justify-content-end">
                                <a style={{cursor: 'pointer'}} className={"text-primary a-go"}
                                    onClick={(e) => handleLinkClick(e, `/group/detail?groupId=${row.groupId}`)}
                                > GO <i className="bi bi-arrow-right text-primary"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
