import { PhysicsService } from "@rbxts/services";
import { Service, OnInit } from "@flamework/core";

@Service({})
export class CollisionService implements OnInit {
	onInit() {
		PhysicsService.RegisterCollisionGroup("BoundingBoxes");
		PhysicsService.RegisterCollisionGroup("Characters");

		PhysicsService.CollisionGroupSetCollidable("BoundingBoxes", "Characters", false);
	}
}
