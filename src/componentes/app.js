import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import youtube from '../apis/youtube'


/**
 * Refactoring from class to function component
 */

const App = () => {

    const [videos, setVideos] = useState([]);
    const [selectVideo, setSelectVideo] = useState(null);



    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term,
            }
        });

        setVideos(response.data.items);
        setSelectVideo(response.data.items[0]);

    }

    useEffect(() => {
        onTermSubmit('buildings');
    }, [])

    return (
        <div className="ui container">
            <div className="ui segment">
                <h1>Video browser </h1>
                <SearchBar onFormSubmit={onTermSubmit} />
            </div>
            <div className="ui row">
                <div className="ui grid">
                    <div className="eleven wide column">
                        <VideoDetail video={selectVideo} />
                    </div>
                    <div className="five wide column">
                        {/* <VideoList videos={videos} onVideoSelect={(video) => setSelectVideo(video)} /> */}
                        {/* equivalent to this below */}
                        <VideoList videos={videos} onVideoSelect={setSelectVideo} />
                    </div>
                </div>
            </div>
        </div>
    )

}


export default App;