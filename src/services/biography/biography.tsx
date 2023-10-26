import { endpointBiography } from "../../apis/endpoint/endpoint";
import apiClient from "../../apis/interceptor/interceptor";
// import {
//     StoreLocalAdd,
//     StoreLocalRemove,
//     ToastCustom,
//     ToastError,
// } from "../../utils";

export const ServiceBiographySpecify = async (
    idProfile: string,
    idBiography?: string
) => {
    try {
        const resData = await apiClient.get(
            endpointBiography.BIOGRAPHY_SPECIFY.path,
            {
                params: {
                    idProfile,
                    idBiography,
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

export default ServiceBiographySpecify;
