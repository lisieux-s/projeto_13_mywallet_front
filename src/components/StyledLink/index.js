import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    margin-top: 36px;

    color: #ffffff;
    font-size: 15px;
    text-decoration: none;
    :visited {
        color: #ffffff;
    }
`

export default StyledLink;