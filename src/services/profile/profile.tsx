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
    } catch (error: any) {
        console.log("error");
    }
};

export const ServiceProfileAdd = async (
    email: string,
    fullName: string,
    nickName: string
) => {
    try {
        const resData = await apiClient.post(endpointProfile.PROFILE_ADD.path, {
            fullName,
            nickName,
            email,
        });
        if (resData) {
            return resData.data;
        }
    } catch (error: any) {
        console.log("error");
    }
};

export const ServiceProfileUpdate = async (
    idProfile: string,
    email: string,
    fullName: string,
    nickName: string
) => {
    try {
        const resData = await apiClient.put(
            `${endpointProfile.PROFILE_UPDATE.path}/${idProfile}`,
            {
                fullName,
                nickName,
                email,
            }
        );
        if (resData) {
            return resData.data;
        }
    } catch (error: any) {
        console.log("error");
    }
};

export const ServiceProfileDelete = async (idProfile: string) => {
    try {
        const resData = await apiClient.delete(
            `${endpointProfile.PROFILE_DELETE.path}/${idProfile}`
        );
        if (resData) {
            return resData.data;
        }
    } catch (error: any) {
        console.log("error");
    }
};
