import styled from "styled-components";

export const Header = styled.div.attrs((props) => {
    if (props.onePage && props.reversed) {
        return {
            style: {
                right: 0,
            },
        };
    }
    if (props.onePage) {
        return {
            style: {
                left: "-2%",
            },
        };
    }
    if (props.reversed) {
        return {
            style: {
                transform: `translateX(-${props.scrollPercent}%)`,
                right: "-80%",
            },
        };
    }
    return {
        style: {
            transform: `translateX(${props.scrollPercent}%)`,
            left: "-10%",
        },
    };
})`
    transition: transform 0.5s ease-out;
    position: absolute;
    color: #eee;
    top: 20%;
    font-size: 10em;
    font-weight: 800;
    text-transform: uppercase;
    color: #263041;
`;
