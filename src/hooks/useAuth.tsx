import { useMutation } from "react-query";
import { useAuthContext } from "../context";
import axios from "axios";

export const useApiAuth = () => {
  const { authState, setAuthState } = useAuthContext();

  const { mutate: checkIsAuth } = useMutation(
    async (chatId: string | null) => {
      const response = await axios.post(`http://localhost:8000/chat/auth/`, {
        chat_id: chatId,
      });
      return response.data;
    },
    {
      onSuccess: (data) => {
        setAuthState({
          authHasBeenTriggered: true,
          isError: false,
          state: data.message,
        });
      },
      onError: (error: any) => {
        setAuthState({
          authHasBeenTriggered: true,
          isError: true,
          state: error?.response.data.detail,
        });
      },
    }
  );

  return { checkIsAuth, authState };
};
