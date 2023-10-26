import { useState, useEffect } from "react";
import "./index.scss";
import { useRecoilState } from "recoil";
import {
    ProfileSpecifyRecoil,
    DetailSpecifyRecoil,
    BiographySpecifyRecoil,
    JobHistorySpecifyRecoil,
    EducationSpecifyRecoil,
    SocMedSpecifyRecoil,
    ImageSpecifyRecoil,
} from "../../recoil/Atoms";
import {
    IProfile,
    IDetail,
    IBiography,
    IJobHistory,
    IEducation,
    ISocMed,
    IImage,
} from "../../interfaces/interface";

function AboutMe() {
    const [page, setPage] = useState<number>(1);
    const [jobCard, setJobCard] = useState<number>(0);
    const [limitJobCard, setLimitJobCard] = useState<number>(0);
    const [eduCard, setEduCard] = useState<number>(0);
    const [limitEduCard, setLimitEduCard] = useState<number>(0);
    const [profileSpecify] = useRecoilState<IProfile>(ProfileSpecifyRecoil);
    const [detailSpecify] = useRecoilState<IDetail>(DetailSpecifyRecoil);
    const [biographySpecify] = useRecoilState<IBiography>(
        BiographySpecifyRecoil
    );
    const [jobHistorySpecify] = useRecoilState<IJobHistory>(
        JobHistorySpecifyRecoil
    );
    const [educationSpecify] = useRecoilState<IEducation>(
        EducationSpecifyRecoil
    );
    const [socMedSpecify] = useRecoilState<ISocMed>(SocMedSpecifyRecoil);
    const [imageSpecify] = useRecoilState<IImage>(ImageSpecifyRecoil);

    // const date = new Date("2023-10-26T18:02:28.699Z");
    // const options = { month: "long", year: "numeric", day: "numeric" };

    useEffect(() => {
        if (jobHistorySpecify && educationSpecify) {
            setLimitJobCard(jobHistorySpecify.length);
            setLimitEduCard(educationSpecify.length);
        }
    }, [jobHistorySpecify, educationSpecify]);

    return (
        <div className="aboutPage container d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center">
                <div className="shadow-lg aboutCard">
                    {profileSpecify && profileSpecify.profilePhoto ? (
                        <img
                            className="shadow avatar"
                            alt="avatar"
                            src={profileSpecify && profileSpecify.profilePhoto}
                        />
                    ) : (
                        <div className="shadow avatar">
                            {profileSpecify &&
                                profileSpecify.fullName &&
                                profileSpecify.fullName
                                    .split(" ")
                                    .map((word) => word.charAt(0))
                                    .join("")}
                        </div>
                    )}

                    {page === 1 && (
                        <div>
                            <p className="fs-5 fw-bolder text-center">
                                About Me
                            </p>
                            <div className="d-flex justify-content-center">
                                <p className="fs-5 fw-bolder me-2">
                                    {profileSpecify && profileSpecify.fullName}
                                </p>
                                <p className="fs-5">|</p>
                                <p className="fs-5 fw-bolder ms-2">
                                    {profileSpecify && profileSpecify.nickName}
                                </p>
                            </div>
                            <div className="py-3 fs-6 ">
                                {biographySpecify &&
                                    biographySpecify.length !== undefined &&
                                    Object.values(biographySpecify)[0] &&
                                    Object.values(biographySpecify)[0].summary1}
                            </div>
                            <div className="py-3 fs-6 ">
                                {biographySpecify &&
                                    biographySpecify.length !== undefined &&
                                    Object.values(biographySpecify)[0] &&
                                    Object.values(biographySpecify)[0].summary2}
                            </div>
                            <div className="py-3 fs-6 ">
                                {biographySpecify &&
                                    biographySpecify.length !== undefined &&
                                    Object.values(biographySpecify)[0] &&
                                    Object.values(biographySpecify)[0].summary3}
                            </div>

                            <div className="py-1 fs-6 fw-bolder">
                                Connect with me
                            </div>
                            <div style={{ fontSize: "14px" }}>
                                {socMedSpecify &&
                                    socMedSpecify.length !== undefined &&
                                    socMedSpecify.map(
                                        (x: ISocMed, index: number) => {
                                            const key = index;
                                            return (
                                                <div key={key}>
                                                    <div>{`${x.nameOfMedia} : ${x.userName}`}</div>
                                                </div>
                                            );
                                        }
                                    )}
                            </div>
                        </div>
                    )}
                    {page === 2 && (
                        <div>
                            <p className="fs-5 fw-bolder text-center">
                                More About Me
                            </p>
                            <div className="pt-3 fs-6 fw-bolder">Weight</div>
                            <div>
                                {detailSpecify &&
                                    detailSpecify.length !== undefined &&
                                    Object.values(detailSpecify)[0] &&
                                    Object.values(detailSpecify)[0].weight}{" "}
                                kg
                            </div>
                            <div className="pt-3 fs-6 fw-bolder">Height</div>
                            <div>
                                {detailSpecify &&
                                    detailSpecify.length !== undefined &&
                                    Object.values(detailSpecify)[0] &&
                                    Object.values(detailSpecify)[0].height}{" "}
                                cm
                            </div>
                            <div className="pt-3 fs-6 fw-bolder">Birthday</div>
                            <div>
                                {detailSpecify &&
                                    detailSpecify.length !== undefined &&
                                    Object.values(detailSpecify)[0] &&
                                    new Date(
                                        Object.values(
                                            detailSpecify
                                        )[0].dateBirth
                                    ).toLocaleDateString("ms-MY", {
                                        month: "long",
                                        year: "numeric",
                                        day: "numeric",
                                    })}
                            </div>
                            <div className="pt-3 fs-6 fw-bolder">
                                {detailSpecify &&
                                    detailSpecify.length !== undefined &&
                                    detailSpecify.hobby}
                            </div>
                            <div>
                                {detailSpecify &&
                                    detailSpecify.length !== undefined &&
                                    Object.values(detailSpecify)[0] &&
                                    Object.values(detailSpecify)[0].hobby}
                            </div>
                            <div className="pt-3 fs-6 fw-bolder">
                                Favourite Food
                            </div>
                            <div>
                                {detailSpecify &&
                                    detailSpecify.length !== undefined &&
                                    Object.values(detailSpecify)[0] &&
                                    Object.values(detailSpecify)[0]
                                        .favouriteFood}
                            </div>
                            <div className="pt-3 fs-6 fw-bolder">Skill</div>
                            <div>
                                {detailSpecify &&
                                    detailSpecify.length !== undefined &&
                                    Object.values(detailSpecify)[0] &&
                                    Object.values(detailSpecify)[0].skill}
                            </div>
                            <div className="pt-3 fs-6 fw-bolder">Pet</div>
                            <div>
                                {detailSpecify &&
                                    detailSpecify.length !== undefined &&
                                    Object.values(detailSpecify)[0] &&
                                    Object.values(detailSpecify)[0].pet}
                            </div>
                            <div className="pt-3 fs-6 fw-bolder">
                                Free Time Activity
                            </div>
                            <div>
                                {detailSpecify &&
                                    detailSpecify.length !== undefined &&
                                    Object.values(detailSpecify)[0] &&
                                    Object.values(detailSpecify)[0]
                                        .freeTimeActivity}
                            </div>
                            <div className="pt-3 fs-6 fw-bolder">Interest</div>
                            <div>
                                {detailSpecify &&
                                    detailSpecify.length !== undefined &&
                                    Object.values(detailSpecify)[0] &&
                                    Object.values(detailSpecify)[0].interest}
                            </div>
                        </div>
                    )}
                    {page === 3 && (
                        <div>
                            <p className="fs-5 fw-bolder text-center">
                                Job History
                            </p>
                            {jobHistorySpecify &&
                                jobHistorySpecify.length !== undefined &&
                                Object.values(jobHistorySpecify)[0] &&
                                Object.values(jobHistorySpecify).map(
                                    (x, index) => {
                                        const key = index;
                                        if (key === jobCard) {
                                            return (
                                                <div
                                                    className="card p-3"
                                                    key={key}
                                                >
                                                    <div className="pt-3 fs-6 fw-bolder">
                                                        Company
                                                    </div>
                                                    <div>{x.companyName}</div>
                                                    <div className="pt-3 fs-6 fw-bolder">
                                                        Position
                                                    </div>
                                                    <div>{x.position}</div>
                                                    <div className="pt-3 fs-6 fw-bolder">
                                                        Department
                                                    </div>
                                                    <div>{x.department}</div>
                                                    <div className="pt-3 fs-6 fw-bolder">
                                                        Job Description
                                                    </div>
                                                    <div>
                                                        {x.jobDescription}
                                                    </div>
                                                    <div className="pt-3 fs-6 fw-bolder">
                                                        Start Date
                                                    </div>
                                                    <div>
                                                        {new Date(
                                                            x.startDate
                                                        ).toLocaleDateString(
                                                            "ms-MY",
                                                            {
                                                                month: "long",
                                                                year: "numeric",
                                                                day: "numeric",
                                                            }
                                                        )}
                                                    </div>
                                                    <div className="pt-3 fs-6 fw-bolder">
                                                        End Date
                                                    </div>
                                                    <div>
                                                        {new Date(
                                                            x.endDate
                                                        ).toLocaleDateString(
                                                            "ms-MY",
                                                            {
                                                                month: "long",
                                                                year: "numeric",
                                                                day: "numeric",
                                                            }
                                                        )}
                                                    </div>
                                                    <div>
                                                        <button
                                                            className={`btn btn-light me-2 ${
                                                                jobCard === 0 &&
                                                                "disabled"
                                                            }`}
                                                            type="button"
                                                            style={{
                                                                width: "5rem",
                                                            }}
                                                            onClick={() =>
                                                                setJobCard(
                                                                    key - 1
                                                                )
                                                            }
                                                        >
                                                            {`<`}
                                                        </button>
                                                        <button
                                                            className={`btn btn-light ${
                                                                jobCard ===
                                                                    limitJobCard -
                                                                        1 &&
                                                                "disabled"
                                                            }`}
                                                            type="button"
                                                            style={{
                                                                width: "5rem",
                                                            }}
                                                            onClick={() =>
                                                                setJobCard(
                                                                    key + 1
                                                                )
                                                            }
                                                        >
                                                            {`>`}
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }
                                )}
                        </div>
                    )}
                    {page === 4 && (
                        <div>
                            <p className="fs-5 fw-bolder text-center">
                                Education
                            </p>
                            {educationSpecify &&
                                educationSpecify.length !== undefined &&
                                Object.values(educationSpecify)[0] &&
                                Object.values(educationSpecify).map(
                                    (x, index) => {
                                        const key = index;
                                        if (key === eduCard) {
                                            return (
                                                <div
                                                    className="card p-3"
                                                    key={key}
                                                >
                                                    <div className="pt-3 fs-6 fw-bolder">
                                                        Institution
                                                    </div>
                                                    <div>
                                                        {x.institutionName}
                                                    </div>
                                                    <div className="pt-3 fs-6 fw-bolder">
                                                        Level
                                                    </div>
                                                    <div>
                                                        {x.educationLevel}
                                                    </div>
                                                    <div className="pt-3 fs-6 fw-bolder">
                                                        Field of Study
                                                    </div>
                                                    <div>{x.studyField}</div>
                                                    <div className="pt-3 fs-6 fw-bolder">
                                                        Start Date
                                                    </div>
                                                    <div>
                                                        {new Date(
                                                            x.startDate
                                                        ).toLocaleDateString(
                                                            "ms-MY",
                                                            {
                                                                month: "long",
                                                                year: "numeric",
                                                                day: "numeric",
                                                            }
                                                        )}
                                                    </div>
                                                    <div className="pt-3 fs-6 fw-bolder">
                                                        End Date
                                                    </div>
                                                    <div>
                                                        {new Date(
                                                            x.endDate
                                                        ).toLocaleDateString(
                                                            "ms-MY",
                                                            {
                                                                month: "long",
                                                                year: "numeric",
                                                                day: "numeric",
                                                            }
                                                        )}
                                                    </div>
                                                    <div>
                                                        <button
                                                            className={`btn btn-light me-2 ${
                                                                eduCard === 0 &&
                                                                "disabled"
                                                            }`}
                                                            type="button"
                                                            style={{
                                                                width: "5rem",
                                                            }}
                                                            onClick={() =>
                                                                setJobCard(
                                                                    key - 1
                                                                )
                                                            }
                                                        >
                                                            {`<`}
                                                        </button>
                                                        <button
                                                            className={`btn btn-light ${
                                                                eduCard ===
                                                                    limitEduCard -
                                                                        1 &&
                                                                "disabled"
                                                            }`}
                                                            type="button"
                                                            style={{
                                                                width: "5rem",
                                                            }}
                                                            onClick={() =>
                                                                setEduCard(
                                                                    key + 1
                                                                )
                                                            }
                                                        >
                                                            {`>`}
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }
                                )}
                        </div>
                    )}
                    <div
                        style={{
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                            margin: "0 20px 20px",
                        }}
                    >
                        <button
                            type="button"
                            className={`btn btn-light me-2 ${
                                page <= 1 && "disabled"
                            }`}
                            onClick={() => setPage(page - 1)}
                        >
                            Back
                        </button>
                        <button
                            type="button"
                            className={`btn btn-light ${
                                page >= 4 && "disabled"
                            }`}
                            onClick={() => setPage(page + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div className="d-flex flex-row gap-3">
                    {imageSpecify &&
                        imageSpecify.length !== undefined &&
                        Object.values(imageSpecify)[0] &&
                        Object.values(imageSpecify).map((x, index) => {
                            const key = index;
                            return (
                                <div
                                    key={key}
                                    className="shadow"
                                    style={{
                                        width: "20rem",
                                        borderRadius: "20px",
                                        marginTop: "2rem",
                                        overflow: "hidden",
                                        alignSelf: "center",
                                    }}
                                >
                                    <img
                                        style={{ width: "100%" }}
                                        src={x.imagePath}
                                        alt={x.description}
                                    />
                                </div>
                            );
                            return null;
                        })}
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
