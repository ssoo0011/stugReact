import ListTable from "../../components/common/ListTable.jsx";
import useGroupList from "../../hooks/group/getGroupList.js";
import GroupCard from "../../components/common/GroupCard.jsx";
import ButtonPill from "../../components/common/ButtonPill.jsx";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { useInView } from 'react-intersection-observer';

export default function GroupList() {
    const { category } = useParams();
    const [page, setPage] = useState(1);
    const [ref, inView] = useInView();
    const [inputText, setInputText] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");
    const [meetType, setMeetType] = useState("");

    const data = useGroupList(category, page, searchKeyword, meetType);
    const onChangeKeyword = (e) => {
        setInputText(e.target.value);
    };

    const handleSearchGroup = (e) => {
        e.preventDefault();
        setSearchKeyword(inputText);
        setPage(1);
    };

    useEffect(() => {
        if (inView) {
            const maxPage = data.maxPage;
            const hasNext = data.hasNext;
            if (page >= maxPage && !hasNext) {
                return;
            }
            setPage(prevPage => prevPage + 1);
        }
    }, [inView]);

    const filterGroups = (e) => {
        e.preventDefault();
        setPage(1);
        setMeetType(e.target.value);
    }

    return (
        <>
            <main id="content" role="main">
                <div className="overflow-hidden">
                    <div
                        className="container content-space-t-1 content-space-b-1 content-space-b-lg-2">
                        <div className="w-lg-50 text-center mx-lg-auto">
                            <div className="mb-5">
                                <h1 className="display-4">SEARCH</h1>
                                <p>원하는 그룹을 이름 또는 그룹장 명으로 찾아 보세요.</p>
                            </div>
                            <form id="form" onSubmit={handleSearchGroup}>
                                <div className="position-relative">
                                    <div className="input-card input-card-sm">
                                        <div className="input-card-form">
                                            <label htmlFor="searchForm" className="form-label visually-hidden">Search article</label>
                                            <input type="text" className="form-control form-control-lg" id="searchForm"
                                                   placeholder="그룹명 또는 그룹장" aria-label="그룹명 또는 그룹장"
                                                   onChange={onChangeKeyword} value={inputText}
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg"><i className="bi-search"></i></button>
                                    </div>
                                    <figure
                                        className="position-absolute top-0 end-0 d-none d-sm-block zi-n1 mt-n7 me-n10"
                                        style={{width: "4rem"}}>
                                        <img className="img-fluid" src="/assets/svg/components/pointer-up.svg"
                                             alt="Image Description"/>
                                    </figure>
                                    <figure className="position-absolute bottom-0 start-0 zi-n1 mb-n7"
                                            style={{width: "12rem", marginLeft: "-10rem"}}>
                                        <img className="img-fluid" src="/assets/svg/components/curved-shape.svg"
                                             alt="Image Description"/>
                                    </figure>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container content-space-b-1">
                    <div className="container content-space-t-lg-1">
                        <div className="mx-lg-auto">
                            <h3>🔥 이번주 인기 그룹</h3>
                        </div>
                        <div className="row">
                            <GroupCard data={data.popularGroupList}/>
                        </div>
                    </div>
                </div>
                <div className="container content-space-b-1">

                    <div className="container content-space-t-lg-1">
                        <div className="mx-lg-auto">
                            <h3>⏱️ 최신 그룹</h3>
                        </div>
                        <div className="row mb-2 p-3">
                            <ButtonPill
                                width={"col-2 me-2"}
                                color={"btn-outline-primary"}
                                text={"온라인 모임"}
                                value={"온라인"}
                                onClick={filterGroups}
                            ></ButtonPill>
                            <ButtonPill
                                width={"col-2 me-2"}
                                color={"btn-outline-primary"}
                                value={"오프라인"}
                                onClick={filterGroups}
                                text={"오프라인 모임"}>
                            </ButtonPill>
                        </div>
                        <div className="row">
                            {
                                data.data.length === 0 && (
                                    <div className="text-center mt-5">
                                        <h3 className="text-primary">검색 결과가 없습니다.</h3>
                                    </div>
                                )
                            }
                            <GroupCard data={data.data}/>
                        </div>
                    </div>
                </div>
                <div ref={ref} id="observer" style={{height: "50px", textAlign: "center"}}>
                </div>
            </main>
        </>
    );
}