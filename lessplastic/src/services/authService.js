import remote from './remote'

let authService = (() => {
    function isAuth() {
        return sessionStorage.getItem('authtoken') !== null;
    }

    function saveSession(userData) {
        sessionStorage.setItem('authtoken', userData.data._kmd.authtoken);
        sessionStorage.setItem('username', userData.data.username);
        sessionStorage.setItem('userId', userData.data._id);
    }

    function register (username, password, city, email) {
        let obj = { username, password, city, email };

        return remote.post('user', '', 'basic', obj);
    }

    function login(username, password) {
        let obj = { username, password };

        return remote.post('user', 'login', 'basic', obj)
    }

    function logout() {
        return remote.post('user', '_logout', 'kinvey');
    }

    return {
        isAuth,
        login,
        logout,
        register,
        saveSession,

    }
})();

export default authService
