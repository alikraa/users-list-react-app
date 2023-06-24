import { useEffect, useState } from 'react';
import { Users } from './components/users/users.tsx';
import { serverRequest } from './ts/request.ts';
import './app.scss';

function App() {
  const url = 'https://reqres.in/api/users';
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    serverRequest(url)
      .then((response) => setUsers(response))
      .finally(() => setIsLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="users-list__app">
      <Users
        items={users}
        isLoading={isLoading}
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
      />
    </div>
  );
}

export { App };
