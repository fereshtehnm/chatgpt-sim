import axios, { AxiosRequestConfig } from 'axios';

// Load environment variables and ensure they are defined
const baseUrl = process.env.NEXT_PUBLIC_API_URL as string;
const token = process.env.JWT_SECRET as string;

if (!baseUrl || !token) {
  throw new Error('Environment variables NEXT_PUBLIC_API_URL or JWT_SECRET are not defined.');
}

// Define the request options with the proper typing
const options: AxiosRequestConfig = {
  method: 'POST',
  url: baseUrl,
  headers: {
    authorization: token,
  },
  data: {
    providers: 'perplexityai/mixtral-8x7b-instruct',
    text: 'Hello, I need your help!',
    chatbot_global_action: 'Act as an assistant',
    previous_history: [],
    temperature: 0.0,
    max_tokens: 150,
  },
};

// Make the request using axios
axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error('Error making request:', error);
  });
