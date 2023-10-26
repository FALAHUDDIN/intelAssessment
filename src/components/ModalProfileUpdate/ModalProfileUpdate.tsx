import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
    ProfileListRecoil,
    TriggerProfileListRecoil,
} from "../../recoil/Atoms";
import { ServiceProfileUpdate } from "../../services";
import { IProfile } from "../../interfaces/interface";

export interface IProps {
    idProfile: string;
}

export default function ModalProfileUpdate({ idProfile }: IProps) {
    const [profileList] = useRecoilState<IProfile[]>(ProfileListRecoil);
    const [, setTriggerProfileList] = useRecoilState<boolean>(
        TriggerProfileListRecoil
    );
    const [email, setEmail] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [nickName, setNickName] = useState<string>("");
    const [avatar, setAvatar] = useState<string>("");

    useEffect(() => {
        if (profileList) {
            setEmail(
                profileList.filter((x: IProfile) => x.id === idProfile)[0]
                    ?.email
            );
            setFullName(
                profileList.filter((x: IProfile) => x.id === idProfile)[0]
                    ?.fullName
            );
            setNickName(
                profileList.filter((x: IProfile) => x.id === idProfile)[0]
                    ?.nickName
            );
            setAvatar(
                profileList.filter((x: IProfile) => x.id === idProfile)[0]
                    ?.profilePhoto
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idProfile]);

    const handleProfileUpdate = async () => {
        await ServiceProfileUpdate(
            idProfile,
            email,
            fullName,
            nickName,
            avatar
        ).then(() => {
            setTriggerProfileList(true);
        });
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
                                value={email || ""}
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
                                value={fullName || ""}
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
                                value={nickName || ""}
                                onChange={(e) => setNickName(e.target.value)}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Avatar"
                                aria-label="Avatar"
                                aria-describedby="basic-addon1"
                                value={avatar || ""}
                                onChange={(e) => setAvatar(e.target.value)}
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
