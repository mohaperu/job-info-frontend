import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {

  const handleLogoutRecruiter = () => {
    localStorage.removeItem("RecruiterToken");
    window.location = "/"
  }

  const recruiter = localStorage.getItem('RecruiterToken');
  console.log(recruiter);

  const handleLogoutUser = () => {
    localStorage.removeItem("UserToken");
    window.location.reload();
  }

  const user = localStorage.getItem('UserToken');
  console.log(user);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Job Search</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <NavDropdown title="Login" id="collasible-nav-dropdown">
                {user ?
                  <NavDropdown.Item onClick={handleLogoutUser}>User Logout</NavDropdown.Item> :
                  <NavDropdown.Item><Link to="/login" id="loginLink">User Login</Link></NavDropdown.Item>
                }
                {recruiter ?
                  <NavDropdown.Item onClick={handleLogoutRecruiter}>Recruiter Logout</NavDropdown.Item> :
                  <NavDropdown.Item><Link to="/recruiter-login" id="loginLink">Recruiter Login</Link></NavDropdown.Item>
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar