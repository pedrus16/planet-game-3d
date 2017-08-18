import * as BABYLON from 'babylonjs';

import { GameObject } from './game-object.interface';

export class Planet implements GameObject {
	
    private _position: BABYLON.Vector3;
    private _diameter: number;
    private _mesh: BABYLON.Mesh;
    private _scene: BABYLON.Scene;

    constructor(position: BABYLON.Vector3, diameter: number, scene: BABYLON.Scene) {
        this._position = position;
        this._diameter = diameter;
        this._scene = scene;
    }

    init(): void {
        this._mesh = BABYLON.MeshBuilder.CreateSphere('sphere1', {segments: 16, diameter: this._diameter}, this._scene);
        this._mesh.position = this._position;
        this._mesh.checkCollisions = true;
    }

    update(): void {
        
    }

}