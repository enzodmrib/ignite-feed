import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ducimus labore architecto voluptates? Quas praesentium accusamus temporibus deleniti molestias ratione id tempore, magnam earum culpa reprehenderit illum, facere incidunt maxime."
          />
          <Post
            author="Gabriel Buzzi"
            content="novo post mouito legal"
          />
        </main>
      </div>
    </div>
  );
}

export default App
