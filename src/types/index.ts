export interface ChatInputProps {
    onSendMessage: (message: string) => void;
  }
  
  export interface SendRequestResponse {
    providers: string;
    generated_text: string;
    message: any[]; // Define this more precisely if you know the structure
    status: string;
    cost: number;
  }
  