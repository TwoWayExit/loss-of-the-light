import { PhysicsService } from "@rbxts/services";
import { Service, OnInit } from "@flamework/core";

@Service({})
export class CollisionService implements OnInit {
	onInit() {
		PhysicsService.RegisterCollisionGroup("Viewmodels");
		PhysicsService.RegisterCollisionGroup("BoundingBoxes");
		PhysicsService.RegisterCollisionGroup("Characters");

		PhysicsService.CollisionGroupSetCollidable("Viewmodels", "Characters", false);
		PhysicsService.CollisionGroupSetCollidable("BoundingBoxes", "Characters", false);
		PhysicsService.CollisionGroupSetCollidable("Viewmodels", "BoundingBoxes", false);
	}
}
