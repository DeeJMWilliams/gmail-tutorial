import Overlay from './Overlay';
import signaturePreview from '../resources/signature-preview.png';

const IntroText = () => {
    return(
        <>
        <p>Congratulations on your completion of Propel America's Medical Assistant (MA) pathway! As part of your preparation for entering the workforce with your new certification, we recommend that all fellows use a Gmail signature that communicates your credentials and your professionalism whenever you communicate via email. Your signature will contain the following information:</p>
        <ul>
            <li>Your full name</li>
            <li>Your phone number</li>
            <li>A link to your LinkedIn page</li>
            <li>A photo of you</li>
            <li>A line indicating your new Certified Medical Assistant status</li>
        </ul>

        <img src={signaturePreview} class='preview-img' alt=""/>

        <p>Here’s an preview of what your signature should look like after you follow the steps below. This tutorial should be completed on a personal computer, not a phone or tablet.</p>
        <p>NB: When you see text that looks like <Overlay hoverText={<span>Here's some more info!</span>} text={<span className='tip'>this</span>} />, hover over it if you want more information.</p>
        </>
    )
}

export default IntroText;