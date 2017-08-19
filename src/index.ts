require("expose-loader?CANNON!cannon");
import './style.css';

import { Game } from './game.class';


window.addEventListener('DOMContentLoaded', () => {
    let game = new Game('renderCanvas');
    game.createScene();
    game.animate();
});