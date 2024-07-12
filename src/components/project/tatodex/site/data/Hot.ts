import video from '@/assets/videos/potatoes/HotProfile.mp4';
import icon from '@/assets/images/potatoes/HotIcon.png';

export default {
    name: 'Hot Potato',
    icon: icon,
    video: video,
    description: `
        <p>"DON'T MAKE YOUR PROBLEM, MY PROBLEM". </p>
        <p>
            Hot Potato is the other old timer in the building, except he's short tempered. It looks like he's burning the whole world.
            You can't blame him though. Hot Potato is always passed around, jumping from one place to another.
        </p>
        <p>
            All that experience though has made him extremely fast and efficient. Good at covering the bases of others and make them excel if they know how to work with him.
        </p>
        <p>
            He will stay angry at you until he's satisfied. But he always calms back down... until you cause him trouble again.
        </p>
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