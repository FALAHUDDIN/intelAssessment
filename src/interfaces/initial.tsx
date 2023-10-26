export const InitProfile = {
    id: "",
    fullName: "",
    nickName: "",
    email: "",
    profilePhoto: "",
    createdAt: "",
    detail: null,
    jobHistory: null,
    education: null,
    biography: null,
    socMed: null,
    image: null,
};

export const InitDetail = {
    id: "",
    idProfile: "",
    firstName: "",
    lastName: "",
    gender: 0,
    dateBirth: new Date(),
    passportNo: "",
    address: "",
    phoneNo: "",
    hobby: "",
    skill: "",
    pet: "",
    freeTimeActivity: "",
    interest: "",
    favouriteFood: "",
    weight: 0,
    height: 0,
    profile: null,
};

export const InitBiography = {
    id: "",
    summary1: "",
    summary2: "",
    summary3: "",
};

export const InitJobHistory = {
    id: "",
    companyName: "",
    position: "",
    department: "",
    jobDescription: "",
    startDate: new Date(),
    endDate: new Date(),
};

export const InitEducation = {
    id: "",
    institutionName: "",
    educationLevel: "",
    studyField: "",
    startDate: new Date(),
    endDate: new Date(),
};

export const InitSocMed = {
    id: "",
    nameOfMedia: "",
    userName: "",
};

export const InitImage = {
    id: "",
    imagePath: "",
    description: "",
};
