import { useAppSelector } from '../../shared/hooks';
import { selectUser } from '../../shared/UserSlicer';
import { StyledHeader } from '../Header';

const Profile = () => {
  const User = useAppSelector(selectUser);

  return (
    <main>
      <div>
        <h3>Profile Page</h3>
      </div>

      <div>
        <table className='table'>
          <thead>
            <tr className='userInfo-columns'>
              <th scope='col'>Name</th>
              <th scope='col'>Phone Number</th>
              <th scope='col'>Email Address</th>
              <th scope='col'>Home Address</th>
            </tr>
          </thead>

          <tbody>
            <tr className='info'>
              <td>
                {`${User.firstName} ${User.middleInitial} ${User.lastName}`}
              </td>
              <td>{User.phoneNumber}</td>
              <td>{User.email}</td>
              <td>
                {`${User.city} ${User.state} ${User.zipcode} ${User.country}`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Profile;
