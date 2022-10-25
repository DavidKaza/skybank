import { StyledHeader } from "../Header";

const Profile = () => {
    return (
      <main>
        <StyledHeader />
      <div>
        <h3>
          Profile Page
        </h3>
        
      </div>

      <div>
      <table className='table'>
        <thead>
          <tr className='userInfo-columns'>
            <th scope="col">Name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email Address</th>
            <th scope="col">Home Address</th>
          </tr>
        </thead>

        <tbody>
            <tr className='info'>
              <td>
                Yasin A. Adam
              </td>
              <td>
                123-456-7890
              </td>
              <td>
                yasin@gmail.com
              </td>
              <td>
                123 Main Street, Main City, 12345
              </td>
            </tr>
        </tbody>
      </table>
      </div>
      </main>
    );
  };
  
  export default Profile;