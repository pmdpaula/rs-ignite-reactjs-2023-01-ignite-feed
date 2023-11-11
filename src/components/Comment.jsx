import { Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { ThumbsUp } from '@phosphor-icons/react/dist/ssr';
import { Avatar } from './Avatar';

export const Comment = ({ comment }) => {
  return (
    <div className={styles.comment}>
      <Avatar
        border={false}
        src="https://github.com/pmdpaula.png"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Pedro Machado de Paula</strong>
              <time
                title="10 de novembro às 10:00"
                dateTime="2023-11-10 10:00:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />{' '}
            </button>
          </header>

          <p>Muito bom Dev! parabéns.</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
