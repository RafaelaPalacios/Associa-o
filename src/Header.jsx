function Header(props) {
    return (
        <header style={{ background: "#333", color: "white", padding: "10px" }}>
            <h1>{props.titulo}</h1>
        </header>
    );
}
export default Header;