import { useEffect, useState } from "react";
import { useChatContext } from "../context";
import { IMessage } from "../entities";
import { useMutation } from "react-query";

export const useMessageService = () => {
  const { chatId, previousChats, setPreviousChats } = useChatContext();

  const [value, setValue] = useState<string>("");
  const [streamLoading, setStreamLoading] = useState<boolean>(false);

  const { mutate } = useMutation(
    async (messageContent: { role: string; content: string }) => {
      setStreamLoading(true);
      const response: any = await fetch(
        `http://98.67.215.117:8000/question/${chatId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: [messageContent],
          }),
        }
      );

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      return new ReadableStream({
        async start(controller) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              setStreamLoading(false);
              break;
            }
            const str = decoder.decode(value, { stream: true });
            str.split("\n").forEach((line) => {
              if (line) {
                try {
                  const json = JSON.parse(line);
                  controller.enqueue(json);
                } catch (err) {
                  console.error("Error parsing JSON:", err);
                }
              }
            });
          }
          controller.close();
          reader.releaseLock();
        },
      });
    },
    {
      onSuccess: (stream) => {
        const reader = stream.getReader();
        let accumulatedContent = "";
        read();
        function read() {
          reader.read().then(({ done, value }) => {
            if (done) {
              return;
            }
            if (!accumulatedContent.endsWith(value.message.content)) {
              accumulatedContent += value.message.content; // Update the full content
            }

            setPreviousChats((prevChats) => {
              const newChats = prevChats.slice();
              if (
                newChats.length > 0 &&
                newChats[newChats.length - 1].role === "assistant"
              ) {
                newChats[newChats.length - 1].content = accumulatedContent;
              } else {
                newChats.push({
                  role: "assistant",
                  content: accumulatedContent,
                });
              }
              return newChats;
            });

            read();
          });
        }
      },
    }
  );

  const getMessages = () => {
    setPreviousChats((prevChats: IMessage[]) => [
      ...prevChats,
      { role: "user", content: value },
    ]);
    setValue("");
    mutate({ role: "user", content: value });
  };

  useEffect(() => {
    localStorage.setItem("previousChats", JSON.stringify(previousChats));
  }, [previousChats]);

  return {
    previousChats,
    isLoading: streamLoading,
    value,
    setValue,
    getMessages,
  };
};
