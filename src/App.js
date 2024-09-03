import './App.css';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { BrowserRouter } from 'react-router-dom';
import { Routers } from 'route/route';
import { ActiveQueries } from 'context/contex-wrappers/active-queries';
import { ActiveSubmites } from 'context/contex-wrappers/active-submits';
import { MountedRefs } from 'context/contex-wrappers/mounted-refs';

import 'styles/animations.scss';

function App() {
  return (
    <div className="App">
      <MountedRefs>
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
      </MountedRefs>
    </div>
  );
}
export default App;