import remote from './remote'

let pollService = (() => {

    function createPoll(question, firstAnswer, secondAnswer, thirdAnswer, authorId) {
        let firstAnswerVotes = 0;
        let secondAnswerVotes = 0;
        let thirdAnswerVotes = 0;

        let obj = { question, firstAnswer, secondAnswer, thirdAnswer, firstAnswerVotes, secondAnswerVotes, thirdAnswerVotes, authorId };

        return remote.post('appdata', 'polls', 'kinvey', obj)
    }

    function deletePoll(pollId) {
        const authorId = sessionStorage.getItem('userId');

        const endpoint = `polls?query={"_id":"${pollId}"}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    function getPoll(pollId) {
        const data = {};

        const authorId = sessionStorage.getItem('userId');

        const endpoint = `polls?query={"_id":"${pollId}"}`;

        return remote.get('appdata', endpoint, 'guest', data);
    }

    function getAllPolls() {
        const data = {};

        return remote.get('appdata', 'polls', 'guest', data);
    }

    async function vote(pollId, answer) {
        const data = {};
        let response = await getPoll(pollId);
        let poll = response.data[0];

        const userId = sessionStorage.getItem('userId');

        if (poll.firstAnswer === answer) {
            poll.firstAnswerVotes += 1;
        } else if (poll.secondAnswer === answer) {
            poll.secondAnswerVotes += 1;
        } else {
            poll.thirdAnswerVotes += 1;
        }

        const endpoint = `polls/${pollId}`;

        return remote.update('appdata', endpoint, 'kinvey', poll);
    }

    async function editPoll(question, firstAnswer, secondAnswer, thirdAnswer, pollId) {
        let response = await getPoll(pollId);

        let poll = response.data[0];

        poll.question = question;
        poll.firstAnswer = firstAnswer;
        poll.secondAnswer = secondAnswer;
        poll.thirdAnswer = thirdAnswer;

        const endpoint = `polls/${pollId}`;

        return remote.update('appdata', endpoint, 'kinvey', poll);
    }

    return {
        createPoll,
        deletePoll,
        getPoll,
        getAllPolls,
        editPoll,
        vote
    }
})();

export default pollService
