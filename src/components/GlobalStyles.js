import { createGlobalStyle } from "styled-components"; 
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }

    body{        
        font-family: 'Noto Sans KR', sans-serif;
        font-size:12px;
        background:linear-gradient(to bottom, rgb(36,44,57), rgb(26,30,39));    
        color:white;
        padding-left: 230px;
        padding-right: 350px;
    }
    ul{
        list-style:none;
    }
`;
export default globalStyles;