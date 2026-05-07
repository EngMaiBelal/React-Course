import './Footer.css'
import FooterImg from '../assets/images/footer-img.jpg'

const myDynamicText =["Hello", "Welcome to Beauty", "Enjoy Beauty!"];
        
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * myDynamicText.length);
    return myDynamicText[randomIndex];
}

export default function Footer() {
    const dynamicText = getRandomText();
    return(
    <footer className="footer">
        {/* <p>{getRandomText()}</p> */}
         <p> Amazing </p>
        <img src={FooterImg} alt="Footer Image" className="card-image" />
        <p>{dynamicText}</p>
       
    </footer>
    );
}