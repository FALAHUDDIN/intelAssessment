export interface IProps {
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    chooseFilter: string;
    setChooseFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function ProfileControl({
    setSearchText,
    chooseFilter,
    setChooseFilter,
}: IProps) {
    return (
        <div className="ms-3">
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
                    <button
                        type="button"
                        className="dropdown-item"
                        onClick={() => setChooseFilter("Photo URL")}
                    >
                        Photo URL
                    </button>
                </ul>
            </div>
            <button
                type="button"
                className="btn btn-success float-end px-4 mb-3"
                data-bs-toggle="modal"
                data-bs-target="#modalProfileAdd"
            >
                Add
            </button>
        </div>
    );
}
