import video from '@/assets/videos/potatoes/TornadoProfile.mp4';
import icon from '@/assets/images/potatoes/TornadoIcon.png';

export default {
    name: 'Tornado Potato',
    icon: icon,
    video: video,
    description: `
        <p>
            Tornado is there to do his job and does not like being bothered. He will use every method in the book to keep you far away, afraid of more work to come.
            If someone somehow manages to dodge everything and get up in his business, he will try to disuade them in less than pleasant ways.
        </p>
        <p>Office politics with other potatoes might cause drama.</p>
    `,
    detail: `
        <p>Tornado Potato will spawn Tornados when they are far away from the player</p>
        <p>If the player gets too close, Tornado Potato will dig underground and track the player in an attempt to hit them.</p>
        <p>If a Tornado touches a Salt, it has a high chance of spraying more Salt.</p>
    `
}