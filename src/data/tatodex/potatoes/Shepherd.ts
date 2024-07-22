import video from '@/assets/videos/potatoes/ShepherdProfile.mp4';
import iconAvif from '@/assets/images/potatoes/ShepherdIcon.avif';
import iconWebp from '@/assets/images/potatoes/ShepherdIcon.webp';

export default {
    name: `Shepherd's Pie`,
    icon: {
        avif: iconAvif,
        webp: iconWebp
    },
    video: video,
    description: `
    <p>
        Shepherd made his way to the top by being daring and ambitious. With everything at his fingertips, he’s always moving fast and never misses a beat. He knows exactly how to take action, always aiming right at his target. Plus, he’s always got surprises up his sleeve (or under his suit) that keep everyone on their toes.
    </p>
    `,
    detail: `
        <p>Shepherd has 4 projectile attacks: Carrots, Peas, Meat and Mixed Stuffings.</p>
        <p>Carrots are his fastest attack and he'll use them more often when players are too close.</p>
        <p>Peas are straightforward. Shooting Peas at where the player is.</p>
        <p>Meat rockets will explode and spawn smaller meat. They are slower but the shrapnels are tricky to avoid. Has a higher chance to be used when players are blocked by obstacles.</p>
        <p>Mixed Stuffings are homing missiles and do not travel in a straight trajectory. Has a higher chance to be used when players are blocked by an obstable.</p>
    `
}