import { useRecoilState } from "recoil";
import {
    ProfileListRecoil,
    TriggerProfileListRecoil,
} from "../../recoil/Atoms";
import { ServiceProfileDelete } from "../../services";

export default function ProfileTable({
    setIdProfile,
    showData,
    currentPage,
    setCurrentPage,
}: any) {
    const itemPerPage = 5;
    const totalPages = Math.ceil(showData.length / itemPerPage);

    const [profileList] = useRecoilState<any>(ProfileListRecoil);
    const [, setTriggerProfileList] = useRecoilState<boolean>(
        TriggerProfileListRecoil
    );

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
        <div style={{ width: "70%" }}>
            {profileList.length !== undefined ? (
                <table className="table table-hover table-striped table-light">
                    <thead>
                        <tr>
                            <th scope="col">{}</th>
                            <th scope="col">Email</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Nick Name</th>
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
                                .map((x: any, index: number) => {
                                    const key = index;
                                    if (
                                        index >=
                                            (currentPage - 1) * itemPerPage &&
                                        index < itemPerPage * currentPage
                                    )
                                        return (
                                            <tr
                                                className="table-active"
                                                key={key}
                                            >
                                                <th scope="col">{}</th>
                                                <td>{x.email}</td>
                                                <td>{x.fullName}</td>
                                                <td>{x.nickName}</td>
                                                <td
                                                    style={{
                                                        width: "5%",
                                                    }}
                                                >
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
                                                <td
                                                    style={{
                                                        width: "8%",
                                                    }}
                                                >
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
                                })}
                    </tbody>
                </table>
            ) : (
                <p className="fs-6 fw-bolder mt-4 text-center">No Data</p>
            )}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
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
                        return (
                            <li
                                key={index}
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
