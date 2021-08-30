function About () {
    return (
        <div className='aboutDiv' id='about'>
            <img className='aboutImg' alt='A portrait photograph of me, Tom' src='/Images/PortraitSmall.jpeg' />

            <div className='aboutTextDiv'>
            <div className ='aboutText'>
                <h2>About me</h2>
                <p>As a self-starter, I love seeking out new challenges and technologies to expand my skillset and solve problems in more efficient and creative ways. I am a React developer with a strong understanding of the needs of modern web design. To that end, I am seeking a role that will allow me to both express my full potential and also bring my unique experiences and skillset to the team.</p>
                </div>
                <div className='aboutText'>
                    <h2>Skills</h2>
                    <p> Front-end: React, Javascript, CSS, SASS/SCSS, HTML </p>
                    <p> Back-end: Node, Express</p>
                    <p> Development tools: Git/GitHub, Webpack, Adobe Photoshop/Illustrator, Heroku, NPM</p>

            </div>
            </div>
        </div>
    )
}

export {About}