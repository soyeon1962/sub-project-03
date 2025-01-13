import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Posts from './data/Posts';
import PostDetail from './pages/PostDetail';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function App() {
  //1.홈페이지(Home) : 사이트 소개, 서비스 소개
  //2.게시글 목록(Posts) : 게시글 나열, 클릭하면 상세페이지로 이동 게시글 좋아요 기능
  //3.게시글 상세(PostDetail) : 글쓴이, 본문, 날짜 댓글 추가기능 제공
  //4.404페이지(NotFound) : 사용자가 경로를 잘못 입력했을때
  //5.댓글기능(CommentSection) : 상세페이지에서 댓글
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/posts" element={<Posts/>}></Route>
              <Route path="/posts/:id" element={<PostDetail />}/>
              <Route path="/profile" element={<Profile/>}></Route>
            </Routes>
          </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
