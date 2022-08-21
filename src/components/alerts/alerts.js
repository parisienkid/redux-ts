import './alerts.scss';

import { useSelector } from "react-redux";

const Alerts = () => {

    const {errors} = useSelector(state => state.alert);

    const addAlert = () => {
        const renderErrors = () => {
            if (!errors) {
                for(let key in errors) {
                    return <div className='alert__message alert__message_error'>{errors[key]}</div>
                }
            } else {
                return <div className='alert__message alert__message_success'>Отправлено</div>
            }
        }

        return (
            <div className={`alert ${errors ? "alert__success" : "alert__error"}`}>
                <div className="alert__title">{errors ? "Success" : "Error"}</div>
                {renderErrors}
            </div>
        )
    }

    return (
        <div className="alerts">
            {
                addAlert()
            }
        </div>
    )
}

export default Alerts;