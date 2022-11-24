//Styles
import * as C from "./styles";

// Import loader
import loader from '../Loader/loader.gif';

const Loader = () => {
  return (
    <C.LoaderContainer>
      <img src={loader} alt="loader" />
    </C.LoaderContainer>
  )
}

export default Loader;
