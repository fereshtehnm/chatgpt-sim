// utils/apiService.ts
import axios, { AxiosRequestConfig } from 'axios';

// Load environment variables and ensure they are defined
const baseUrl = process.env.NEXT_PUBLIC_API_URL as string;
const token = process.env.JWT_SECRET as string;

if (!baseUrl || !token) {
  throw new Error('Environment variables NEXT_PUBLIC_API_URL or JWT_SECRET are not defined.');
}

export const sendRequest = async (text: string) => {
  const options: AxiosRequestConfig = {
    method: 'POST',
    url: baseUrl,
    headers: {
      authorization: token,
    },
    data: {
      providers: 'perplexityai/mixtral-8x7b-instruct',
      chatbot_global_action: 'Act as an assistant',
      previous_history: [],
      temperature: 0.0,
      max_tokens: 150,
      text, // Dynamic parameter
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error making request:', error);
    throw error;
  }
};
