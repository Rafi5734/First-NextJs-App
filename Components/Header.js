import {
    Navbar,
    Container,
    Nav,
    NavDropdown,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";
import Result from "../pages/Fetch/Result";
const Header = () => {
    return (
        <>
            <header className="header">
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#">
                            <img
                                src="https://assets.cubsinsider.com/wp-content/uploads/2020/02/21132231/hulu-logo-1197973-1280x0-1.jpeg"
                                className="img-fluid"
                                style={{ width: "100px", height: "" }}
                            ></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto ms-auto my-2 my-lg-0"
                                style={{ maxHeight: "100px" }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <NavDropdown
                                    title="All Items"
                                    id="navbarScrollingDropdown"
                                >
                                    <NavDropdown.Item href="#action3">
                                        Completed
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        In Completed
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Back To Home
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">
                                    Search
                                </Button>
                                <Button
                                    variant="outline-success"
                                    className="ms-5 text-nowrap"
                                >
                                    Log In
                                </Button>{" "}
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            {/* <Result></Result> */}
        </>
    );
};

export default Header;
