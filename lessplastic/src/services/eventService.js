import remote from './remote'

let eventService = (() => {

    function createEvent(name, description, towns, dateOfEvent, participants, userId) {
        let obj = { name, description, towns, dateOfEvent, participants, userId };

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

        return remote.get('appdata', 'events', 'guest', data);
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
        joinEvent
    }
})();

export default eventService
