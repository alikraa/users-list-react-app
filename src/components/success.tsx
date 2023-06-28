import successIcon from '../assets/success.svg';

function Success({ count }) {
  return (
    <div className="success-block">
      <img src={successIcon} alt="Success" />
      <h3>Успешно!</h3>
      <p>
        Всем
        {' '}
        {count}
        {' '}
        пользователям отправлено приглашение.
      </p>
      <button
        type="button"
        className="send-invite-btn"
        onClick={() => window.location.reload()}
      >
        Назад
      </button>
    </div>
  );
}

export { Success };
