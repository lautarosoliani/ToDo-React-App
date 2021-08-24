import "./Body.css"
import TaskList from "./TaskList"
import FormTodo from "./FormTodo"

const Body = () => {
    return (
        <>
            <FormTodo />
            <TaskList />
        </>
    )
}

export default Body

{
    /* <div className="body container p-3 my-3 text-white">
                <div className="h1">
                    <h1>My body his container</h1>
                </div>
                <div className="selects">
                    <div>
                        <label>Select Category:</label>
                        <select class="form-select">
                            <option>Home</option>
                            <option>Health</option>
                            <option>Job</option>
                            <option>Training</option>
                        </select>
                    </div>
                    <div>
                        <label>Select State:</label>
                        <select class="form-select">
                            <option>Finished</option>
                            <option>Unfinished</option>
                        </select>
                    </div>
                </div>
            </div> */
}
