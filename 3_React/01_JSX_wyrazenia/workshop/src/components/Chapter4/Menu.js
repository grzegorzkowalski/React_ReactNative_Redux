import Hello from "../Chapter5/Hello";

const Menu = (props) => {
    return (
        <>
            <ul style={{
                display: "flex",
                flexDirection: "row",
                listStyleType: "none",
            }}>
                {
                    props.elements.map((el) => {
                        return <li
                                style={{marginRight: "15px"}}
                                key={el.url}
                                >
                                <a style={{
                                    textDecoration: "none",
                                    color: "white"
                                }}
                                   href={el.url}>{el.text}
                            </a>
                        </li>
                    } )
                }
                {/*<li style={{marginRight: "15px"}}><a style={{textDecoration: "none", color: "white"}}  href="/blog">Blog</a></li>*/}
                {/*<li style={{marginRight: "15px"}}><a style={{textDecoration: "none", color: "white"}} href="/">Strona główna</a></li>*/}
                {/*<li style={{marginRight: "15px"}}><a style={{textDecoration: "none", color: "white"}} href="/cennik">Cennik</a></li>*/}
                {/*<li><a style={{textDecoration: "none", color: "white"}} href="/kontakt">Kontakt</a></li>*/}
            </ul>
        </>

    );
};

export default Menu;
