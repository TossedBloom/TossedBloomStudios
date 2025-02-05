import video from '@/assets/videos/potatoes/BakedProfile.mp4';
import iconAvif from '@/assets/images/potatoes/BakedIcon.avif';
import iconWebp from '@/assets/images/potatoes/BakedIcon.webp';

export default {
    name: 'Baked Potato',
    icon: {
        avif: iconAvif,
        webp: iconWebp
    },
    video: video,
    description: `
        <p>Baked is an old timer, brimming with wisdom. He tackles tasks strategically and keeps himself out of trouble.</p>
        `,
    detail: `
        <p>
            Baked will roll away from the player if they get too close, but will go head on if there are no escape routes.
        </p>
        <p>
            Baked will also shoot Spring Onions or Butter depending on how far the player is.
            Spring Onions will catch on fire if it hits Hot Potato's Flames.
        </p>

        <p>
            When enraged, Crumbling will never get calmed down by Chip or Crumb because he is forgotten.
            He will, however, become happy again when Mashed take him for a break.
        </p>
    `
}