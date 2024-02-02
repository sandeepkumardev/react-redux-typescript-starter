import { useDispatch, useSelector } from 'react-redux';
import { handleEmail, handleName, profileState } from '../../store/slices/profile';
import { useEffect } from 'react';

const Profile: React.FC = () => {
  const profile = useSelector(profileState);
  const dispatch = useDispatch();

  console.log(profile);

  useEffect(() => {
    dispatch(handleEmail({ type: 'GET_OR_SET_EMAIL' }));
  }, []);

  return (
    <div>
      <div>
        <button onClick={() => dispatch(handleName('sandeep'))}>Change Name</button>
        <button
          onClick={() => dispatch(handleEmail({ type: 'UPDATE_EMAIL', data: 'updated@gmail.com' }))}
        >
          Change Email
        </button>
      </div>
    </div>
  );
};

export default Profile;
