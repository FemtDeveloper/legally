import { sendAudio } from "@/services/audioUploader";
import { useEffect, useState } from "react";

const useHandleAudio = () => {
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  useEffect(() => {
    const setupRecorder = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const recorder = new MediaRecorder(stream);
        const chunks: BlobPart[] = [];

        recorder.ondataavailable = (e) => chunks.push(e.data);
        recorder.onstop = async () => {
          const audioBlob = new Blob(chunks, { type: "audio/wav" });
          const url = URL.createObjectURL(audioBlob);
          setAudioBlob(audioBlob);
          setAudioUrl(url);
        };

        setMediaRecorder(recorder);
      } catch (error) {
        console.error("Error setting up media recorder:", error);
      }
    };

    setupRecorder();

    return () => {
      mediaRecorder?.stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const startRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.start();
      setRecording(true);
      setAudioUrl(null); // Clear previous URL
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const sendAudioToAPI = async () => {
    if (audioBlob) {
      const formData = new FormData();
      formData.append("file", audioBlob, "audio.wav");

      const text = await sendAudio(formData);
      console.log(text);
    }
  };
  return { recording, stopRecording, startRecording, audioUrl, sendAudioToAPI };
};

export default useHandleAudio;
