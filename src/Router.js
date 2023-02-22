// Router.js 를 왜 만들어야할까? 지금까지 컴포넌트는 index.js의 변수 root의 render 메서드를 통해 렌더링됐다.
// root.render 메서드로 전달해주는 첫번째 인자가 랜더링되는 컴포넌트이다.
// root.render(<Main />) 에서 Main 이 인자!
// 만약 화면에 그릴 컴포넌트가 Main만 있다면 문제되지 않지만, Signup을 띄워야 하거나(root.render(<Signup />)),
// Login을 띄워야 한다면 (root.render(<Login />))
// index.js에서 랜더링할 컴포넌트를 이렇게 매번 수정해야 하고 컴포넌트 별로 결로 설정 또한 할 수 없다.
// 따라서 이런 경로 관리를 좀 더 편리하게 하기 위해 Router.js 파일로 관리한다.

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

//라우터 컴포넌트의 기본 구조
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
