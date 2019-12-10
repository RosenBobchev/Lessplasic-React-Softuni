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

    function getUserRoles(userId) {
       return remote.get('user', `${userId}/roles`, 'master');
    }

    function setRole(userData) {
        remote.update('user', `${userData.data._id}/roles/9b497572-4283-4cd5-9f20-0f1adb18d059`, 'master');
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
        setRole,
        getUserRoles
    }
})();

export default authService
