import styled from 'styled-components';
import { useAppSelector } from '../../shared/hooks';
import { selectUser } from '../../shared/UserSlicer';
import { StyledHeader } from '../Header';

const StyledMain = styled.main`
h1 {
  padding: 20px;
  background-color: var(--primary);
  color: #fff;
}
.table {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid;
}
th {
  width: 25%;
}

`;

const Profile = () => {
  const User = useAppSelector(selectUser);

  return (
    <StyledMain>
      <div>
        <h1>Profile Page</h1>
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
                {`${User.city}, ${User.state}, ${User.zipcode}, ${User.country}`}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </StyledMain>
  );
};

export default Profile;
