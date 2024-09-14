import React from 'react';
import {BrowserRouter as Route, Routes, useLocation} from 'react-router-dom';
import {GlobalStyle} from './styles/global-styles';
import styled from 'styled-components';
import PostList from './pages/PostList.jsx'
import PostDetail from './pages/PostDetail';
import NewPost from './pages/NewPost'
import NewPostButton from "./components/NewPostButton.jsx";
import PostListButton from "./components/PostListButton.jsx";
import EditPost from "./pages/EditPost.jsx";

function App() {
    const location = useLocation();

  return (
      <>
          <GlobalStyle />
          <Container>
              <Border>
              <Box>
                  <ButtonWrapper>
                      {location.pathname !== '/posts/newpost' && <NewPostButton />}
                      {location.pathname !== '/posts' && <PostListButton />}
                  </ButtonWrapper>
                  <Title>
                      BLOG
                  </Title>
                  <Routes>
                      <Route path="/posts" element={<PostList />} />
                      <Route path="/posts/:id" element={<PostDetail />} />
                      <Route path="/posts/newpost" element={<NewPost />} />
                      <Route path="/posts/editpost/:id" element={<EditPost />} />
                  </Routes>
              </Box>
              </Border>
          </Container>
      </>
  );
};

export default App;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`

const Border = styled.div`
    height: 83%;
    width: 73%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px dashed white;
    border-radius: 57px;
`

const Box = styled.div`
    height: 97%;
    width: 98%;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50px;
    box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Title = styled.h1`
    text-align: center;
    font-family: 'BagelFatOne-Regular';
`

const ButtonWrapper = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: row-reverse;
    gap: 10px;

    @media (max-width: 700px) {
        flex-direction: column-reverse;
    }
`;
