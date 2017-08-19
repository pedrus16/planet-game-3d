import * as BABYLON from 'babylonjs';

import { GameObject } from './game-object.interface';

export class Character implements GameObject {

    private _position: BABYLON.Vector3;
    private _mesh: BABYLON.Mesh;
    private _material: BABYLON.StandardMaterial;
    private _scene: BABYLON.Scene;

	constructor(scene: BABYLON.Scene) {
		this._scene = scene;
	}

	init(): void {
        this._material = new BABYLON.StandardMaterial("texture1", this._scene);
        this._mesh = BABYLON.MeshBuilder.CreateBox("box", {size: 2, width: 1, depth: 1}, this._scene);
        // this._mesh = BABYLON.MeshBuilder.CreateSphere("box", {diameterX: 1, diameterY: 2, diameterZ: 1}, this._scene);
        this._mesh.material = this._material;
        this._mesh.position = new BABYLON.Vector3(0, 30, 0);
        this._mesh.physicsImpostor = new BABYLON.PhysicsImpostor(this._mesh, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 1, restitution: 0.9 }, this._scene);
	}

	update(): void {
		this._mesh.physicsImpostor.setLinearVelocity(new BABYLON.Vector3(0, -1, 0));
	}

}