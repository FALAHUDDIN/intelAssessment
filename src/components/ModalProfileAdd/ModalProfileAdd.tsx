import { useState } from "react";
import { useRecoilState } from "recoil";
import { TriggerProfileListRecoil } from "../../recoil/Atoms";
import { ServiceProfileAdd } from "../../services";

export default function ModalProfileAdd() {
    const [, setTriggerProfileList] = useRecoilState<boolean>(
        TriggerProfileListRecoil
    );
    const [email, setEmail] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [nickName, setNickName] = useState<string>("");

    const handleProfileAdd = async () => {
        await ServiceProfileAdd(email, fullName, nickName).then(() => {
            setTriggerProfileList(true);
        });
    };

    return (
        <div
            className="modal fade"
            id="modalProfileAdd"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Add Profile
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Full Name"
                                aria-label="Full Name"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nick Name"
                                aria-label="Nick Name"
                                aria-describedby="basic-addon1"
                                onChange={(e) => setNickName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={() => handleProfileAdd()}
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
