import mediaAvif from '@/assets/images/tigreal.avif';
import mediaWebp from '@/assets/images/tigreal.webp';

export default {
    title: 'Mobile Legends: Tank Tank',
    subheader: 'A tool to assist newer players pick the right hero. (Decommissioned).',
    media: {
        type: 'image',
        url: {
            avif: mediaAvif,
            webp: mediaWebp
        }
    },
    cta: {
        to: 'https://mltt-dev.netlify.app/',
        text: 'Visit: Old MLTT Demo',
        blank: true
    },
    style: {
        textColor: '#f0f0f0',
        backgroundColor: 'rgb(30, 33, 57)'
    }
}