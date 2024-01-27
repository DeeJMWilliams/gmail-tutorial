import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const popover = (content) => {
    return(
        <Popover id="popover-basic">
            <Popover.Body>
            {content}
            </Popover.Body>
        </Popover>
    )
};

const Overlay = ({text, hoverText}) => (
  <OverlayTrigger trigger="hover" placement="right" overlay={popover(hoverText)}>
    {text}
  </OverlayTrigger>
);

export default Overlay;