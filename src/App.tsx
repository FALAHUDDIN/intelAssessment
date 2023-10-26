import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useRecoilState, RecoilRoot } from "recoil";
import AboutMe from "./pages/AboutMe/AboutMe";
import Record from "./pages/Record/Record";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";
import {
    IProfile,
    IDetail,
    IBiography,
    IJobHistory,
    IEducation,
    ISocMed,
    IImage,
} from "./interfaces/interface";

import {
    ServiceProfileList,
    ServiceProfileSpecify,
    ServiceDetailSpecify,
    ServiceBiographySpecify,
    ServiceJobHistorySpecify,
    ServiceEducationSpecify,
    ServiceSocMedSpecify,
    ServiceImageSpecify,
} from "./services";
import {
    ProfileListRecoil,
    ProfileSpecifyRecoil,
    DetailSpecifyRecoil,
    BiographySpecifyRecoil,
    JobHistorySpecifyRecoil,
    EducationSpecifyRecoil,
    SocMedSpecifyRecoil,
    ImageSpecifyRecoil,
    TriggerProfileListRecoil,
} from "./recoil/Atoms";

export function App() {
    const [profileList, setProfileList] =
        useRecoilState<IProfile[]>(ProfileListRecoil);
    const [, setProfileSpecify] =
        useRecoilState<IProfile>(ProfileSpecifyRecoil);
    const [, setDetailSpecify] = useRecoilState<IDetail>(DetailSpecifyRecoil);
    const [, setBiographySpecify] = useRecoilState<IBiography>(
        BiographySpecifyRecoil
    );
    const [, setJobHistorySpecify] = useRecoilState<IJobHistory>(
        JobHistorySpecifyRecoil
    );
    const [, setEducationSpecify] = useRecoilState<IEducation>(
        EducationSpecifyRecoil
    );
    const [, setSocMedSpecify] = useRecoilState<ISocMed>(SocMedSpecifyRecoil);
    const [, setImageSpecify] = useRecoilState<IImage>(ImageSpecifyRecoil);

    const [triggerProfileList, setTriggerProfileList] = useRecoilState<boolean>(
        TriggerProfileListRecoil
    );

    useEffect(() => {
        const getProfile = async () => {
            await ServiceProfileList().then((x) => {
                setProfileList(x);
            });
        };
        getProfile();
        return () => {
            setTriggerProfileList(false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [triggerProfileList]);

    useEffect(() => {
        const getProfileSpecify = async () => {
            if (profileList && profileList.length !== 0) {
                const { id } = [...profileList].sort(
                    (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
                )[0];
                await ServiceProfileSpecify(id).then((x) => {
                    setProfileSpecify(x);
                });
                await ServiceDetailSpecify(id).then((x) => {
                    setDetailSpecify(x);
                });
                await ServiceBiographySpecify(id).then((x) => {
                    setBiographySpecify(x);
                });
                await ServiceJobHistorySpecify(id).then((x) => {
                    setJobHistorySpecify(x);
                });
                await ServiceEducationSpecify(id).then((x) => {
                    setEducationSpecify(x);
                });
                await ServiceSocMedSpecify(id).then((x) => {
                    setSocMedSpecify(x);
                });
                await ServiceImageSpecify(id).then((x) => {
                    setImageSpecify(x);
                });
            }
        };
        getProfileSpecify();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profileList, triggerProfileList]);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/records" element={<Record />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export function WrappedApp() {
    return (
        <RecoilRoot>
            <HashRouter>
                <App />
            </HashRouter>
        </RecoilRoot>
    );
}
