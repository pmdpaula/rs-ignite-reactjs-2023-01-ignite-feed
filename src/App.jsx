import { Post } from './Post';
import { Header } from './components/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Post
        content="Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor."
        author="Mussum"
      />
    </>
  );
};

export default App;
