import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        {/* Routes 밖에다가 쓰는 이유: Header나 Footer는 고정, 내가 만드는 컴포넌트*/}
        {/* 라우터의 영향을 받지 않고 고정된 컴포넌트 */}
        <Header />
        <Routes>
          {/* 눌렀을 때 화면 바뀌는 게 route */}
          {/* path='/'  는 첫 페이지를 의미한다.(홈페이지) */}
          {/* DayList는 DB에 있는 Days에 있는 거를 읽어서 화면 구성 */}
          {/* WordList는 DB에 있는 Words에 있는 거를 읽어서 화면 구성 */}
            <Route path='/' element={<DayList />} />
            {/* 동적 라우팅 /:day 는 파라미터 받는 것 */}
            <Route path='/day/:day' element={<Day />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
