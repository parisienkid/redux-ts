import './alert.scss';

import { useSelector } from 'react-redux';


const Alert = (props) => {

    const {errors, alertStatus} = useSelector(state => state.alert);

    const renderAlert = () => {
        return (
            <div className={`alert ${errors == 'success' ? 'alert__success' : 'alert__error'}`}>
                <div className="alert__timer">
                    <div className={`alert__time ${errors == 'success' ? 'alert__time_success' : 'alert__time_error'}`}></div>
                </div>
                <div className="alert__title">{errors == 'success' ? 'Success' : 'Error'}</div>
                {errors == 'success' ? <div>Отправлено</div> : null}
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