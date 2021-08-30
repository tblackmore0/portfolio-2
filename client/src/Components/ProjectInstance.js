
function gitGreen (e) {
    let img = e.target
    img.src = '/Images/GitHubGreen.png';
}

function gitLight (e) {
    let img = e.target
    img.src = '/Images/GitHubLight.png';
}

function ProjectInstance (props) {

    let index = props.id

    if (index%2 == 0) 
    
    return  (

        <div className='projectInstanceDiv'>
            <img alt='A screenshot of the live project site' id='projectScreenshotEven' src={props.project.img} />
            <div className='textDiv'>
                <h3>{props.project.title}</h3>
                <div className='pDiv'>
                <p>{props.project.description}</p>
                </div>
                <div className='projectButtons'>
                    <a className='siteButton' target="blank" href={props.project.liveLink}>View Site</a>
                    <a className='codeButton' target="blank" href={props.project.codeLink}>
                        <img onMouseEnter={gitGreen} onMouseLeave={gitLight} alt='The GitHub logo' src='/Images/GitHubLight.png' />
                    </a>
                </div>
            </div>
        </div>
    )
    


    else 
        return (

        <div className='projectInstanceDiv'>
            <div className='textDiv' id='textDivOpp' >
                <h3>{props.project.title}</h3>
                <div className='pDiv' id='pDivOpp' >
                <p>{props.project.description}</p>
                </div>
                <div className='projectButtons' id='projectButtonsOpp'>
                    <a className='siteButton' target="blank" href={props.project.liveLink}>View Site</a>
                    <a className='codeButton' target="blank" href={props.project.codeLink}>
                        <img onMouseEnter={gitGreen} onMouseLeave={gitLight} alt='The GitHub logo' src='/Images/GitHubLight.png' />
                    </a>
                </div>
            </div>
            <img id='projectScreenshotOdd' alt='A screenshot of the live project site' src={props.project.img} />
        </div>

        )
    }



export {ProjectInstance, gitGreen, gitLight}