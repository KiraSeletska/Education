import "./button.css"

export const Button = ({children}) => {
    return(
        <button className="Button">
            {children}
        </button>
    )
}