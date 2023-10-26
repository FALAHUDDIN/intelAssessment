import { endpointEducation } from "../../apis/endpoint/endpoint";
import apiClient from "../../apis/interceptor/interceptor";
// import {
//     StoreLocalAdd,
//     StoreLocalRemove,
//     ToastCustom,
//     ToastError,
// } from "../../utils";

export const ServiceEducationSpecify = async (
    idProfile: string,
    idEducation?: string
) => {
    try {
        const resData = await apiClient.get(
            endpointEducation.EDUCATION_SPECIFY.path,
            {
                params: {
                    idProfile,
                    idEducation,
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

export default ServiceEducationSpecify;
