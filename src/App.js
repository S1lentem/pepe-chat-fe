import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routers } from 'route/route';
import { ActiveQueries } from 'context/contex-wrappers/active-queries';
import { ActiveSubmites } from 'context/contex-wrappers/active-submits';
import { MountedRefs } from 'context/contex-wrappers/mounted-refs';

import 'styles/animations.scss';
import { MainLayout } from 'layouts/main-layout';

function App() {
  return (
      <MountedRefs>
          <ActiveSubmites>
            <ActiveQueries>
              <BrowserRouter>
                <MainLayout>
                  <Routers />
                </MainLayout>
              </BrowserRouter>
            </ActiveQueries>
          </ActiveSubmites>
      </MountedRefs>
  );
}
export default App;