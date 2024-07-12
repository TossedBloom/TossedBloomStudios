import bakedIcon from '@/assets/images/potatoes/Baked.png';
type Potato = {
    name: string
    icon?: string
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
import Baked from './Baked';
import Hot from './Hot';
import Tornado from './Tornado';
import Shepherd from './Shepherd';


export const potatoes: Potato[] = [
    Fries,
    Fry,
    Mashed,
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