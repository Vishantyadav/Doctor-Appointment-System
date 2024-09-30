import { useEffect } from 'react';
import axios from 'axios';

const Homepage = () => {

  const getUserData = async () => {
    try {
      const res = await axios.post(
        '/api/v1/user/getUserData',
        {},  // Empty body for the request
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),  // Add space after "Bearer"
          },
        }
      );
      // Handle response data here
      console.log(res.data);  // Log or use the data from the API
    } catch (error) {
      console.error('Error fetching user data:', error);  // Provide a clear error log
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <h1 className='success'>HomePage</h1>
    </>
  );
};

export default Homepage;
