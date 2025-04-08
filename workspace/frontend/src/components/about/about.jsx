import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from '../../assets/py.svg'
import { useState } from 'react'

function About(){
    const [display, setDisplay] = useState('block')
    const [buttonText, setButtonText] = useState('Hide')

    function toggle(){
        if (display == 'none'){
            setDisplay('block')
            setButtonText('Hide')
        } else{
            setDisplay('none')
            setButtonText('Show')
        }
    }

    return(
        <div id = "about">
            <h2>
                <button className = "toggler" onClick={toggle}> {buttonText}</button>
                About Me
            </h2>
            <div style = {{display: display}}>
                <p> Im a student at BU studying Computer Science and Economics. etc</p> // add more description here
                <br />
                <h3>
                    My Skills
                    <div className='icons'>
                        <img width = "60" src={PY}  />
                    </div>
                    
                </h3>
            </div>
        </div>
    )
}

export default About