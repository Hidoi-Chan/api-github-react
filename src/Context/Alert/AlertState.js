import { useReducer } from "react"
import { HIDE_ALERT, SHOW_ALERT } from "../types"
import { AlertContect } from "./AlertContext"
import { alertReduser } from "./alertReducer"

export const AlertState = ({children}) => {

    const [state, dispatch] = useReducer(alertReduser, null)

    const show = (text, type = 'secondary') => dispatch({type: SHOW_ALERT, payload: {type, text}})
    const hide = () => dispatch({type: HIDE_ALERT})

    return (
        <AlertContect.Provider value={{
            hide,
            show,
            alert: state
        }}>
            {children}
        </AlertContect.Provider>
    )
}