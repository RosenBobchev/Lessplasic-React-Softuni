import remote from './remote'

let eventService = (() => {

    function createEvent(name, description, towns, dateOfEvent, participants, authorId) {
        let obj = { name, description, towns, dateOfEvent, participants, authorId };

        return remote.post('appdata', 'events', 'kinvey', obj)
    }

    function deleteEvent(eventId) {
        const authorId = sessionStorage.getItem('userId');

        const endpoint = `events?query={"_id":"${eventId}"}`;

        return remote.remove('appdata', endpoint, 'kinvey');
    }

    function getEvent(eventId) {
        const data = {};

        const authorId = sessionStorage.getItem('userId');

        const endpoint = `events?query={"_id":"${eventId}"}`;

        return remote.get('appdata', endpoint, 'guest', data);
    }

    function getAllEvents() {
        const data = {};

        return remote.get('appdata', 'events?query={}&sort={"_kmd.lmt": -1}', 'guest', data);
    }

    function getTwoEvents() {
        const data = {};

        return remote.get('appdata', 'events?query={}&limit=2&sort={"_kmd.lmt": -1}', 'guest', data);
    }

    function getAllUserEvents() {
        const data = {};

        const authorId = sessionStorage.getItem('userId');

        return remote.get('appdata', `events?query={"authorId":"${authorId}"}&sort={"_kmd.lmt": -1}`, 'kinvey', data);
    }

    async function joinEvent(eventId) {
        const data = {};
        let response = await getEvent(eventId);
        let event = response.data[0];

        const userId = sessionStorage.getItem('userId');

        event.participants.push(userId);

        const endpoint = `events/${eventId}`;

        return remote.update('appdata', endpoint, 'kinvey', event);
    }

    async function editEvent(name, description, towns, dateOfEvent, eventId) {
        let response = await getEvent(eventId);

        let event = response.data[0];

        event.name = name;
        event.description = description;
        event.towns = towns;
        event.dateOfEvent = dateOfEvent;

        const endpoint = `events/${eventId}`;

        return remote.update('appdata', endpoint, 'kinvey', event);
    }

    return {
        createEvent,
        deleteEvent,
        getEvent,
        getAllEvents,
        editEvent,
        joinEvent,
        getAllUserEvents,
        getTwoEvents
    }
})();

export default eventService
