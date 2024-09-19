import { Home } from './components/pages/home/Home';
import { About } from './components/pages/about/About';
import { Services } from './components/pages/Services/Services' ;
import { Data } from './components/pages/Data/Data';
import { Footer } from './components/pages/Footer/Footer';

export function App() {
    return (
        <div className="App">
            <header>
              <Home />
              <About />
              <Services />
              <Data />
              <Footer />
            </header>       
        </div>
    )
}

export default App;