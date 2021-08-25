import React, { useState } from "react"

const FormTodo = (props) => {
    const [description, setDescription] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(description)
        setDescription("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button
                        className="btn btn-primary"
                        disabled={description ? "" : "disabled"}
                    >
                        Add
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FormTodo
