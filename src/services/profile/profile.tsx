import { endpointProfile } from "../../apis/endpoint/endpoint";
import apiClient from "../../apis/interceptor/interceptor";
// import {
//     StoreLocalAdd,
//     StoreLocalRemove,
//     ToastCustom,
//     ToastError,
// } from "../../utils";

export const ServiceProfileList = async () => {
    try {
        const resData = await apiClient.get(endpointProfile.PROFILE_LIST.path);
        if (resData) {
            return resData.data;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log("error");
    }
    return null;
};

export const ServiceProfileSpecify = async (idProfile: string) => {
    try {
        const resData = await apiClient.get(
            endpointProfile.PROFILE_SPECIFY.path,
            {
                params: {
                    idProfile,
                },
            }
        );
        if (resData) {
            return resData.data;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log("error");
    }
    return null;
};

export const ServiceProfileAdd = async (
    email: string,
    fullName: string,
    nickName: string,
    profilePhoto: string
) => {
    try {
        const resData = await apiClient.post(endpointProfile.PROFILE_ADD.path, {
            fullName,
            nickName,
            email,
            profilePhoto,
        });
        if (resData) {
            return resData.data;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log("error");
    }
    return null;
};

export const ServiceProfileUpdate = async (
    idProfile: string,
    email: string,
    fullName: string,
    nickName: string,
    profilePhoto: string
) => {
    try {
        const resData = await apiClient.put(
            `${endpointProfile.PROFILE_UPDATE.path}/${idProfile}`,
            {
                fullName,
                nickName,
                email,
                profilePhoto,
            }
        );
        if (resData) {
            return resData.data;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log("error");
    }
    return null;
};

export const ServiceProfileDelete = async (idProfile: string) => {
    try {
        const resData = await apiClient.delete(
            `${endpointProfile.PROFILE_DELETE.path}/${idProfile}`
        );
        if (resData) {
            return resData.data;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log("error");
    }
    return null;
};
