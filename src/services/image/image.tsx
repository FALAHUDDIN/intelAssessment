import { endpointImage } from "../../apis/endpoint/endpoint";
import apiClient from "../../apis/interceptor/interceptor";
// import {
//     StoreLocalAdd,
//     StoreLocalRemove,
//     ToastCustom,
//     ToastError,
// } from "../../utils";

export const ServiceImageSpecify = async (
    idProfile: string,
    idImage?: string
) => {
    try {
        const resData = await apiClient.get(endpointImage.IMAGE_SPECIFY.path, {
            params: {
                idProfile,
                idImage,
            },
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

export default ServiceImageSpecify;
