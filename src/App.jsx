import Messages from "./components/Messages";
import Chat from "./components/Chat";


function App() {
  return (
    <div className="flex justify-center w-full h-full mt-20 md:mt-12">
      <div className="flex flex-col gap-8">
        <Messages />
        <Chat />
      </div>
    </div>

  )
}

export default App