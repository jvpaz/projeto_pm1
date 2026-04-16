import { createContext, useState } from "react";
import * as Speech from "expo-speech";

export const SpeakerContext = createContext();

export function SpeakerProvider({ children }) {
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  const falar = (text) => {
    if (!voiceEnabled) return;
    Speech.stop();
    Speech.speak(text, { language: "pt-BR" });
  };

  const toggleVoice = () => {
    if (voiceEnabled) Speech.stop();
    setVoiceEnabled((prev) => !prev);
  };

  return (
    <SpeakerContext.Provider value={{ voiceEnabled, falar, toggleVoice }}>
      {children}
    </SpeakerContext.Provider>
  );
}