import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import { store } from "../redux";
import { AuthProvider } from "../contexts/auth.js";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
