import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/maykonpaulo.png',
      name: 'Maykon',
      role: 'Analista',
    },
    content: [
      { type: "p", content: "Test" },
      { type: "p", content: "Postando" },
      { type: "link", content: "google.com" },
    ],
    publishedAt: new Date('2022-06-22 08:02:07')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/antapidf.png',
      name: 'Antapi',
      role: 'Instituição',
    },
    content: [
      { type: "p", content: "Test" },
      { type: "p", content: "Postando" },
      { type: "link", content: "google.com" },
    ],
    publishedAt: new Date('2022-06-24 11:38:27')
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
