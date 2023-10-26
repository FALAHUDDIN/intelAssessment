export interface IProfile {
    id: string;
    fullName: string;
    nickName: string;
    email: string;
    profilePhoto: string;
    createdAt: string;
    detail: null;
    jobHistory: null;
    education: null;
    biography: null;
    socMed: null;
    image: null;
}

export interface IDetail {
    id: string;
    idProfile: string;
    firstName: string;
    lastName: string;
    gender: number;
    dateBirth: Date;
    passportNo: string;
    address: string;
    phoneNo: string;
    hobby: string;
    skill: string;
    pet: string;
    freeTimeActivity: string;
    interest: string;
    favouriteFood: string;
    weight: number;
    height: number;
    profile: null;
    length: number;
}

export interface IBiography {
    id: string;
    summary1: string;
    summary2: string;
    summary3: string;
    length: number;
}

export interface IJobHistory {
    id: string;
    companyName: string;
    position: string;
    department: string;
    jobDescription: string;
    startDate: Date;
    endDate: Date;
    length: number;
}

export interface IEducation {
    id: string;
    institutionName: string;
    educationLevel: string;
    studyField: string;
    startDate: Date;
    endDate: Date;
    length: number;
}

export interface ISocMed {
    id: string;
    nameOfMedia: string;
    userName: string;
    length: number;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    map: any;
}

export interface IImage {
    id: string;
    imagePath: string;
    description: string;
    length: number;
}
