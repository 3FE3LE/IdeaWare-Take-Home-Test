import "../styles/_global.scss";
// setup state management
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../redux/reducers";

function MyApp({ Component, pageProps }) {
  // initial state
  const initialState = {
    limit: 4,
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
