
function gitGreen (e) {
    let img = e.target
    img.src = '/Images/GitHubGreen.png';
}

function gitLight (e) {
    let img = e.target
    img.src = '/Images/GitHubLight.png';
}

function ProjectInstance (props) {
    return  (
        <div className='projectInstanceDiv'>
            <img alt='' src={props.project.img} />
            <div className='textDiv'>
                <h3>{props.project.title}</h3>
                <p>{props.project.description}</p>
                <div className='projectButtons'>
                    <a className='siteButton' target="blank" href={props.project.liveLink}>View Site</a>
                    <a className='codeButton' target="blank" href={props.project.codeLink}>
                        <img onMouseEnter={gitGreen} onMouseLeave={gitLight} alt='' src='/Images/GitHubLight.png' />
                    </a>
                </div>
            </div>
        </div>
    )
}


export {ProjectInstance, gitGreen, gitLight}