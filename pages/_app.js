import Container from "../components/Container";
import "../styles/globals.css";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </QueryClientProvider>
  );
}

export default MyApp;
