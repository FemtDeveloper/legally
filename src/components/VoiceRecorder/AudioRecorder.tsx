"use client";
import { useHandleAudio } from "@/hooks";
import React from "react";
import { CustomButton } from "../ui";
import AudioMessage from "./AudioPlayer";

const AudioRecorder: React.FC = () => {
  const { recording, stopRecording, startRecording, audioUrl, sendAudioToAPI } =
    useHandleAudio();

  return (
    <div className="flex gap-6">
      <CustomButton
        onClick={recording ? stopRecording : startRecording}
        title={recording ? "Parar de grabar" : "Comenzar a grabar"}
        size="large"
        variant={recording ? "danger" : "success"}
      />

      {audioUrl && (
        <div className="flex gap-3">
          <AudioMessage url={audioUrl} />
          <CustomButton
            onClick={sendAudioToAPI}
            variant="transparent"
            title="Enviar"
          />
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
