import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/maykonpaulo.png" />
          <div className={styles.authorInfo}>
            <strong>Nome</strong>
            <span>Cargo</span>
          </div>
        </div>

        <time
          title="22 de junho às 10:32"
          dateTime="2022-06-22 10:32:12">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Teste</p>
        <p>Postando</p>
        <p>
          <a href="#">#teste</a>&nbsp;
          <a href="#">#postando</a>
        </p>
      </div>

      <form action="" className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
