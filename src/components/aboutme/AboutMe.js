import "./AboutMe.scss"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

async function setClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
    }
}

const AboutMe = () => {
    return (
        <>
            <div className="aboutme">
                <img className="me" src='/me.jpg' />
                <h1 className="name">Nicolae Semionov</h1>
                <h2 className="title">Software Engineer</h2>
                <p className="abouttext">
                    My name is Nicolae Semionov, I'm a recently graduated software engineering student looking to contribute my skills.
                </p>
                <h2 className="contact">Contact</h2>
                <div>
                    <a onClick={() => setClipboard("nicolae.semionov@gmail.com")}>nicolae.semionov@gmail.com <ContentCopyIcon className="copyicon"/></a>
                </div>
                <div>
                    <a onClick={() => setClipboard("647-764-4675")}>647-764-4675 <ContentCopyIcon className="copyicon"/></a>
                </div>
            </div> 
        </>
        
    )
}

export default AboutMe