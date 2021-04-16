import "../styles/_global.scss";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../redux/reducers";

function MyApp({ Component, pageProps }) {
  const initialState = {
    limit: 4,
    startId: "",
    time: 1,
    url: "https://api.massrelevance.com/MassRelDemo/kindle.json",
  };

  const store = createStore(reducer, initialState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
