import React from 'react';

import { Header } from './Header';
import Landing from '../views/Landing';
import './page.css';

export const Page = () => {
  const [user, setUser] = React.useState();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="w-full">
       <Landing/>
      </section>
    </article>
  );
};
