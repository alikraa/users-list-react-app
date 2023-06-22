import { useEffect, useState } from 'react';
import { Users } from './components/users/users.tsx';
import { serverRequest } from './ts/request.ts';
import './app.scss';

function App() {
  const url = 'https://reqres.in/api/users';
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    serverRequest(url)
      .then((response) => setUsers(response))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="users-list__app">
      <Users items={users} isLoading={isLoading} />
    </div>
  );
}

export { App };
