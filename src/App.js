// import AudioPlayer from "./components/AudioPlayer" ;
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Songs
 from "./components/Songs";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Songs/>
      <Player/>
    </div>
  );
}

export default App;
