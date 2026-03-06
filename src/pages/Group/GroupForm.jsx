import InputForm from "../../components/common/InputForm.jsx";
import SelectForm from "../../components/common/SelectForm.jsx";
import TextareaForm from "../../components/common/TextareaForm.jsx";

export default function GroupForm() {



    return (
        <>
            <main id="content" role="main">
                <div className="bg-light py-4">
                    <div className="container justify-content-center d-flex content-space-t-2 content-space-b-2">
                        <div className="card col-9">
                            <div className="card-header">
                                <h2>그룹 등록</h2>
                            </div>
                            <div className="card-body">
                                <InputForm
                                    label='그룹명'
                                    type='text'
                                    placeholder='그룹 이름을 입력해주세요.'
                                />
                                <SelectForm
                                    label='카테고리'
                                    id='category'
                                    name='category'
                                    options={[
                                        {value: 'study', label: '스터디'},
                                        {value: 'activity', label: '대외활동'},
                                        {value: 'club', label: '동아리'},
                                        {value: 'friendship', label: '친목'},
                                    ]}
                                />
                                <TextareaForm
                                    label='그룹 소개'
                                    type='text'
                                    placeholder='그룹 소개를 입력해주세요.'
                                />
                                <InputForm
                                    label='해시태그'
                                    type='text'
                                    placeholder='관련 해시태그를 입력해주세요.'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
);
}