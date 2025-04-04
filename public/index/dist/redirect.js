export default function redirect(username) {
    localStorage.setItem('username', username);
    window.location.href = '../../game/game.html';
}