import { http } from "@/client";

export const sendAudio = async (formData: FormData) => {
  try {
    const response = await http.post("/resume-reclamation", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 200) {
      console.log("Audio file successfully processed:", response.data);
      return response.data; // Assuming the server returns JSON with transcription or other info
    } else {
      console.error("Server responded with an error:", response.status);
      return null; // Handle non-200 responses if necessary
    }
  } catch (error) {
    console.error("An error occurred while sending audio to API:", error);
    throw new Error("Failed to send audio to API");
  }
};
