import { useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useRecoilState, RecoilRoot } from "recoil";
import AboutMe from "./pages/AboutMe/AboutMe";
import Record from "./pages/Record/Record";
import NotFound from "./pages/NotFound/NotFound";
import Header from "./components/Header/Header";

import { ServiceProfileList } from "./services";
import { ProfileListRecoil, TriggerProfileListRecoil } from "./recoil/Atoms";

export function App() {
    const [, setProfileList] = useRecoilState<object>(ProfileListRecoil);

    const [triggerProfileList, setTriggerProfileList] = useRecoilState<boolean>(
        TriggerProfileListRecoil
    );

    useEffect(() => {
        const getProfileList = async () => {
            await ServiceProfileList().then(async (x) => {
                setProfileList(x);
            });
        };
        getProfileList();
        return () => {
            setTriggerProfileList(false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [triggerProfileList]);

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
