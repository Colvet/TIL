import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import SearchBar from './search_bar';
import VideoDetail from './video_detail';

const API_KEY = '';

// YTSearch({key: API_KEY, term: 'surfboards'}, function (data) {
//     console.log(data)
// });

class App extends Component{
    constructor(props){
        super(props); //부모의 생성자 함수를 호출 (Component)

        this.state = {
            videos : [],
            selectedVideo: null
        }
        YTSearch({key:API_KEY, term : 'surf'}, (data)=> {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });
    }

    handleSelect = (selectedVideo)=> {
        // console.log("selectedVido" + selectedVideo);
        this.setState({
            selectedVideo: selectedVideo
        });
    };
    render(){
        return(
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList videos={this.state.videos} onVideoSelect={this.handleSelect} />

            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));