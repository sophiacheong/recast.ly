import VideoListEntry from './VideoListEntry.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      done: false,
    };
  }

  onListItemClick(event) {
    var index = 0;
    var $currentNode = event.target;
    var currentTitle = $currentNode.textContent;
    for (let i = 0; i < exampleVideoData.length; i++) {
      if (exampleVideoData[i].snippet.title === currentTitle) {
        index = i;
      }
    }
    this.setState({
      done: !this.state.done,
      currentVideo: exampleVideoData[index]
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><Search /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* {exampleVideoData.map(function(video) {
              return <VideoPlayer video={video}/>;
            })} */}
            <div>
              <VideoPlayer video={this.state.currentVideo} />
            </div>
          </div>
          <div className="col-md-5">
            <div onClick={this.onListItemClick.bind(this)}>
              <VideoList videos={exampleVideoData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default App;
