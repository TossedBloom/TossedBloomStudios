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

import Minion from './Minion'
import Boss from './Boss'
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
    Minion,
    Boss,
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
