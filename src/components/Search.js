import { useContext, useState } from "react"
import { AlertContect } from "../Context/Alert/AlertContext"
import { GithubContext } from "../Context/github/githubContext"

export const Search = () => {

    const [value, setValue] = useState('')

    const alert = useContext(AlertContect)
    const github = useContext(GithubContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') return;

        if (value.trim()) {
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show('Введите данные пользователя', 'danger')
            github.clearUsers()
        }
    }

    return (
        <div className="form-group">
            <input 
                type="text"
                className="form-control"
                placeholder="Введите никнэйм пользователя..."
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />
        </div>
    )
}
