import { useState } from "react";
import { useRecoilState } from "recoil";
import {
    ProfileListRecoil,
    TriggerProfileListRecoil,
} from "../../recoil/Atoms";
import { ServiceProfileDelete } from "../../services";
import { IProfile } from "../../interfaces/interface";

export interface IProps {
    setIdProfile: React.Dispatch<React.SetStateAction<string>>;
    showData: IProfile[];
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    setProfileSpecify: React.Dispatch<React.SetStateAction<IProfile>>;
}

export default function ProfileTable({
    setIdProfile,
    showData,
    currentPage,
    setCurrentPage,
    setProfileSpecify,
}: IProps) {
    const [itemPerPage, setItemPerPage] = useState<number>(5);
    const [profileList] = useRecoilState<IProfile[]>(ProfileListRecoil);
    const [, setTriggerProfileList] = useRecoilState<boolean>(
        TriggerProfileListRecoil
    );

    const totalPages = Math.ceil(showData.length / itemPerPage);

    const handleProfileUpdate = (id: string) => {
        setIdProfile(id);
    };

    const handleProfileDelete = async (id: string) => {
        await ServiceProfileDelete(id).then(() => {
            setTriggerProfileList(true);
        });
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div style={{ width: "100%" }}>
            {profileList && profileList.length !== undefined ? (
                <div>
                    <div className="fs-5 text-center">Profile</div>
                    <table className="table table-hover table-striped table-light">
                        <thead>
                            <tr>
                                <th scope="col">Email</th>
                                <th scope="col">FullName</th>
                                <th scope="col">NickName</th>
                                <th scope="col">PhotoURL</th>
                                <th scope="col">{}</th>
                                <th scope="col">{}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showData.length !== undefined &&
                                showData.length !== 0 &&
                                [...showData]
                                    .sort(
                                        (a, b) =>
                                            Date.parse(b.createdAt) -
                                            Date.parse(a.createdAt)
                                    )
                                    .map((x: IProfile, index: number) => {
                                        const key = index;
                                        if (
                                            index >=
                                                (currentPage - 1) *
                                                    itemPerPage &&
                                            index < itemPerPage * currentPage
                                        )
                                            return (
                                                <tr
                                                    className="col"
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    key={key}
                                                    onClick={() =>
                                                        setProfileSpecify(x)
                                                    }
                                                >
                                                    <td className="col-2">
                                                        {x.email}
                                                    </td>
                                                    <td className="col-3">
                                                        {x.fullName}
                                                    </td>
                                                    <td className="col-2">
                                                        {x.nickName}
                                                    </td>
                                                    <td className="col-3 link-primary ">
                                                        <a
                                                            className="d-inline-block text-truncate"
                                                            href={
                                                                x.profilePhoto
                                                            }
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            {x.profilePhoto}
                                                        </a>
                                                    </td>
                                                    <td className="col-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalProfileUpdate"
                                                            onClick={() =>
                                                                handleProfileUpdate(
                                                                    x.id
                                                                )
                                                            }
                                                        >
                                                            Edit
                                                        </button>
                                                    </td>
                                                    <td className="col-1">
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
                                                            onClick={() =>
                                                                handleProfileDelete(
                                                                    x.id
                                                                )
                                                            }
                                                        >
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            );
                                        return null;
                                    })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="fs-6 fw-bolder mt-4 text-center">No Data</p>
            )}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <div className="input">
                        <button
                            className="btn btn-light dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {itemPerPage}
                        </button>
                        <ul className="dropdown-menu">
                            <button
                                type="button"
                                className="dropdown-item"
                                onClick={() => setItemPerPage(5)}
                            >
                                5
                            </button>
                            <button
                                type="button"
                                className="dropdown-item"
                                onClick={() => setItemPerPage(10)}
                            >
                                10
                            </button>
                            <button
                                type="button"
                                className="dropdown-item"
                                onClick={() => setItemPerPage(15)}
                            >
                                15
                            </button>
                        </ul>
                    </div>
                    <li
                        className={`page-item ${
                            currentPage === 1 ? "disabled" : ""
                        }`}
                    >
                        <button
                            type="button"
                            className="page-link"
                            onClick={() => handlePageChange(currentPage - 1)}
                            aria-disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                    </li>
                    {Array.from({ length: totalPages }).map((_, index) => {
                        const key = index + 1;
                        return (
                            <li
                                key={key}
                                className={`page-item ${
                                    currentPage === index + 1 ? "active" : ""
                                }`}
                            >
                                <button
                                    type="button"
                                    className="page-link"
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        );
                    })}
                    <li
                        className={`page-item ${
                            currentPage === totalPages ? "disabled" : ""
                        }`}
                    >
                        <button
                            type="button"
                            className="page-link"
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
