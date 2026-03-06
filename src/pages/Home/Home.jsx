import GroupCard from "../../components/common/GroupCard.jsx"
import usePopularGroupList from "../../hooks/group/getPopularGroupList.js";


export default function App() {

    const data = usePopularGroupList("study").popularGroupList;

    return (
        <>
            <main id="content" role="main">
                {/* section 1.메인 배너*/}
                <div className="d-flex justify-content-center mt-5">
                    <div className="bg-img-center rounded-3 container row"
                         style={{backgroundImage: "url(/assets/img/1920x800/img2.jpg)"}}>
                        <div
                            className="container d-flex justify-content-end flex-column min-vh-lg-75 content-space-1 content-space-lg-b-3">
                            <div className="w-lg-65 col-6">
                                <span className="text-white" style={{fontFamily: "SeoulAlrim-Medium"}}>
                                    나에게 꼭 맞는 스터디 그룹 구하기
                                    <a className="badge bg-dark text-white rounded-pill ms-1" href="#">GO !</a>
                                </span>
                                <h1 className="text-white" style={{fontFamily: "SeoulAlrim-ExtraBold"}}>Come study
                                    with <span className="text-primary bg-white p-2 rounded-2">STU-G</span></h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* section 2.금주 인기*/}
                <div className="container content-space-t-3 content-space-t-lg-2 mb-4">
                    <div className="mx-lg-auto">
                        <h3>🔥 이번주 인기 그룹</h3>
                    </div>
                    <div className="row">
                        <GroupCard data={data}/>
                    </div>
                </div>
            </main>
        </>
);

}