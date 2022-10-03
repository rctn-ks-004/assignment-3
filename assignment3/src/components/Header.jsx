import styled from "styled-components";

export const Header = styled.div.attrs((props) => ({
    style: {
        transform: `translateX(${props.scrollPercent}%)`,
    },
}))`
    transition: transform 0.5s ease-out;
    position: absolute;
    color: #eee;
    top: 20%;
    left: -10%;
    font-size: 10em;
    font-weight: 800;
    text-transform: uppercase;
    color: #263041;
`;
