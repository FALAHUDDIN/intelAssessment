import { useState, useEffect } from "react";
import "./index.scss";
import { useRecoilState } from "recoil";
import { ProfileListRecoil } from "../../recoil/Atoms";
import ModalProfileAdd from "../../components/ModalProfileAdd/ModalProfileAdd";
import ModalProfileUpdate from "../../components/ModalProfileUpdate/ModalProfileUpdate";
import ProfileTable from "../../components/ProfileTable/ProfileTable";

function Record() {
    const [profileList] = useRecoilState<any>(ProfileListRecoil);
    const [idProfile, setIdProfile] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");
    const [showData, setShowData] = useState<any>([]);
    const [chooseFilter, setChooseFilter] = useState<string>("All");
    const [currentPage, setCurrentPage] = useState(1);

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
                <div className="ms-3" style={{ width: "30%" }}>
                    <div className="input-group mb-3">
                        <span
                            className="input-group-text"
                            id="inputGroup-sizing-default"
                        >
                            Search
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>
                    <div className="input-group mb-3 justify-content-end">
                        <button
                            className="btn btn-outline-secondary dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Filter By: {chooseFilter}
                        </button>
                        <ul className="dropdown-menu">
                            <button
                                type="button"
                                className="dropdown-item"
                                onClick={() => setChooseFilter("All")}
                            >
                                All
                            </button>
                            <button
                                type="button"
                                className="dropdown-item"
                                onClick={() => setChooseFilter("Email")}
                            >
                                Email
                            </button>
                            <button
                                type="button"
                                className="dropdown-item"
                                onClick={() => setChooseFilter("Full Name")}
                            >
                                Full Name
                            </button>
                            <button
                                type="button"
                                className="dropdown-item"
                                onClick={() => setChooseFilter("Nick Name")}
                            >
                                Nick Name
                            </button>
                        </ul>
                    </div>
                    <button
                        type="button"
                        className="btn btn-success float-end px-4"
                        data-bs-toggle="modal"
                        data-bs-target="#modalProfileAdd"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Record;
