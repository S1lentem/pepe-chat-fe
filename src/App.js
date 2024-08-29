import './App.css';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { BrowserRouter } from 'react-router-dom';
import { AnimatedNavigation } from 'components/contex-wrappers/animated-navigation';
import { Routers } from 'route/route';
import { ActiveQueries } from 'components/contex-wrappers/active-queries';
import { ActiveSubmites } from 'components/contex-wrappers/active-submits';
import { MountedRefs } from 'components/contex-wrappers/mounted-refs';

import 'styles/animations.scss';

function App() {
  return (
    <div className="App">
      <MountedRefs>
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
      </MountedRefs>
    </div>
  );
}
export default App;