import './App.css';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedNavigation } from 'components/animated-navigation';
import { Routers } from 'route/route';
import { ActiveQueries } from 'components/active-queries';
import { ActiveSubmites } from 'components/active-submits';

function App() {
  return (
    <div className="App">
      <AnimatedNavigation>
        <ActiveSubmites>
          <ActiveQueries>
            <BrowserRouter>
              <Header />
              <div className='content'>
                <Routers />
              </div>
              <Footer />
            </BrowserRouter>
          </ActiveQueries>
        </ActiveSubmites>
      </AnimatedNavigation>
    </div>
  );
}
export default App;