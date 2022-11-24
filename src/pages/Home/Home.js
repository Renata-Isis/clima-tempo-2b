//Import UseState 
import { useState } from 'react';

//Import Axios 
import axios from 'axios'

//Import components
import ClimateCity from '../../components/ClimateCity/ClimateCity';
import Loader from '../../components/Loader/Loader';

//Styles
import * as C from "./styles";


const Home = () => {
    const [apiData, setApiData] = useState({});
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(false);

    const apiKey = '0526f7b2a0ef7b71518cf2d3df044a8c';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=pt_br`;

    const searchLocation = () => {
        setLoading(true);
        axios.get(url).then((response) => {
            setLoading(false);
            setApiData(response.data)
        }).catch(function (error) {
            if (city === '') {
                setErr("Erro na requisição! Por favor preencha os dados corretamente.");
                setLoading(false);
            } else {
                setErr("Erro na requisição! Verifique se os campos foram preenchidos corretamente ou aguarde um momento.");
                setLoading(false);
            }
        });

        setCity('');
        setErr(false);

    }

    const getInputValue = (e) => {
        setCity(e.target.value);
    }

    return (
        <>
            <main>
                {loading && <Loader />}
                {err && <C.Error>{err}</C.Error>}

                <C.Container>
                    <C.ContainerClimate>
                        <C.Content>
                            <C.Title>Clima Tempo</C.Title>
                            <label>
                                <C.Input
                                    value={city}
                                    name={city}
                                    onChange={getInputValue}
                                    placeholder='Buscar por cidade'
                                    type="text"
                                />
                                <C.ButtonRequisition onClick={searchLocation}>Procurar</C.ButtonRequisition>
                            </label>
                            <ClimateCity data={apiData} />
                        </C.Content>
                    </C.ContainerClimate>
                </C.Container>
            </main>
        </>
    );
}

export default Home;
