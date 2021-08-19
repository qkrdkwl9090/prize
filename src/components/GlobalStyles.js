import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap');
    body{        
        font-family: "Noto Sans KR", sans-serif, 'Noto Sans';
        font-size:12px;
        background:white;    
    }
    ul{
        list-style:none;
    }
`;
export default globalStyles;
