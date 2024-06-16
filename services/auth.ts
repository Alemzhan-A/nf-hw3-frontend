import axios from 'axios';

interface LoginResponse {
  token: string;
}

export const login = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await axios.post('https://dummyjson.com/auth/login', {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error('Error logging in');
  }
};
