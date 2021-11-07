import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import * as C from'./App.styles';


function App() {
  return (
    <C.Container>
      <Header />
      <Body />
      <Footer />
    </C.Container>
  );
}

export default App;
