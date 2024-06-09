import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../features/User/UserSlice';
import SingleUser from './SingleUser';

export default function UserList() {
  const dispatch = useDispatch();
  const arrUsers = useSelector((state) => state.user.arrUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
    <h1>All Users</h1>
    {arrUsers && arrUsers.map((item) => (
        <div key={item.id}>
            <SingleUser
                user={item}
                // isDisabled={false}
                // isManager={currentUserFromRedux === 'manager'}
            />
        </div>
    ))}
</div>
);
}
