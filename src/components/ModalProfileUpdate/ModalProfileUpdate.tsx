import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
    ProfileListRecoil,
    TriggerProfileListRecoil,
} from "../../recoil/Atoms";
import { ServiceProfileUpdate } from "../../services";

export default function ModalProfileUpdate({ idProfile }: any) {
    const [profileList] = useRecoilState<any>(ProfileListRecoil);
    const [, setTriggerProfileList] = useRecoilState<boolean>(
        TriggerProfileListRecoil
    );
    const [email, setEmail] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [nickName, setNickName] = useState<string>("");

    useEffect(() => {
        setEmail(
            profileList.length !== undefined &&
                profileList.filter((x: any) => x.id === idProfile)[0]?.email
        );
        setFullName(
            profileList.length !== undefined &&
                profileList.filter((x: any) => x.id === idProfile)[0]?.fullName
        );
        setNickName(
            profileList.length !== undefined &&
                profileList.filter((x: any) => x.id === idProfile)[0]?.nickName
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idProfile]);

    const handleProfileUpdate = async () => {
        await ServiceProfileUpdate(idProfile, email, fullName, nickName).then(
            () => {
                setTriggerProfileList(true);
            }
        );
    };

    return (
        <div
            className="modal fade"
            id="modalProfileUpdate"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Update Profile
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
                                value={email}
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
                                value={fullName}
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
                                value={nickName}
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
                            onClick={() => handleProfileUpdate()}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
