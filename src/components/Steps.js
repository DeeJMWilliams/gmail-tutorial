import Button from 'react-bootstrap/Button';
import Overlay from './Overlay';
import {Copy, Paste} from './Commands';
import linkedinPreview from '../resources/linkedin-preview.png';
import replacePreview from '../resources/replace-preview.png';
import cropPreview from '../resources/crop-preview.png';
import settingsPreview from '../resources/settings-preview.png';
import signatureSettingsPreview from '../resources/signature-settings-preview.png';
import signatureEditorPreview from '../resources/signature-editor-preview.png';
import pastedSignaturePreview from '../resources/pasted-signature-preview.png';
import signatureDefaultsPreview from '../resources/signature-defaults-preview.png';
import saveChangesPreview from '../resources/save-changes-preview.png';

const step0 = {
    number: 0,
    title: "Signing up for a Gmail account",
    content: <p>This tutorial assumes you already have a Gmail account. If not, you should go get set up with one right now! You can follow the link <a href="https://support.google.com/mail/answer/56256?hl=en">here</a> if you’re not sure how or need help troubleshooting any issues.</p>
}

const buttonStyle = {
    'background-color': '#0c6ca9',
    'border': 'none'
}

const step1Content = (
    <>
        <p>In another tab, open up the link below.</p>
        <Button style={buttonStyle} className='button' href='https://docs.google.com/document/d/1idpw_AkNbDn768XJoE9KFFRTwoIu70U3jAPyU-Sy6Yw/edit?usp=drive_link'>Template Link</Button>
        <p>This will take you to a Google doc with a signature template. <Overlay text={<span className='tip'>Make a copy</span>} hoverText={<span>In the <strong>file</strong> dropdown of the top navigation bar, click <strong>Make a copy</strong>. This will create a new document in your personal Google Drive.</span>} /> of the document that you can edit.</p>
        <p>You’re going to replace the name “Jane Doe” with your own name and the phone number with your own number. Feel free to change the color of the “Certified Medical Assistant” line to suit your preference, but remember to choose a dark color that’s easily readable against a white background.</p>
        <p>Next, you need to add a link to your LinkedIn profile. Open up LinkedIn in another tab. Navigate to your profile by clicking your profile picture in the navigation bar on the top and selecting “View Profile.” Your profile URL should be displayed both in the address bar at the top of your window and in the “Public Profile & URL” section on the top right of the page. <Copy /> the full URL from either location.</p>
        <img className='preview-img' src={linkedinPreview} alt=''/>
        <p>In the editor, change the text reading @janedoe to the last section of your own profile URL. For example, if your LinkedIn profile URL is <strong>http://linkedin.com/in/haejin</strong>, you should change this text to <strong>@haejin</strong>. Then, in the text field below (marked with a magnifying glass), delete the existing text. <Paste /> in your full LinkedIn URL.</p>
    </>
)

const step1 = {
    number: 1,
    title: "Customizing your signature",
    content: step1Content
}

const step2Content = (
    <>
        <p>Finally, you’re going to replace the placeholder picture with a picture of you. This should be a photo that represents you professionally, and preferably shows you in good lighting from the shoulders up. The size of the picture doesn’t matter, as long as it’s at least 100x100 pixels. Make sure you have the picture downloaded on your computer, then right-click on the placeholder image, select <strong>Replace image</strong> from the menu, and choose the option <strong>Upload from computer. Find the download location of your image and submit.</strong></p>
        <img className='preview-img' src={replacePreview} alt='' />
        <p>If the image looks good, you can move on to the next step. If you’re using a non-square image and it got cropped strangely (it might look off-center, or part of your face might be cut off in the image), right click on the image again and click <strong>Crop image.</strong></p>
        <img className='preview-img' src={cropPreview} alt='' />
        <p>You can drag the image around until it’s positioned correctly within the square. Once you have it where you want it, click anywhere else on the page. Now your signature should be fully personalized!</p>
    </>
)

const step2 = {
    number: 2,
    title: "Adding your picture",
    content: step2Content
}

const step3Content = (
    <>
    <p>Navigate in another tab to Gmail. Click the gear-shaped settings button in the top right corner of your screen. It should be to the left of your profile picture.</p>
    <p>The settings menu will pop up on the right side of your screen. Click <strong>See all settings</strong> at the top, which will take you to the full-page version of the menu. </p>
    <img className='preview-img' src={settingsPreview} alt='' />
    <p>You should be in the <strong>General</strong> tab; scroll down until you see <strong>Signature</strong> close to the bottom. Click <strong>Create New</strong>.</p>
    <img className='preview-img' src={signatureSettingsPreview} alt='' />
    <p>In the popup, name the signature whatever you would like – the name you choose won’t be visible to anyone else. After you submit a name, an editor will appear where you’ll be creating your new signature.</p>
    <img className='preview-img' src={signatureEditorPreview} alt='' />
    </>
)

const step3 = {
    number: 3,
    title: "Accessing your signature settings",
    content: step3Content
}

const step4Content = (
    <>
    <p>Navigate back to the Google doc. <Copy/> the whole signature. In Gmail, click over to the text editor you opened earlier. <Paste /> the signature in.</p>
    <img className='preview-img' src={pastedSignaturePreview} alt='' />
    <p>Underneath the text editor are <strong>Signature defaults</strong> settings. For both drop-down menus, select the signature you just created.</p>
    <img className='preview-img' src={signatureDefaultsPreview} alt='' />
    <p>Finally, scroll down to the bottom of the page and click <strong>Save changes</strong>.</p>
    <img className='preview-img' src={saveChangesPreview} alt='' />
    <p>You should be all set with your new signature! Try clicking <strong>Compose</strong> on the left side of the page to open the email editor and see your new signature. If you have any issues, contact deejmwilliams@gmail.com for assistance.</p>
    </>
)

const step4 = {
    number: 4,
    title: "Adding your new signature",
    content: step4Content
}

export {step0, step1, step2, step3, step4}