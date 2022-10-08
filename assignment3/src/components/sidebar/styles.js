import { css } from "../../styles/styles";
export const styles = {
    default: css({
        color: "#FAB9A2",
        fontWeight: "bold",
        paddingTop: 15,
        paddingBottom: 15,
        cursor: "pointer",
        "&:hover": {color: "white"},
    }),
    active: css({
        color: "white",
    }),
    sidebarContainer: css({
        backgroundColor: "#AD5236",
        height: "100%",
        width: "20%",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        position: "fixed",
    }),
    bodyContainer: css({
        display: "flex",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
    }),
    imgContainer: css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "70%",
        margin: 20,
        borderRadius: 999,
    }),
    imgStyle: css({
        width: "80%",
        objectFit: "cover",
        borderRadius: 999,
    }),
};