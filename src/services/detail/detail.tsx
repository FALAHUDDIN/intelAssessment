import { endpointDetail } from "../../apis/endpoint/endpoint";
import apiClient from "../../apis/interceptor/interceptor";
// import {
//     StoreLocalAdd,
//     StoreLocalRemove,
//     ToastCustom,
//     ToastError,
// } from "../../utils";

export const ServiceDetailSpecify = async (
    idProfile: string,
    idDetail?: string
) => {
    try {
        if (idProfile) {
            const resData = await apiClient.get(
                endpointDetail.DETAIL_SPECIFY.path,
                {
                    params: {
                        idProfile,
                        idDetail,
                    },
                }
            );
            if (resData) {
                return resData.data;
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log("error");
    }
    return null;
};

export default ServiceDetailSpecify;
