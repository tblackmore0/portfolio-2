import {useState} from 'react';
import {gitGreen, gitLight} from './ProjectInstance';
import axios from 'axios';


function linkedGreen (e) {
    let img = e.target
    img.src = '/Images/linkedGreen.png';
}

function linkedLight (e) {
    let img = e.target
    img.src = '/Images/linkedLight.png';
}

function Contact () {

    //Backend


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

        axios({
            method: "POST",
            url: `https://tblackmore.herokuapp.com/send`,
            data: {
                name,
                email,
                text
            }
        }).then(() => {
            alert('Thank you for getting in touch!');
            setName('');
            setEmail('');
            setText('');
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong. Please try again!')
        })
    }


    return (
        <div className='contactDiv' id='contact'>

            <div className='contactDetails'>
                <a className='contactIcon' target="blank" href="https://github.com/tblackmore0">
                        <img onMouseEnter={gitGreen} onMouseLeave={gitLight} alt='The GitHub logo' src='/Images/GitHubLight.png' />
                </a>
                <div className='contactText'>
                <h2>Contact</h2>
                <p>tblackmore0@gmail.com</p>
                <p>07516677681</p>
            </div>
                <a className='contactIcon' target="blank" href="https://www.linkedin.com/in/thomas-blackmore-68613217b/">
                        <img onMouseEnter={linkedGreen} onMouseLeave={linkedLight} alt='The LinkedIn logo' src='/Images/linkedLight.png' />
                </a>
            </div>

            <div className='contactForm'>
                <form onSubmit={handleSubmit}>
                    <div className='formTop'>
                    <input value={name} onChange={(e) => setName(e.target.value)} name='name' placeholder='Name' type='text' />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Email' type='email' />
                    </div>
                    <div className='formBottom'>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} name='message' placeholder='...' />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export { Contact }