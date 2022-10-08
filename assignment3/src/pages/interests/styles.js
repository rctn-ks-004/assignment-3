import { css } from "../../styles/styles";

export const styles = {
    section: css({
        height: "120vh",
        padding: 50,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        borderBottom: "1px solid lightgray",
    }),
    title: css({
        fontSize: "50px",
        fontWeight: "bold",
    }),
    content: css({
        marginTop: "10px",
        marginBottom: "10px",
    })
}