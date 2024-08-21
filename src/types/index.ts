export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export interface MistralResponse {
  generated_text: string;
  message: Array<object>; // Assuming the messages array contains objects. Adjust if necessary.
  status: string;
  cost: number;
}

export interface EdenAIResponse {
  "mistral/small": MistralResponse;
}
export interface Message {
  role: "user" | "AI";
  content: string;
}