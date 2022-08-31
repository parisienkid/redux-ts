import { useSelector } from 'react-redux';

import './about.scss';

const AboutPage = () => {

    const {lang} = useSelector(state => state.lang);
    const status = useSelector(state => state.data[`${lang}StatusData`]);
    const dataAbout = useSelector(state => state.data[`${lang}About`]);

    const renderContent = () => {
        return (
            <>
                <div className="about__title">{dataAbout.title}</div>
                <p>{dataAbout.p1}</p>
                <p>{dataAbout.p2}</p>
                <p>{dataAbout.p3}</p>
                <p>{dataAbout.p4}</p>
            </>
        )
    }

    return (
        <div className="about">
            <div className="about__header"></div>
            <div className="about__main">
                {
                    status === "idle"
                    ?
                    renderContent()
                    :
                    null
                }
            </div>
        </div>
    )
};

export default AboutPage;