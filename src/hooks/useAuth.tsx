import { useMutation } from "react-query";
import { useAuthContext } from "../context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const useApiAuth = () => {
  const navigate = useNavigate();
  const { authState, setAuthState } = useAuthContext();

  const { mutate: checkIsAuth } = useMutation(
    async (chatId: string | null) => {
      const response = await axios.post(
        `http://98.67.215.117:8000/chat/auth/`,
        {
          chat_id: chatId,
        }
      );
      return response.data;
    },
    {
      onSuccess: (data) => {
        setAuthState({
          authHasBeenTriggered: true,
          isError: false,
          state: data.message,
        });
        navigate("/chat-bot");
      },
      onError: (error: any) => {
        setAuthState({
          authHasBeenTriggered: true,
          isError: true,
          state: error?.response.data.detail,
        });
        navigate("/");
      },
    }
  );

  return { checkIsAuth, authState };
};
