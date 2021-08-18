import {gitGreen, gitLight} from './ProjectInstance';

function Copyright () {
    return (
        <div className='copyrightDiv'>
           <p>Tom Blackmore</p>
           <a className='codeButton' target="blank" href="https://github.com/tblackmore0/portfolio-2.git">
                        <img onMouseEnter={gitGreen} onMouseLeave={gitLight} alt='' src='/Images/GitHubLight.png' />
                </a>
        </div>
    )

}


export { Copyright }