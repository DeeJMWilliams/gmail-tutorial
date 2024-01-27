import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../resources/propel-logo.png'

const Header = () => {
    const imgStyle = {
        margin: '10px'
    }
    return (
            <Navbar className='body-tertiary'>
                <Container>
                    <Navbar.Brand>
                        <img 
                            alt=''
                            src={logo}
                            height='50'
                            style={imgStyle}
                            href="http://propelamerica.org/"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
    )
}

export default Header