import mediaAvif from '@/assets/images/penguin-fight.avif';
import mediaWebp from '@/assets/images/penguin-fight.webp';

export default {
    title: 'The Penguin Invasion',
    subheader: 'The complete guide to survive a penguin invasion.',
    media: {
        type: 'image',
        url: {
            avif: mediaAvif,
            webp: mediaWebp
        }
    },
    cta: {
        to: 'https://penguins.tossedbloom.com',
        text: 'Visit: The Penguin Invasion',
        blank: true
    },
    style: {
        textColor: '#f0f0f0',
        backgroundColor: '#C14953',
        width: '80%'
    }
}