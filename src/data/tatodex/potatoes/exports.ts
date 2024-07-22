type Potato = {
    name: string
    icon?: {
        avif: string,
        webp: string
    }
    video?: string
    description?: string
    detail: string
}

/**
 * Worker
 * Boss
 * Fries
 * Fry
 * Mashed
 * Chip
 * Crumb
 * Crumbling
 * Baked
 * Hot
 * Tornado
 * Shepherd
 */
import Fries from './Fries';
import Fry from './Fry';
import Mashed from './Mashed';
import Chip from './Chip';
import Crumb from './Crumb';
import Crumbling from './Crumbling';
import Baked from './Baked';
import Hot from './Hot';
import Tornado from './Tornado';
import Shepherd from './Shepherd';


export const potatoes: Potato[] = [
    Fries,
    Fry,
    Mashed,
    Chip,
    Crumb,
    Crumbling,
    Baked,
    Hot,
    Tornado,
    Shepherd
]

// export const potatoes: Potato[] = [
//     {
//         name: `Potato Worker`,
//         description: `<p>Just a Potato. A normal grunt amongst all the other Potatoes. Get's "movtivated" when his boss is around.</p>`,
//         detail: '<p>Walks towards the player slowly. Moves faster his boss is around.</p>'
//     },

//     {
//         name: `Potato Boss`,
//         description: `<p>Also just a Potato but with the added stress of having to manage all his slacking workers.</p>`,
//         detail: '<p>Walks towards the player slowly. Makes Workers around him move faster.</p>'
//     },

//     {
//         name: 'Chip',
//         description: `
//             <p>
//                 Chip is your busy boss. No time for bullshit. Promotes a very goal-focused environment within his team.
//                 But don't get him mad because he'll go all out to get you.
//             </p>

//             <p>
//                 Chip is good at reminding his subordinates of their KPI and get them working again.
//             </p>
//         `,
//         detail: `
//             <p>
//                 Does not attack the player unless enraged. When enraged, Chip will walk faster and hit harder.
//             </p>
//             <p>
//                 When not enraged, Chip will spawn up to 2 Crumbs at random. He will also sometimes take a pause, which calms down any of his enraged Crumbs.
//             </p>
//         `
//     },

//     {
//         name: 'Crumb',
//         description: `
//             <p>Where there are Chips, there are Crumbs.</p>
//             <p>Chip's goal-oriented mindset has rubbed off onto Crumb. He does not get distracted. 
//             But being so afraid of his Boss's temper, he will get rid of any obstacles if it causes his Boss trouble.
//             </p> 
//         `,
//         detail: `
//             <p>Just like Chip, he will not attack the player unless enraged. Crumb will spawn up to 2 Crumblings at random, but will spawn more if they go astray.</p>
//             <p>Crumb will get enraged when him or his direct supervisor (Chip) gets attacked.</p> 
//         `
//     },

//     {
//         name: 'Crumbling',
//         description: `
//             <p>Crumblings follow their bosses, who follow their boss. Crumblings have no idea what's going on. They're like interns just following for the ride.</p>
//             <p>Crumblings are just like the higher up in their teams but sometimes get lost in the details. They are never called during team meetings. They get distracted by other managers.
//             </p> 
//         `,
//         detail: `
//             <p>Does not attack player when enraged.</p>
//             <p>
//                 Crumbling will get enraged when him or his direct supervisor (Crumb) gets attacked.
//                 Will also get enraged when his direct supervisor (Crumb) is enraged.
//             </p>

//             <p>
//                 When enraged, Crumbling will never get calmed down by Chip or Crumb because he is forgotten.
//                 He will, however, become happy again when Mashed take him for a break.
//             </p>
//         `
//     },
// ]
// Baked Potato:
// Brimming with wisdom, Baked knows how to do many things. Restoring old office equipment? Event planning? Taking care of the office's dying plants? Name it, and you got it. He knows the policies and plays by the book, embodying the wise grandfather figure we all admire. 

// After all, he is just a boomer.
// -

// Fries:
// Years of working have seasoned him with experience, shaping him into someone who wears many hats and fills various roles. While his salty demeanor can be off-putting to some, it reflects his resilience. A force to reckon with at his peak, deep down he’s just a fresh soul wanting to be at home and laze around.


// Saltiness aside, he knows how to get the job done.
// -

// Hot Potato:
// Hot Potato has been around long and his temper is as fiery as his name suggests. With a short fuse, he often feels like he’s about to ignite. Always on the move, he zooms from one task to another, fueled by an intense desire to get things done. Tread carefully — his anger simmers until he’s satisfied. He'll cool down until you provoke him again.

// What a burnout potential...
// -

// Mashed Potato:
// Mashed is the funky idiosyncratic  manager you encounter in the office. You'll always catch him gliding in and out with a smiley demeanor... But you rarely see him actually working, leading you to wonder about his true capabilities. His charm and unpredictability make him an interesting mystery at work.

// Does he have an aura of competence, or does he even have an aura at all?
// -

// Shepherd Pie:
// Fearless and ambitious, Shepherd is a show-stopper at the top of the ladder. With the world at his disposal, he maintains an unyielding pace, always pushing forward and never misses. Plus, he always has surprises up his sleeve, keeping everyone on their toes.

// An unstoppable visionary.
// -

// Tornado Potato:
// Hyperfocused and fiercely territorial, Tornado employs clever strategies to keep distractions at bay. He often uses manipulative tactics to deter anyone who intrudes on his space. His avoidant nature makes him prefer solitude. Trigger him, and he may unleash a whirlwind of drama that shakes up the office dynamics.

// As chaos spirals, calmness disappears...
// -

// Minion Potato:
// A quintessential normal worker, dedicated and reliable. He listens intently to his boss, always following instructions without question. Routine-oriented, he adheres to a specific schedule that helps him stay on track. Like many others in his position, he has potential, but he needs to find the confidence to unlock it.

// I listen, I learn, I advance.
// -

// Potato Boss:
// Boss is a natural-born leader who knows operations like the back of his hand. Certified in forklift driving, inventory packing, and barcode scanning (with a wall of certs), he's the logistics wizard everyone relies on. His hands-on know-how has built a team that listens and follows without hesitation.

// Leading the pack with logistics knack.
// -

// Chip:
// Chip only wants to excel in his work. Just... try to not get in his way. He hates it when he is disturb. If he loses track of what he needs to do, he will throw a hissy fit; and his devoted followers will not be afraid to show displeasure at anyone who interferes with their bosses' duties.

// Onwards! Unless you make a mess out of nothing.
// -

// Crumbs:
// Crumb exists in a perpetual limbo between Chip and those beneath him. While he mirrors Chip's relentless, goal-driven mindset, he remains more of devoted follower than a leader. In Chip's absence, Crumb steps into a quasi-leadership role, growing the team with dedication and precision.

// All good things must crumb to an end...
// -

// Crumblings:
// Just like every devoted cult follower, Crumblings are loyal to their leaders, and will follow any blindly. Heck, they can even get distracted by them. Despite their small size, they will never shut up; vocalising their undying support and fiercely protecting their leaders at any sign of threat.


// Size doesn't matter, loyalty does.
// -
