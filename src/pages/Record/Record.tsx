import { useState, useEffect } from "react";
import "./index.scss";
import { useRecoilState } from "recoil";
import { ProfileListRecoil } from "../../recoil/Atoms";
import ModalProfileAdd from "../../components/ModalProfileAdd/ModalProfileAdd";
import ModalProfileUpdate from "../../components/ModalProfileUpdate/ModalProfileUpdate";
import ProfileTable from "../../components/ProfileTable/ProfileTable";
import ProfileControl from "../../components/ProfileControl/ProfileControl";

function Record() {
    const [profileList] = useRecoilState<any>(ProfileListRecoil);
    const [idProfile, setIdProfile] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");
    const [showData, setShowData] = useState<any>([]);
    const [chooseFilter, setChooseFilter] = useState<string>("All");
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        setCurrentPage(1);
        const filteredData =
            profileList.length !== undefined &&
            profileList.filter((x: any) => {
                if (chooseFilter === "Email") {
                    return x.email
                        .toLowerCase()
                        .includes(searchText.toLowerCase());
                }
                if (chooseFilter === "Full Name") {
                    return x.fullName
                        .toLowerCase()
                        .includes(searchText.toLowerCase());
                }
                if (chooseFilter === "Nick Name") {
                    return x.nickName
                        .toLowerCase()
                        .includes(searchText.toLowerCase());
                }
                if (chooseFilter === "All") {
                    return (
                        x.fullName
                            .toLowerCase()
                            .includes(searchText.toLowerCase()) ||
                        x.nickName
                            .toLowerCase()
                            .includes(searchText.toLowerCase()) ||
                        x.email.toLowerCase().includes(searchText.toLowerCase())
                    );
                }
            });
        if (searchText.length > 0) {
            setShowData(filteredData);
        } else {
            setShowData(profileList);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profileList, searchText, chooseFilter]);

    return (
        <div className="recordPage container">
            <ModalProfileAdd />
            <ModalProfileUpdate idProfile={idProfile} />
            <p className="fs-4 fw-bolder mt-4 text-center">Records</p>
            <div className="d-flex">
                <ProfileTable
                    showData={showData}
                    setShowData={setShowData}
                    setIdProfile={setIdProfile}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                <ProfileControl
                    setSearchText={setSearchText}
                    chooseFilter={chooseFilter}
                    setChooseFilter={setChooseFilter}
                />
            </div>
        </div>
    );
}

export default Record;
