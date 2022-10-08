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
        marginBottom: "30px",
    }),
    secTitle: css({
        fontSize: "20px",
        fontWeight: "700",
        color: "#828282",
        marginBottom: "10px",
    }),
    listItem: css({
        margin: "20px",
    }),
    body: css({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    }),
    eachList: css({
        marginTop:"5px",
    })
}