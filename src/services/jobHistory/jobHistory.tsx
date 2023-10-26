import { endpointJobHistory } from "../../apis/endpoint/endpoint";
import apiClient from "../../apis/interceptor/interceptor";
// import {
//     StoreLocalAdd,
//     StoreLocalRemove,
//     ToastCustom,
//     ToastError,
// } from "../../utils";

export const ServiceJobHistorySpecify = async (
    idProfile: string,
    idJobHistory?: string
) => {
    try {
        const resData = await apiClient.get(
            endpointJobHistory.JOBHISTORY_SPECIFY.path,
            {
                params: {
                    idProfile,
                    idJobHistory,
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

export default ServiceJobHistorySpecify;
