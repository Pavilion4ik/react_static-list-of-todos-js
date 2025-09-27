import usersFromServer from '../../api/users.json';
import { UserInfo } from '../UserInfo';

export function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

export const TodoInfo = ({ todo }) => {
  const user = getUserById(todo.userId);

  return (
    <article
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
