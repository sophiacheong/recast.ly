import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';
import exampleVideoData from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      isLoading: true,
      videos: exampleVideoData,
      q: 'react tutorial',
    };
    this.onClickTitle = this.onClickTitle.bind(this);
  }

  componentDidMount() {
    var options = {
      key: YOUTUBE_API_KEY,
      query: this.state.q,
    };

    searchYouTube(options, (data) => (
      console.log(data))
    );
  }

  onClickTitle(e) {
    this.state.videos.map((item) => {
      if (item.snippet.title === e.target.textContent) {
        this.setState({
          currentVideo: item,
        });
      }
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onClickTitle={this.onClickTitle} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
