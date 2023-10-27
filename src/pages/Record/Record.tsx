import { useState, useEffect } from "react";
import "./index.scss";
import { useRecoilState } from "recoil";
import {
    ProfileListRecoil,
    ProfileSpecifyRecoil,
    DetailSpecifyRecoil,
    BiographySpecifyRecoil,
    JobHistorySpecifyRecoil,
    EducationSpecifyRecoil,
    SocMedSpecifyRecoil,
    ImageSpecifyRecoil,
} from "../../recoil/Atoms";
import ModalProfileAdd from "../../components/ModalProfileAdd/ModalProfileAdd";
import ModalProfileUpdate from "../../components/ModalProfileUpdate/ModalProfileUpdate";
import ProfileTable from "../../components/ProfileTable/ProfileTable";
import ProfileControl from "../../components/ProfileControl/ProfileControl";
import {
    ServiceDetailSpecify,
    ServiceBiographySpecify,
    ServiceJobHistorySpecify,
    ServiceEducationSpecify,
    ServiceSocMedSpecify,
    ServiceImageSpecify,
} from "../../services";
import {
    IProfile,
    IDetail,
    IBiography,
    IJobHistory,
    IEducation,
    ISocMed,
    IImage,
} from "../../interfaces/interface";
import { InitProfile } from "../../interfaces/initial";

function Record() {
    const [idProfile, setIdProfile] = useState<string>("");
    const [searchText, setSearchText] = useState<string>("");
    const [chooseFilter, setChooseFilter] = useState<string>("All");
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [profileList] = useRecoilState<IProfile[]>(ProfileListRecoil);
    // recoilState
    const [profileSpecify, setProfileSpecify] =
        useRecoilState<IProfile>(ProfileSpecifyRecoil);
    const [detailSpecify, setDetailSpecify] =
        useRecoilState<IDetail>(DetailSpecifyRecoil);
    const [biographySpecify, setBiographySpecify] = useRecoilState<IBiography>(
        BiographySpecifyRecoil
    );
    const [jobHistorySpecify, setJobHistorySpecify] =
        useRecoilState<IJobHistory>(JobHistorySpecifyRecoil);
    const [educationSpecify, setEducationSpecify] = useRecoilState<IEducation>(
        EducationSpecifyRecoil
    );
    const [socMedSpecify, setSocMedSpecify] =
        useRecoilState<ISocMed>(SocMedSpecifyRecoil);
    const [imageSpecify, setImageSpecify] =
        useRecoilState<IImage>(ImageSpecifyRecoil);
    // inPageState
    const [showData, setShowData] = useState<IProfile[]>([InitProfile]);

    useEffect(() => {
        const { id } = profileSpecify;
        ServiceDetailSpecify(id).then((x) => {
            setDetailSpecify(x);
        });
        ServiceBiographySpecify(id).then((x) => {
            setBiographySpecify(x);
        });
        ServiceJobHistorySpecify(id).then((x) => {
            setJobHistorySpecify(x);
        });
        ServiceEducationSpecify(id).then((x) => {
            setEducationSpecify(x);
        });
        ServiceSocMedSpecify(id).then((x) => {
            setSocMedSpecify(x);
        });
        ServiceImageSpecify(id).then((x) => {
            setImageSpecify(x);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profileSpecify]);

    useEffect(() => {
        setCurrentPage(1);
        if (profileList) {
            const filteredData: IProfile[] = profileList.filter(
                (x: IProfile) => {
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
                    if (chooseFilter === "Photo URL") {
                        return x.profilePhoto
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
                            x.email
                                .toLowerCase()
                                .includes(searchText.toLowerCase()) ||
                            x.profilePhoto
                                .toLowerCase()
                                .includes(searchText.toLowerCase())
                        );
                    }
                    return null;
                }
            );
            if (searchText.length > 0) {
                setShowData(filteredData);
            } else {
                setShowData(profileList);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profileList, searchText, chooseFilter]);

    const handleAboutMeRedirect = () => {
        window.location.hash = "/about-me";
    };

    return (
        <div className="recordPage container">
            <ModalProfileAdd />
            <ModalProfileUpdate idProfile={idProfile} />
            <p className="fs-4 fw-bolder mt-4 text-center">Records</p>
            <div className="profile">
                <ProfileTable
                    showData={showData}
                    setIdProfile={setIdProfile}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    setProfileSpecify={setProfileSpecify}
                />
                <ProfileControl
                    setSearchText={setSearchText}
                    chooseFilter={chooseFilter}
                    setChooseFilter={setChooseFilter}
                />
            </div>
            <div className="detail">
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => handleAboutMeRedirect()}
                >
                    Show In About me: {profileSpecify.fullName}
                </button>
                <div className="jsonData shadow-lg">
                    <div className="pt-4 fw-bold text-center">
                        JSON DATA FROM DB
                    </div>
                    <div className="fw-bold text-center">
                        Select any row from table to show here
                    </div>
                    <div className="fw-bold text-center">
                        Click button above to show in About Me page
                    </div>
                    <div className="pt-4 fw-bold">Profile</div>
                    <div style={{ whiteSpace: "pre-wrap", width: "20rem" }}>
                        {JSON.stringify(profileSpecify, null, 2)}
                    </div>
                    <div className="pt-4 fw-bold">Detail</div>
                    <div style={{ whiteSpace: "pre-wrap", width: "20rem" }}>
                        {JSON.stringify(detailSpecify, null, 2)}
                    </div>
                    <div className="pt-4 fw-bold">Biography</div>
                    <div style={{ whiteSpace: "pre-wrap", width: "20rem" }}>
                        {JSON.stringify(biographySpecify, null, 2)}
                    </div>
                    <div className="pt-4 fw-bold">Job History</div>
                    <div style={{ whiteSpace: "pre-wrap", width: "20rem" }}>
                        {JSON.stringify(jobHistorySpecify, null, 2)}
                    </div>
                    <div className="pt-4 fw-bold">Education</div>
                    <div style={{ whiteSpace: "pre-wrap", width: "20rem" }}>
                        {JSON.stringify(educationSpecify, null, 2)}
                    </div>
                    <div className="pt-4 fw-bold">Social Media</div>
                    <div style={{ whiteSpace: "pre-wrap", width: "20rem" }}>
                        {JSON.stringify(socMedSpecify, null, 2)}
                    </div>
                    <div className="pt-4 fw-bold">Images</div>
                    <div style={{ whiteSpace: "pre-wrap", width: "20rem" }}>
                        {JSON.stringify(imageSpecify, null, 2)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Record;
