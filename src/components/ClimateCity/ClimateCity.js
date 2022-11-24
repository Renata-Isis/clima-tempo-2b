//Styles
import * as C from "./styles";

const convertDegrees = (temp)=> {
    let celsius = 0;
    celsius = (temp - 32) / 10
    return celsius
}

const ClimateCity = ({ data }) => {
    return (
        <>
            {console.log(data)}
            {data.name !== undefined &&
                <>
                    <C.CityName>{data.name}, {data.sys.country}</C.CityName>
                    <div>
                        <C.ImageClimate src={`icons/${data.weather[0].icon}.png`} alt="" />
                    </div>

                    <C.TempContainer>
                        <C.TempParagraph>Mínima:{data.main ? <C.TempSpan>{convertDegrees(data.main.temp_min.toFixed())} °C</C.TempSpan> : null}</C.TempParagraph>
                        <C.TempParagraph>{data.main ? <C.Temp>{convertDegrees(data.main.temp.toFixed())} °C</C.Temp> : null}</C.TempParagraph>
                        <C.TempParagraph>Máxima: {data.main ? <C.TempSpan>{convertDegrees(data.main.temp_max.toFixed())} °C</C.TempSpan> : null}</C.TempParagraph>
                    </C.TempContainer>

                    <C.TempDescription>{data.weather[0].description}</C.TempDescription>

                    <C.TempInformation>
                        <C.TempInformationParagraph>Sensação térmica: {data.main ? <span>{convertDegrees(data.main.feels_like.toFixed())} °C</span> : null}</C.TempInformationParagraph>
                        <C.TempInformationParagraph>Umidade do ar: {data.main ? <span>{data.main.humidity}%</span> : null}</C.TempInformationParagraph>
                        <C.TempInformationParagraph>Ventos: {data.wind ? <span>{data.wind.speed}</span> : null} Km/h</C.TempInformationParagraph>
                    </C.TempInformation>
                </>
            }
        </>
    )
}

export default ClimateCity;