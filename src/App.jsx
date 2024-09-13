import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import VideoUpload from "./components/VideoUpload";
import { Toaster } from "react-hot-toast";

function App() {
  const [count, setCount] = useState(0);

  const [videoId,setvideoId]=useState('adca8a03-b973-4b89-af93-a2cbb7ba7409')

  return (
    <>
      <Toaster />
      <div>
      <div className="flex flex-col items-center space-y-9 justify-center py-9">
        <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-100">
          Video Streaming App
        </h1>

        <div>

            <h1 className="text-red-900">Playing video</h1>
            <video src='http://localhost:8090/api/v1/videos/stream/${videoId}' controls></video>

        </div>
        <VideoUpload />
        </div>
      </div>
    </>
  );
}

export default App;