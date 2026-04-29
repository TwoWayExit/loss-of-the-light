import { waitForAnimationLoaded } from "shared/lib/util";
import { Character } from "./character";

export class AnimationHandler {
	private activeAnimations = new Map<Animation, AnimationTrack>();

	public constructor(private readonly character: Character) {}

	/**
	 * Returns the AnimationTrack from the Animation provided if there is one playing on the character
	 * @param animation - The Animation which was used to animate the character
	 * @returns The AnimationTrack which is playing on the character
	 */
	public getAnimationTrack(animation: Animation) {
		return this.activeAnimations.get(animation);
	}

	/**
	 * Plays an Animation on the character and returns the AnimationTrack
	 * @param animation - The Animation to play
	 * @param args - The arguments to pass into the AnimationTrack.Play() method
	 * @returns The AnimationTrack playing on the character
	 */
	public async playAnimation(animation: Animation, ...args: Parameters<AnimationTrack["Play"]>) {
		const existing = this.activeAnimations.get(animation);

		if (existing) {
			existing.Play(...args);
			return existing;
		}

		try {
			const track = this.character.Humanoid.Animator.LoadAnimation(animation);

			await waitForAnimationLoaded(track);

			// Stop other animations on the same priority
			for (const t of this.character.Humanoid.Animator.GetPlayingAnimationTracks()) {
				if (t.Priority === track.Priority && t.IsPlaying) {
					t.Stop();
				}
			}

			track.Ended.Once(() => this.activeAnimations.delete(animation));
			track.Stopped.Once(() => {
				this.activeAnimations.delete(animation);

				track.Destroy(); // Destroy the track to prevent Ended from firing
			});

			track.Play(...args);

			this.activeAnimations.set(animation, track);

			return track;
		} catch (e) {
			throw `Failed to load Animation! '${e}'`;
		}
	}

	/**
	 * Stops an AnimationTrack playing on the character with the Animation provided
	 * @param animation - The Animation used to find the active AnimationTrack
	 * @param args - The arguments to pass into the AnimationTrack.Stop() method
	 */
	public stopAnimation(animation: Animation, ...args: Parameters<AnimationTrack["Stop"]>) {
		this.activeAnimations.get(animation)?.Stop(...args);
		this.activeAnimations.delete(animation);
	}

	/**
	 * Stops AnimationTracks playing on the character with the list of Animations provided
	 * @param animations - The list of Animations used to find the active AnimationTracks
	 * @param args - The arguments to pass into the AnimationTrack.Stop() method
	 */
	public stopAnimations(animations: Animation[], ...args: Parameters<AnimationTrack["Stop"]>) {
		for (const animation of animations) {
			this.stopAnimation(animation, ...args);
		}
	}

	/**
	 * Stops all currently playing animations
	 * @param args - The arguments to pass into the AnimationTrack.Stop() method
	 */
	public stopAllAnimations(...args: Parameters<AnimationTrack["Stop"]>) {
		this.activeAnimations.forEach((track) => track.Stop(...args));
		this.activeAnimations.clear();
	}
}
