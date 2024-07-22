import mediaAvif from '@/assets/images/potato-cop.avif';
import mediaWebp from '@/assets/images/potato-cop.webp';

export default {
    title: 'PotatoDex',
    subheader: 'A glossary for all things Potato Cop.',
    media: {
        type: 'image',
        url: {
            avif: mediaAvif,
            webp: mediaWebp
        }
    },
    cta: {
        to: '/potatodex',
        text: 'Visit: PotatoDex',
        blank: false
    },
    style: {
        textColor: '#1a1927',
        backgroundColor: '#F5CB5C'
    }
}