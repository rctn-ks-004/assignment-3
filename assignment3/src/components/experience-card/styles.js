import { css } from "../../styles/styles";

export const styles = {
    container: css({
        paddingTop: "5px",
        paddingBottom: "5px",
        display: "flex",
        flex: 1,
        flexDirection: "column",
    }),
    jobPosition: css({
        fontSize: "25px",
        fontWeight: "bold",
    }),
    body: css({
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }),
    company: css({
        fontSize: 18,
        fontWeight: "700",
        color: "#828282",
    }),
    date: css({
        fontSize: 18,
        fontWeight: "400",
        color: "#E2A089",
    }),
    summary: css({
        textAlign: "left",
        marginTop: 12,
        fontWeight: "400",
        fontSize: 16,
    })
}