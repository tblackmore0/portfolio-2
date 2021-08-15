function About () {
    return (
        <div className='aboutDiv'>
            <img className='aboutImg' alt='Portrait photograph of me, Tom' src='/Images/PortraitSmall.jpeg' />

            <div className='aboutTextDiv'>
            <div className ='aboutText'>
                <h2>About me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className='aboutText'>
                    <h2>Skills</h2>
                    <p> Front-end: React, Javascript, CSS, SASS/SCSS, HTML </p>
                    <p> Back-end: Node, Express, AWS, MongoDB (Atlas)</p>
                    <p> Development tools: Git/GitHub, Webpack, Postman, NPM</p>

            </div>
            </div>
        </div>
    )
}

export {About}