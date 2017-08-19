import * as BABYLON from 'babylonjs';

import { GameObject } from './game-object.interface';

export class Planet implements GameObject {
	
    private _position: BABYLON.Vector3;
    private _mesh: BABYLON.Mesh;
    private _material: BABYLON.StandardMaterial;
    private _scene: BABYLON.Scene;
    private _diameter: number;
    private _gravity: number;

    constructor(position: BABYLON.Vector3, diameter: number, gravity: number, scene: BABYLON.Scene) {
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
        this._mesh = BABYLON.MeshBuilder.CreateSphere('sphere1', {diameter: this._diameter}, this._scene);
        this._mesh.position = this._position;
        this._mesh.material = this._material;
        this._mesh.physicsImpostor = new BABYLON.PhysicsImpostor(this._mesh, BABYLON.PhysicsImpostor.SphereImpostor, { mass: 0, restitution: 0.9 }, this._scene);
    }

    update(): void {
        
    }

}