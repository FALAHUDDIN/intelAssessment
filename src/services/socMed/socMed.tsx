import { endpointSocMed } from "../../apis/endpoint/endpoint";
import apiClient from "../../apis/interceptor/interceptor";
// import {
//     StoreLocalAdd,
//     StoreLocalRemove,
//     ToastCustom,
//     ToastError,
// } from "../../utils";

export const ServiceSocMedSpecify = async (
    idProfile: string,
    idSocMed?: string
) => {
    try {
        const resData = await apiClient.get(
            endpointSocMed.SOCMED_SPECIFY.path,
            {
                params: {
                    idProfile,
                    idSocMed,
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

export default ServiceSocMedSpecify;
