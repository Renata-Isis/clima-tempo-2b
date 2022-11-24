import styled from "styled-components";

export const CityName = styled.h2`
    color: #fff;
    text-align: center;
    margin-top: 50px;
`;

export const ImageClimate = styled.img`
    margin: 0 auto;
    display: block;
`;

export const TempContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const TempParagraph = styled.p`
    color: #000;
    font-weight: bold;
    font-size: 1.1em;
    letter-spancing: 1px;
`;

export const TempSpan = styled.span`
    display: block;
    text-align: center;
`;

export const Temp = styled.span`
    display: block;
    text-align: center;
    font-size: 1.3em;
`;

export const TempDescription = styled.p`
    color: #000;
    font-weight: bold;
    font-size: 1.3em;
    letter-spancing: 1px;
    text-align: center;
    &::first-letter {
        text-transform: capitalize;
    }
    &::after {
        content: '';
        position: relative;
        display: block;
        background-color: rgba(0, 0, 0, 0.75);
        width: 100%;
        height: 2px;
        top: 20px;
    }
`;

export const TempInformation = styled.div`
    display: block;
    text-align: center;
    margin-top: 50px;
`;

export const TempInformationParagraph = styled.p`
    display: block;
    font-size: 0.9em;
    font-weight: bold;
    margin-top: 20px;
`;
