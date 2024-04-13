import { useMutation } from "react-query";
import { useAuthContext } from "../context";
import axios from "axios";

export const useApiAuth = () => {
  const { setAuthState, isAuthenticated } = useAuthContext();

  const { mutate: checkIsAuth } = useMutation(
    async (chatId: string | null) => {
      console.log(chatId, "<------ chat id");
      const response = await axios.post(`http://localhost:8000/chat/auth/`, {
        chat_id: chatId,
      });
      console.log(response, "<---- response");
      return response.data;
    },
    {
      onSuccess: (data) => {
        console.log(data, "<------- data");
        setAuthState({
          authHasBeenTriggered: true,
          isAuthenticated: true,
          authMessage: data.message,
        });
      },
      onError: (error) => {
        console.error(error, "<--------- error");
        setAuthState({
          authHasBeenTriggered: true,
          isAuthenticated: false,
          authMessage: error,
        });
      },
    }
  );

  return { checkIsAuth, isAuthenticated };
};
