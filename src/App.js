import './App.css';
import { SignUpView } from 'views/sign-up';
import { SignInView } from 'views/sign-in';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomeView } from 'views/home';
import { ProfileView } from 'views/profile';
import { CreateChatView } from 'views/create-chat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='home'/> } />
          <Route path='home' element={<HomeView />} />
          <Route path='signup' element={<SignUpView/>} />
          <Route path='signin' element={<SignInView />} />
          <Route path='profile' element={<ProfileView />} />
          <Route path='create-chat' element={<CreateChatView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;