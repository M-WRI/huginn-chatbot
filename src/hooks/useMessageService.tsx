import { useEffect, useState } from "react";
import { useChatContext } from "../context";
import { IMessage } from "../entities";
import { useMutation } from "react-query";
import axios from "axios";

export const useMessageService = () => {
  const { previousChats, setPreviousChats } = useChatContext();
  const [value, setValue] = useState<string>("");
  // const queryClient = useQueryClient();

  const sendMessageMutation = useMutation(
    async (messageContent: { role: string; content: string }) => {
      const response = await axios.post(
        "http://localhost:8000/question/1004",
        {
          messages: [messageContent],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data.message;
    },
    {
      onSuccess: (data) => {
        setPreviousChats((prevChats: IMessage[]) => [
          ...prevChats,
          { role: data.role, content: data.content },
        ]);
      },
      onError: (data) => {
        console.log(data, "<------- data");
      },
    }
  );

  const getMessages = () => {
    setPreviousChats((prevChats: IMessage[]) => [
      ...prevChats,
      { role: "user", content: value },
    ]);
    setValue("");
    sendMessageMutation.mutate({ role: "user", content: value });
  };

  // Correctly using useEffect here
  useEffect(() => {
    localStorage.setItem("previousChats", JSON.stringify(previousChats));
  }, [previousChats]);

  return {
    previousChats,
    isLoading: sendMessageMutation.isLoading,
    value,
    setValue,
    getMessages,
  };
};
