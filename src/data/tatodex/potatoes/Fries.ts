import video from '@/assets/videos/potatoes/FriesProfile.mp4';
import iconAvif from '@/assets/images/potatoes/FriesIcon.avif';
import iconWebp from '@/assets/images/potatoes/FriesIcon.webp';

export default {
    name: `Fries`,
    icon: {
        avif: iconAvif,
        webp: iconWebp
    },
    video: video,
    description: `
        <p>
            Years of working have made him really experienced and good at lots of things. But all that experience has made him a bit salty... So you better not make him mad.
        </p>
        <p>
           A multi-hat powerhouse, but deep down, he just wants to chill out and be at home.
        </p>
    `,
    detail: '<p>Will charge towards the player and spray salt in a radius. Hitting most obstacles along the way will stun him and spawn a Fry.</p>'
}