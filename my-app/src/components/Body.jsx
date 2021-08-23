import "./Body.css"

const Body = () => {
    return (
        <>
            <div className="body container p-3 my-3 text-white">
                <div className="h1">
                    <h1>From Body - Taskinator</h1>
                </div>
                <div className="select">
                    <select>
                        <option>Select Category</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default Body
