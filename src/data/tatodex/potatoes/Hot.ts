import video from '@/assets/videos/potatoes/HotProfile.mp4';
import iconAvif from '@/assets/images/potatoes/HotIcon.avif';
import iconWebp from '@/assets/images/potatoes/HotIcon.webp';

export default {
    name: 'Hot Potato',
    icon: {
        avif: iconAvif,
        webp: iconWebp
    },
    video: video,
    description: `
        <p>Hot Potato has been around long and his temper is as fiery as his name suggests. With a short fuse, 
        he often feels like he’s about to ignite. Always on the move, he zooms from one task to another, 
        fueled by an intense desire to get things done. Tread carefully — his anger simmers until he’s satisfied. 
        He'll cool down until you provoke him again. </p>
    `,
    detail: `
        <p>Will get angry when he sees the player. After a short delay, he will charge 3 times.</p>
        <p>
            If the player gets out of his line of sight before he calms down, it will cause him to stay angry and charge again the next time he sees the player.
        </p>
        <p>
            Will spawn Flames when charging. Flames will cause burn damage.
        </p>
    `
}