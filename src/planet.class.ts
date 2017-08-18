import * as BABYLON from 'babylonjs';

import { GameObject } from './game-object.interface';

export class Planet implements GameObject {
	
    private _position: BABYLON.Vector3;
    private _diameter: number;
    private _mesh: BABYLON.Mesh;
    private _material: BABYLON.StandardMaterial;
    private _scene: BABYLON.Scene;

    constructor(position: BABYLON.Vector3, diameter: number, scene: BABYLON.Scene) {
        this._position = position;
        this._diameter = diameter;
        this._scene = scene;
    }

    init(): void {
        this._material = new BABYLON.StandardMaterial("texture1", this._scene);
        const texture: BABYLON.Texture = new BABYLON.Texture(require("./assets/texture/grass.jpg"), this._scene);
        texture.uScale = 10;
        texture.vScale = 10;
        this._material.diffuseTexture = texture;
        // this._material.diffuseTexture.vScale = 5.0;
        this._mesh = BABYLON.MeshBuilder.CreateSphere('sphere1', {segments: 16, diameter: this._diameter}, this._scene);
        this._mesh.position = this._position;
        this._mesh.checkCollisions = true;
        this._mesh.material = this._material;
    }

    update(): void {
        
    }

}