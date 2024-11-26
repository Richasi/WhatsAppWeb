import axios from "axios";

const useInstantDB = () => {
  const fetchMessages = async (contactId) => {
    const response = await axios.get(`https://api.instantdb.com/messages/${contactId}`);
    return response.data;
  };

  const sendMessage = async (contactId, message) => {
    try {
      await axios.post(`https://api.instantdb.com/messages`, {
        contactId,
        message,
      });
      console.log("Message sent successfully to InstantDB!"); // Debug log
    } catch (error) {
      console.error("Error sending message to InstantDB:", error);
    }
  };

  return { fetchMessages, sendMessage };
};

export default useInstantDB;
