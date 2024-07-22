import video from '@/assets/videos/potatoes/MashedProfile.mp4';
import iconAvif from '@/assets/images/potatoes/MashedIcon.avif';
import iconWebp from '@/assets/images/potatoes/MashedIcon.webp';

export default {
    name: `Mashed Potato`,
    icon: {
        avif: iconAvif,
        webp: iconWebp
    },
    video: video,
    description: `
        <p>
            Mashed is the quirky, funky manager you see around the office. He’s always gliding in and out with a big smile, but you hardly ever see him actually working, which makes you wonder what he's really good at. 
            Maybe he's superb at making jokes, because the Crumblings seem to enjoy his company more than their own supervisors. 
        </p>
    `,
    detail: `Will melt and slide towards the player. Upon reaching his destination, he will shoot out Mashed Slimes. 
    Mashed Slimes will spawn Mashed Puddle and slow the player down.`
}