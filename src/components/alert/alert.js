import { useSelector } from 'react-redux';

import './alert.scss';


const Alert = () => {

    const {lang} = useSelector(state => state.lang);
    const {errors, alertStatus} = useSelector(state => state.alert);
    const dataAlert = useSelector(state => state.data[`${lang}Alert`]);

    const renderAlert = () => {
        return (
            <div className={`alert ${errors === 'success' ? 'alert__success' : 'alert__error'}`}>
                <div className="alert__timer">
                    <div className={`alert__time ${errors === 'success' ? 'alert__time_success' : 'alert__time_error'}`}></div>
                </div>
                <div className="alert__title">{errors === 'success' ? 'Success' : 'Error'}</div>
                {errors === 'success' ? <div>{dataAlert.success}</div> : null}
                {
                    errors !== 'success'
                    ?
                    errors.map((item, i) => {
                        return (
                            <div key={i} className="alert__message">{item}</div>
                        )
                    })
                    :
                    null
                }
            </div>
        )
    };

    return (
        <>
            {
                alertStatus === 'idle'
                ?
                null
                :
                renderAlert()
            }
        </>
    )
}

export default Alert;