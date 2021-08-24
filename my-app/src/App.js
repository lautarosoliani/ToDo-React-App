import "./index.css"
import Header from "./components/Header"
import Body from "./components/Body"
import TaskCard from "./components/TaskCard"

function App() {
    return (
        <>
            <Header />
            <Body>
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </Body>
        </>
    )
}

export default App
