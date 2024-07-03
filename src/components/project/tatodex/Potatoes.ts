type Potato = {
    name: string
    video?: string
    description?: string
    detail: string
}

export const potatoes: Potato[] = [
    {
        name: `Potato Worker`,
        description: `<p>Just a Potato. A normal grunt amongst all the other Potatoes. Get's "movtivated" when his boss is around.</p>`,
        detail: '<p>Walks towards the player slowly. Moves faster his boss is around.</p>'
    },

    {
        name: `Potato Boss`,
        description: `<p>Also just a Potato but with the added stress of having to manage all his slacking workers.</p>`,
        detail: '<p>Walks towards the player slowly. Makes Workers around him move faster.</p>'
    },

    {
        name: `Fries`,
        description: `
            <p>
                Years of working has got him where he is today. Wearing many hats and filling many roles.
                But all those years of experience has made him salty, which might wear off to others.
            </p>
            <p>
                A force to reckon with when he's at his peak, but deep inside he just wants to be at home and laze around.
            </p>
        `,
        detail: '<p>Will charge towards the player and spray salt in a radius. Hitting most obstacles along the way will stun him and spawn a Fry.</p>'
    },

    {
        name: `Fry`,
        description: `<p>A fry.</p>`,
        detail: `<p>Does not move much unless a player is around. Will walk towards the player.</p>`
    },

    {
        name: `Mashed Potato`,
        description: `
            <p>Mashed is that one eccentric manager you see in the office. Always smiling and happy, looking all stress free.</p>
            <p>You never really see him do work but he's always gliding in and out of the office with a smile so he must be capable... right?</p>\
        `,
        detail: `Will melt and slide towards the player. Upon reaching his destination, he will shoot out Mashed Slimes. 
        Mashed Slimes will spawn Mashed Puddle and slow the player down.`
    },

    {
        name: 'Chip',
        description: `
            <p>
                Chip is your busy boss. No time for bullshit. Promotes a very goal-focused environment within his team.
                But don't get him mad because he'll go all out to get you.
            </p>

            <p>
                Chip is good at reminding his subordinates of their KPI and get them working again.
            </p>
        `,
        detail: `
            <p>
                Does not attack the player unless enraged. When enraged, Chip will walk faster and hit harder.
            </p>
            <p>
                When not enraged, Chip will spawn up to 2 Crumbs at random. He will also sometimes take a pause, which calms down any of his enraged Crumbs.
            </p>
        `
    },

    {
        name: 'Crumb',
        description: `
            <p>Where there are Chips, there are Crumbs.</p>
            <p>Chip's goal-oriented mindset has rubbed off onto Crumb. He does not get distracted. 
            But being so afraid of his Boss's temper, he will get rid of any obstacles if it causes his Boss trouble.
            </p> 
        `,
        detail: `
            <p>Just like Chip, he will not attack the player unless enraged. Crumb will spawn up to 2 Crumblings at random, but will spawn more if they go astray.</p>
            <p>Crumb will get enraged when him or his direct supervisor (Chip) gets attacked.</p> 
        `
    },

    {
        name: 'Crumbling',
        description: `
            <p>Crumblings follow their bosses, who follow their boss. Crumblings have no idea what's going on. They're like interns just following for the ride.</p>
            <p>Crumblings are just like the higher up in their teams but sometimes get lost in the details. They are never called during team meetings. They get distracted by other managers.
            </p> 
        `,
        detail: `
            <p>Does not attack player when enraged.</p>
            <p>
                Crumbling will get enraged when him or his direct supervisor (Crumb) gets attacked.
                Will also get enraged when his direct supervisor (Crumb) is enraged.
            </p>

            <p>
                When enraged, Crumbling will never get calmed down by Chip or Crumb because he is forgotten.
                He will, however, become happy again when Mashed take him for a break.
            </p>
        `
    },

    {
        name: 'Baked Potato',
        description: `
            <p>Baked is an old timer. He knows how to do many things, even the most obscure tasks; and he does them well. He's also aware of all the company's policies and will avoid trouble; playing by the book.</p>
            <p>He's the wise grandfather-figure you admire in the office.</p>
            `,
        detail: `
            <p>
                Baked will roll away from the player if they get too close, but will go head on if there are no escape routes.
            </p>
            <p>
                Baked will also shoot Spring Onions or Butter depending on how far the player is.
                Spring Onions will catch on fire if it hits Hot Potato's Flames.
            </p>

            <p>
                When enraged, Crumbling will never get calmed down by Chip or Crumb because he is forgotten.
                He will, however, become happy again when Mashed take him for a break.
            </p>
        `
    },

    {
        name: 'Hot Potato',
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
    },

    {
        name: 'Tornado Potato',
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
    },

    {
        name: `Shepherd's Pie`,
        description: `
            <p>Being very high up in the ladder, Shepherd has no fears. Shepherd has the world at his disposal.</p>
            <p>Never slowing down for anything, Shepherd wants to succeed and is always working forward.</p>
        `,
        detail: `
            <p>Shepherd has 4 projectile attacks: Carrots, Peas, Meat and Mixed Stuffings.</p>
            <p>Carrots are his fastest attack and he'll use them more often when players are too close.</p>
            <p>Peas are straightforward. Shooting Peas at where the player is.</p>
            <p>Meat rockets will explode and spawn smaller meat. They are slower but the shrapnels are tricky to avoid. Has a higher chance to be used when players are blocked by obstacles.</p>
            <p>Mixed Stuffings are homing missiles and do not travel in a straight trajectory. Has a higher chance to be used when players are blocked by an obstable.</p>
        `
    }
]