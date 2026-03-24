import axios from "axios";
import { Message } from "../types";

// HUGGING FACE API CALL
export const sendMessageToAI = async (
  messages: Message[],
  inputValue: string
): Promise<string> => {
  try {
    // PREPARE CONVERSATION HISTORY
    const conversationHistory = messages.map((msg) => ({
      role: msg.sender === "ai" ? "assistant" : "user",
      content: msg.text,
    }));
    conversationHistory.push({ role: "user", content: inputValue });

    // CREATE PAYLOAD
    const payloadMessages = [
      {
        role: "system",
        content: `You are 'Okie Guide', the official AI assistant for 'Okie Tokyo Tea'.
Your EXCLUSIVE purpose is to assist customers with matcha, Japanese tea, tea accessories, and our brand.

CRITICAL RULES YOU MUST FOLLOW:
1. GUARDRAILS: NEVER discuss politics, religion, programming, celebrities, public figures, or any off-topic subjects. If asked about these, strictly reply: "أعتذر، بصفتي المساعد الذكي لـ Okie Tokyo Tea، يمكنني فقط مساعدتك في الأمور المتعلقة بالشاي والماتشا ومنتجاتنا."
2. NO CHINESE: You are strictly forbidden from writing or outputting any Chinese text. Use ONLY the language of the user (Arabic or English).
3. NO FAKE LINKS: Do not invent fake URLs. If you don't know the exact link, tell the user to browse the website.
4. NO GAMES/CHIT-CHAT: Do not play chess, games, or tell irrelevant jokes. Pivot the conversation back to tea.
5. CONCISENESS: Keep your responses highly concise (1 to 2 short sentences maximum).
6. IF INSULTED: Respond with extreme politeness and professionalism. Overlook the insult and stay focused on customer service.`,
      },
      ...conversationHistory,
    ];

    // SEND API REQUEST
    const response = await axios.post(
      "https://router.huggingface.co/v1/chat/completions",
      {
        model: "Qwen/Qwen2.5-72B-Instruct",
        messages: payloadMessages,
        max_tokens: 150,
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // EXTRACT AND RETURN RESPONSE TEXT
    const aiResponseText =
      response.data.choices?.[0]?.message?.content ||
      "I'm sorry, I couldn't process your request.";

    return aiResponseText.trim();
  } catch (error: any) {
    console.error("Error calling Hugging Face API:", error);
    if (error.response) {
      throw new Error(`API error: ${error.response.status}`);
    } else if (error.request) {
      throw new Error("No response from API");
    } else {
      throw new Error(error.message);
    }
  }
};
