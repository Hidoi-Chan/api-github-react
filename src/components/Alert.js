import { useContext } from "react"
import { AlertContect } from "../Context/Alert/AlertContext"

export const Alert = () => {

    const {alert, hide} = useContext(AlertContect)

    if (!alert) return null

    return (
        <div className={`alert alert-${alert.type} alert-dismissible`} role="alert">
            {alert.text}
            <button type="button" className="close" aria-label="Close" onClick={hide}>
                <span area-hidden="true">&times;</span>
            </button>
        </div>
    )
}
