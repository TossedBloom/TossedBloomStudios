import video from '@/assets/videos/potatoes/FryProfile.mp4';
import iconAvif from '@/assets/images/potatoes/FryIcon.avif';
import iconWebp from '@/assets/images/potatoes/FryIcon.webp';

export default {
    name: `Fry`,
    icon: {
        avif: iconAvif,
        webp: iconWebp
    },
    video: video,
    description: `<p>A fry.</p>`,
    detail: `<p>Does not move much unless a player is around. Will walk towards the player.</p>`
}