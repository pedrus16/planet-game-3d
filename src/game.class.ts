import * as BABYLON from 'babylonjs';

import { GameObject } from './game-object.interface';
import { Planet } from './planet.class';
import { Character } from './character.class';

export class Game {
	private _canvas: HTMLCanvasElement;
	private _engine: BABYLON.Engine;
	private _scene: BABYLON.Scene;
	private _camera: BABYLON.FreeCamera;
	private _light: BABYLON.Light;
    private _light2: BABYLON.ShadowLight;
    private _sphere: BABYLON.Mesh;
    private _gameObjects: Array<GameObject>;

	constructor(canvasElement: string) {
		// Create canvas and engine
		this._canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
		this._engine = new BABYLON.Engine(this._canvas, true);
        this._gameObjects = [];
	}



	createScene(): void {
		this._scene = new BABYLON.Scene(this._engine);
        this._scene.collisionsEnabled = true;
        this._scene.enablePhysics();

        this._camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), this._scene);
        this._camera.position.y = 25;
        this._camera.checkCollisions = true;
		this._camera.setTarget(new BABYLON.Vector3(0, 27, 0));
		this._camera.attachControl(this._canvas, false);

        this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), this._scene);
        this._light.intensity = 0.4;

        this.generatePlanets();
        this._gameObjects.push(new Character(this._scene));
        this._gameObjects.forEach((object) => object.init());
	}

    generatePlanets(): void {
        this._gameObjects.push(new Planet(new BABYLON.Vector3(0, 0, 0), 50, 9, this._scene));
        this._gameObjects.push(new Planet(new BABYLON.Vector3(200, 0, 0), 25, 9, this._scene));
        this._gameObjects.push(new Planet(new BABYLON.Vector3(100, 0, 100), 25, 9, this._scene));
        this._gameObjects.push(new Planet(new BABYLON.Vector3(100, 200, 100), 10, 9, this._scene));
    }

	animate(): void {
		this._engine.runRenderLoop(() => {
			this._gameObjects.forEach((object) => object.update());
			this._scene.render();
		});

		window.addEventListener('resize', () => {
			this._engine.resize();
		});
	}
}