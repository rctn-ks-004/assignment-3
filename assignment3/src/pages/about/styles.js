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
        fontSize: "80px",
        fontWeight: "bold",
    }),
    contact: css({
        fontSize: "20px",
    }),
    aboutText: css({
        marginTop: "30px",
        lineHeight: 1.5,
        textAlign: "justify"
    }),
    rowContainer: css({
        display: "flex",
        flexDirection: "row",
        gap: 8,
        marginTop: "30px"
    }),
    iconLink: css({
        color: "black",
    })
}