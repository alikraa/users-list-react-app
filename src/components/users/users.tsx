import { Skeleton } from './skeleton.tsx';
import { User } from './user.tsx';

export function Users({
  items, isLoading, searchValue, onChangeSearchValue,
}) {
  return (
    <>
      <div className="search">
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          type="text"
          value={searchValue}
          onChange={onChangeSearchValue}
          placeholder="Найти пользователя..."
        />
      </div>
      {isLoading ? (
        <div className="skeleton-list">
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className="users-list">
          {items
            .filter((item) => {
              const fullName = (`${item.first_name} ${item.last_name}`).toLowerCase();

              return (
                fullName.includes(searchValue.toLowerCase())
                || item.email.toLowerCase().includes(searchValue.toLowerCase())
              );
            })
            .map((item) => (
              <User
                key={item.id}
                firstName={item.first_name}
                lastName={item.last_name}
                email={item.email}
                avatar={item.avatar}
              />
            ))}
        </ul>
      )}
      <button type="button" className="send-invite-btn">
        Отправить приглашение
      </button>
    </>
  );
}
