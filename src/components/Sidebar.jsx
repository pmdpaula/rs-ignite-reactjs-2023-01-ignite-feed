import { PencilLine } from '@phosphor-icons/react';

import styles from './Sidebar.module.css';

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%w=500&q=50"
        alt=""
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://github.com/pmdpaula.png"
          alt=""
        />
        <strong>Pedro Machado de Paula</strong>
        <span>DBA e outras coisas</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};
