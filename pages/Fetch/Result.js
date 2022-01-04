import { Container, Card } from "react-bootstrap";
// import "./result.css";
// import "../styles.css";

const Result = ({ posts }) => {
    // console.log(posts);
    return (
        <div>
            <Container
                className="result-cards mt-5 mb-5"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridGap: "30px",
                }}
            >
                {posts.map((posts) => (
                    <Card style={{ width: "22rem" }} key={posts.id}>
                        <Card.Body>
                            <h1>ID: {posts.id}</h1>
                            <h3>User Name: {posts.username}</h3>
                            <h5>Company Name: {posts.company.name}</h5>
                            <p>Email: {posts.email}</p>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </div>
    );
};

export default Result;
