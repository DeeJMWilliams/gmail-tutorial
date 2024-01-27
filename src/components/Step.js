import Accordion from 'react-bootstrap/Accordion';

const Step = ({number, title, content}) => {
    return(
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Step {number}: {title}</Accordion.Header>
                <Accordion.Body>{content}</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default Step;