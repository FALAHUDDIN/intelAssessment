import { atom } from "recoil";
import {
    IProfile,
    IDetail,
    IBiography,
    IJobHistory,
    IEducation,
    ISocMed,
    IImage,
} from "../interfaces/interface";

export const ProfileListRecoil = atom({
    key: "profileList",
    default: [] as IProfile[],
});

export const ProfileSpecifyRecoil = atom({
    key: "profileSpecify",
    default: {} as IProfile,
});

export const DetailSpecifyRecoil = atom({
    key: "detailSpecify",
    default: {} as IDetail,
});

export const BiographySpecifyRecoil = atom({
    key: "biographySpecify",
    default: {} as IBiography,
});

export const JobHistorySpecifyRecoil = atom({
    key: "jobHistorySpecify",
    default: {} as IJobHistory,
});

export const EducationSpecifyRecoil = atom({
    key: "educationSpecify",
    default: {} as IEducation,
});

export const SocMedSpecifyRecoil = atom({
    key: "socMedSpecify",
    default: {} as ISocMed,
});

export const ImageSpecifyRecoil = atom({
    key: "imageSpecify",
    default: {} as IImage,
});

export const TriggerProfileListRecoil = atom({
    key: "triggerProfileList",
    default: false as boolean,
});
