import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { AudioRecorder } from "@/components/VoiceRecorder";

export default function Home() {
  return (
    <main className="bg-main flex min-h-screen relative flex-col items-center justify-between p-4   bg-white">
      <Navbar />
      <Header />
      <AudioRecorder />
    </main>
  );
}
