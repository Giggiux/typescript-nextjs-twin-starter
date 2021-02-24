// page/_app.js
import { GlobalStyles } from 'twin.macro';

const App = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
);

export default App;
