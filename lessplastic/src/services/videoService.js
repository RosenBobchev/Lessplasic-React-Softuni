import remote from './remote'

let videoService = (() => {

    function createVideo(title, description, link) {
        const authorId = sessionStorage.getItem('userId');
        let obj = { title, description, link, authorId };

        return remote.post('appdata', 'videos', 'kinvey', obj)
    }

    function deleteVideo(videoId) {
        const authorId = sessionStorage.getItem('userId');

        const endpoint = `videos?query={"_id":"${videoId}"}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    function getVideo(videoId) {
        const data = {};

        const authorId = sessionStorage.getItem('userId');

        const endpoint = `videos?query={"_id":"${videoId}"}`;

        return remote.get('appdata', endpoint, 'guest', data);
    }

    function getAllVideos() {
        const data = {};

        return remote.get('appdata', 'videos?query={}&sort={"_kmd.lmt": -1}', 'guest', data);
    }

    function getTwoVideos() {
        const data = {};

        return remote.get('appdata', 'videos?query={}&limit=2&sort={"_kmd.lmt": -1}', 'guest', data);
    }

    async function editVideo(title, description, link, videoId) {
        let response = await getVideo(videoId);

        let video = response.data[0];

        video.title = title;
        video.description = description;
        video.link = link;

        const endpoint = `videos/${videoId}`;

        return remote.update('appdata', endpoint, 'kinvey', video);
    }

    function getAllUserEvents() {
        const data = {};

        const authorId = sessionStorage.getItem('userId');

        return remote.get('appdata', `videos?query={"authorId":"${authorId}"}&sort={"_kmd.lmt": -1}`, 'kinvey', data);
    }

    return {
        createVideo,
        deleteVideo,
        getVideo,
        getAllVideos,
        editVideo,
        getAllUserEvents,
        getTwoVideos
    }
})();

export default videoService
