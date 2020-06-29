import { StaticKitProvider } from '@statickit/react';
function App({ Component, pageProps }) {
  return (
    <StaticKitProvider site="3ce701dad217">
      <Component {...pageProps} />
    </StaticKitProvider>
  );
}
export default App;