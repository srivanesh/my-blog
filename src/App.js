
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './NavBar';
import HomePage from './pages/HomePage';
import ArticleListPage from './pages/ArticleListPage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import CreateAccountpage from './pages/CreateAccountPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <div id="page-body">
      <Routes>
        <Route path='/' element ={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/articles' element={<ArticleListPage/>} />
        <Route path='/articles/:articleId' element={<ArticlePage/>} />
        <Route path="*" element={<NotFoundPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/create-account' element={<CreateAccountpage/> } />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
