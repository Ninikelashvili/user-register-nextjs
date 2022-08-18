import Container from "../components/Container";
import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { store } from "../store/store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
