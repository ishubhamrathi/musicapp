// import AudioPlayer from "./components/AudioPlayer" ;
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Songs from "./components/Songs";
import Search from "./components/Search";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Search/>
      <Songs/>
      <Player/>
    </div>
  );
}

export default App;
