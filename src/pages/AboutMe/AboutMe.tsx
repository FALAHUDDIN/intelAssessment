import "./index.scss";

function AboutMe() {
    return (
        <div className="aboutPage container d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column align-items-center">
                <div
                    className="shadow-lg p-5"
                    style={{
                        width: "50%",
                        borderRadius: "20px",
                        position: "relative",
                    }}
                >
                    <img
                        className="shadow"
                        style={{
                            width: "14rem",
                            height: "14rem",
                            borderRadius: "7rem",
                            position: "absolute",
                            top: "-6rem",
                            left: "calc((100% - 14rem + 6rem))",
                        }}
                        alt="avatar"
                        src="https://avatars.githubusercontent.com/u/45803739?v=4"
                    />
                    <p className="fs-5 fw-bolder text-center">About Me</p>
                    <div className="d-flex justify-content-center">
                        <p className="fs-6 fw-bolder me-2">
                            Falahuddin Bin Abu Seman
                        </p>
                        <p className="fs-6">|</p>
                        <p className="fs-6 fw-bolder ms-2">Falah</p>
                    </div>
                    <div>Birthday</div>
                    <div>Lorem ipsum dolor sit amet, </div>
                    <div>Hobbies</div>
                    <div>
                        in est vel sem interdum posuere. Phasellus ultrices,
                        metus in congue pharetra, libero dui venenatis quam, id
                        bibendum odio mi nec libero. Sed congue nec est a
                        consectetur. Quisque
                    </div>
                    <div>Pet</div>
                    <div>
                        in est vel sem interdum posuere. Phasellus ultrices,
                        metus in congue pharetra, libero dui venenatis quam, id
                        bibendum odio mi nec libero. Sed congue nec est a
                        consectetur. Quisque
                    </div>
                    <div>Free time activity</div>
                    <div>
                        in est vel sem interdum posuere. Phasellus ultrices,
                        metus in congue pharetra, libero dui venenatis quam, id
                        bibendum odio mi nec libero. Sed congue nec est a
                        consectetur. Quisque
                    </div>
                    <div>
                        <div>Back</div>
                        <div>Next</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
