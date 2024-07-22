import video from '@/assets/videos/potatoes/ShepherdProfile.mp4';
import icon from '@/assets/images/potatoes/ShepherdIcon.avif';

export default {
    name: `Shepherd's Pie`,
    icon: icon,
    video: video,
    description: `
    <p>
        Fearless and ambitious, Shepherd is a show-stopper at the top of the ladder. 
        With the world at his disposal, he maintains an unyielding pace, always pushing forward and never misses. 
        Plus, he always has surprises up his sleeve, keeping everyone on their toes.
    </p>
    <p>An unstoppable visionary.</p>
    `,
    detail: `
        <p>Shepherd has 4 projectile attacks: Carrots, Peas, Meat and Mixed Stuffings.</p>
        <p>Carrots are his fastest attack and he'll use them more often when players are too close.</p>
        <p>Peas are straightforward. Shooting Peas at where the player is.</p>
        <p>Meat rockets will explode and spawn smaller meat. They are slower but the shrapnels are tricky to avoid. Has a higher chance to be used when players are blocked by obstacles.</p>
        <p>Mixed Stuffings are homing missiles and do not travel in a straight trajectory. Has a higher chance to be used when players are blocked by an obstable.</p>
    `
}