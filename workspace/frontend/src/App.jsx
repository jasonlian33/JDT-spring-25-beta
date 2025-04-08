import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Chat from './components/chat/chat'
import Projects from './components/projects/projects'
import Experiences from './components/experiences/experiences'
import About from './components/about/about'
import './App.css'

function App() {
    return (
        <>
        <Navbar></Navbar>
        <Profile></Profile>
        <Chat></Chat>
        <About></About>
        <Projects></Projects>
        <div id = "projects">
            <h2>Projects</h2>
            <Projects name = "Project 1 Name" description = "Project description here" github = "https://github.com/"> </Projects>
            <Projects name = "Project 2 Name" description = "Project description here" github = "https://github.com/"> </Projects>
        </div>
        <div id = "exp">
            <h2>Experiences</h2>
            <Experiences 
                title="Job Title" 
                info="Company Name, Location, State" 
                dates="Dates - Dates" 
                bullets={["Point 1", "Point 2", "Point 3"]}
            />
            <Experiences 
                title="Job Title" 
                info="Company Name, Location, State" 
                dates="Dates - Dates" 
                bullets={["Point 1", "Point 2", "Point 3"]}
            />
        </div>

        </>
    )
}

export default App