import { atom } from "recoil";

export const ProfileListRecoil = atom({
    key: "profileList",
    default: {},
});

export const TriggerProfileListRecoil = atom({
    key: "triggerProfileList",
    default: false,
});
