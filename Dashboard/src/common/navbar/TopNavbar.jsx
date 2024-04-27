import { Navbar, Nav } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
const TopNavbar = ({ toggleSidebar }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">My Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSidebar} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;
