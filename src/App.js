import './App.css';
import { SignUpView } from 'views/sign-up';
import { SignInView } from 'views/sign-in';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HomeView } from 'views/home';
import { ProfileView } from 'views/profile';
import { CreateChatView } from 'views/create-chat';
import { SignOut } from 'views/sign-out';

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
          <Route path='signout' element={<SignOut />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;