function Experiences({title, info, date, bullets}){
    return(
        <div className = "job">
            <h3>{title}</h3>
            <h4>{info}</h4>
            <p className = "date">{date}</p>
            <ul>
                {
                    bullets.map((item, index) => (
                        <li key = {index}> {item}</li>
                    ))
                }
            </ul>
        </div>

    )
}

export default Experiences