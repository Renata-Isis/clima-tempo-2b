import styled from "styled-components";

export const Error = styled.p`
        color: #000;
        font-weight: bold;
        text-align: center;
        font-size: 1.2em;
        border: 2px solid #fff;
        border-radius: 10px;
        background: #fff;
        width: 80%;
        margin: 80px auto;
        padding: 10px;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 100vh;
`;

export const ContainerClimate = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    @media(max-width:900px) {
            width: 90%;
            margin: 0 auto;
    }
`;

export const Content = styled.section`
    width: 40%;
    margin: 0 auto;
    padding: 30px;
    background-color: rgba(300, 300, 300, .3);
    @media(max-width:900px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
color: #000;
    text-align: center;
    letter-spacing: 3px;
    margin-top: 50px;
`;

export const Input = styled.input`
    display: block;
    padding: 8px;
    width: 50%;
    border: 2px solid #fafafa;
    border-radius: 10px;
    margin: 20px auto;
    outline: none;
    @media(max-width:900px) {
        width: 70%;
    }
`;

export const ButtonRequisition = styled.button`
    display: block;
    width: 40%;
    padding: 5px;
    border: 2px solid #292929;
    border-radius: 10px;
    background: #292929;
    color: #fff;
    font-size: 1em;
    letter-spacing: 1px;
    margin: 0 auto;
    cursor: pointer;
    &:hover {
        background: #fff;
        color: #292929;
        transition: all 1s;
    }
`;