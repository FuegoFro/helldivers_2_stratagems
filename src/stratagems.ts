export interface Stratagem {
  name: string
  code: string
  callInTime?: string
  uses?: string
  cooldownTime?: string
}

export interface StratagemSection {
  title: string
  entries: Stratagem[]
}

const STRATAGEMS: StratagemSection[] = [
  {
    title: 'Stratagem Codes: Patriotic Administration Centre',
    entries: [
      {
        name: 'Machine Gun',
        code: '▼◄▼▲►',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
      {
        name: 'Anti-Material Rifle',
        code: '▼◄►▲▼',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
      {
        name: 'Stalwart',
        code: '▼◄▼▲▲◄',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
      {
        name: 'Expendable Anti-Tank',
        code: '▼▼◄▲►',
        callInTime: 'Two seconds',
        uses: 'Unlimited',
        cooldownTime: '70 seconds',
      },
      {
        name: 'Recoilless Rifle',
        code: '▼◄►►◄',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
      {
        name: 'Flamethrower',
        code: '▼◄▲▼▲',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
      {
        name: 'Autocannon',
        code: '▼►◄▼▼▲▲►',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
      {
        name: 'Railgun',
        code: '▼►◄▼▼▲◄▼►',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
      {
        name: 'Spear',
        code: '▼▼▲▼▼',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
    ],
  },
  {
    title: 'Stratagem Codes: Orbital Cannons',
    entries: [
      {
        name: 'Orbital Gatling Barrage',
        code: '►▼◄▲▲',
        callInTime: 'Two seconds',
        uses: 'Unlimited',
        cooldownTime: '80 seconds',
      },
      {
        name: 'Orbital Airburst Strike',
        code: '►►►',
        callInTime: 'Two seconds',
        uses: 'Unlimited',
        cooldownTime: '120 seconds',
      },
      {
        name: 'Orbital 120MM HE Barrage',
        code: '►▼▼◄▼►▼▼',
        callInTime: 'Five seconds',
        uses: 'Unlimited',
        cooldownTime: '240 seconds',
      },
      {
        name: 'Orbital 380MM HE Barrage',
        code: '►▼▼▲▲◄▼▼▼',
        callInTime: 'Six seconds',
        uses: 'Unlimited',
        cooldownTime: '240 seconds',
      },
      {
        name: 'Orbital Walking Barrage',
        code: '►▼►▼►▼',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '240 seconds',
      },
      {
        name: 'Orbital Laser Strike',
        code: '►▲◄▲►◄',
        callInTime: 'Two seconds',
        uses: 'Three',
        cooldownTime: '300 seconds',
      },
      {
        name: 'Orbital Railcannon Strike',
        code: '►▼▲▼◄',
        callInTime: 'One second',
        uses: 'Unlimited',
        cooldownTime: '210 seconds',
      },
    ],
  },
  {
    title: 'Stratagem Codes: Hangar',
    entries: [
      {
        name: 'Eagle Strafing Run',
        code: '▲►►',
        callInTime: 'Immediate',
        uses: 'Three',
        cooldownTime: '15 seconds',
      },
      {
        name: 'Eagle Airstrike',
        code: '▲►▼►',
        callInTime: 'Immediate',
        uses: 'Two',
        cooldownTime: '15 seconds',
      },
      {
        name: 'Eagle Cluster Bomb',
        code: '▲►▼▼►▼',
        callInTime: 'Immediate',
        uses: 'Four',
        cooldownTime: '15 seconds',
      },
      {
        name: 'Eagle Napalm Airstrike',
        code: '▲►▼▲',
        callInTime: 'Immediate',
        uses: 'Two',
        cooldownTime: '15 seconds',
      },
      {
        name: 'Jump Pack',
        code: '▼▲▲▼▲',
        callInTime: 'Five seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
      {
        name: 'Eagle Smoke Strike',
        code: '▲►▲▼',
        callInTime: 'Immediate',
        uses: 'Two',
        cooldownTime: '15 seconds',
      },
      {
        name: 'Eagle 110MM Rocket Pods',
        code: '▲▼▲◄',
        callInTime: 'Immediate',
        uses: 'Two',
        cooldownTime: '15 seconds',
      },
      {
        name: 'Eagle 500KG Bomb',
        code: '▲◄▼▼▼',
        callInTime: 'Immediate',
        uses: 'One',
        cooldownTime: 'N/A',
      },
    ],
  },
  {
    title: 'Stratagem Codes: Bridge',
    entries: [
      {
        name: 'Orbital Precision Strike',
        code: '►►▲',
        callInTime: 'Four seconds',
        uses: 'Unlimited',
        cooldownTime: '100 seconds',
      },
      {
        name: 'Orbital Gas Strike',
        code: '►►▼►',
        callInTime: 'Two seconds',
        uses: 'Unlimited',
        cooldownTime: '75 seconds',
      },
      {
        name: 'Orbital EMS Strike',
        code: '►►◄▼',
        callInTime: 'Two seconds',
        uses: 'Unlimited',
        cooldownTime: '75 seconds',
      },
      {
        name: 'Orbital Smoke Strike',
        code: '►►▼▲',
        callInTime: 'Two seconds',
        uses: 'Unlimited',
        cooldownTime: '100 seconds',
      },
      {
        name: 'HMG Emplacement',
        code: '▲▼◄►►◄',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '180 seconds',
      },
      {
        name: 'Shield Generator Relay',
        code: '▼▲◄►◄▼',
        callInTime: 'Immediate',
        uses: 'Unlimited',
        cooldownTime: '90 seconds',
      },
      {
        name: 'Tesla Tower',
        code: '▼▲►▲◄►',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '150 seconds',
      },
    ],
  },
  {
    title: 'Stratagem Codes: Engineering Bay',
    entries: [
      {
        name: 'Anti-Personnel Minefield',
        code: '▼◄▼▲►',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '180 seconds',
      },
      {
        name: 'Supply Pack',
        code: '▼◄▼▲▲▼',
        callInTime: 'Five seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
      {
        name: 'Grenade Launcher',
        code: '▼◄▼▲◄▼▼',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
      {
        name: 'Laser Cannon',
        code: '▼◄▼▲◄',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
      {
        name: 'Incendiary Mines',
        code: '▼◄◄▼',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '180 seconds',
      },
      {
        name: '“Guard Dog” Rover',
        code: '▼◄▼▲◄▼▼',
        callInTime: 'Five seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
      {
        name: 'Ballistic Shield Backpack',
        code: '▼◄▲▲►',
        callInTime: 'Five seconds',
        uses: 'Unlimited',
        cooldownTime: '300 seconds',
      },
      {
        name: 'Arc Thrower',
        code: '▼►▲◄▼',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
      {
        name: 'Shield Generator Pack',
        code: '▼▲◄▼►►',
        callInTime: 'Five seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
    ],
  },
  {
    title: 'Stratagem Codes: Robotics Workshop',
    entries: [
      {
        name: 'Machine Gun Sentry',
        code: '▼▲►▼►▼▲',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '180 seconds',
      },
      {
        name: 'Gatling Sentry',
        code: '▼▲►◄▼',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '180 seconds',
      },
      {
        name: 'Mortar Sentry',
        code: '▼▲►►▼',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '180 seconds',
      },
      {
        name: '“Guard Dog”',
        code: '▼▲◄▲►▼',
        callInTime: 'Five seconds',
        uses: 'Unlimited',
        cooldownTime: '480 seconds',
      },
      {
        name: 'Autocannon Sentry',
        code: '▼▲►▲◄▲',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '180 seconds',
      },
      {
        name: 'Rocket Sentry',
        code: '▼▲►►◄',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '180 seconds',
      },
      {
        name: 'EMS Mortar Sentry',
        code: '▼▼▲▲◄',
        callInTime: 'Three seconds',
        uses: 'Unlimited',
        cooldownTime: '180 seconds',
      },
    ],
  },
  {
    title: 'Mission Stratagems',
    entries: [
      {
        name: 'SOS Beacon',
        code: '▲▼►▲',
      },
      {
        name: 'Super Earth Flag',
        code: '▼▲▼▲',
      },
      {
        name: 'Upload Data',
        code: '◄►▲▲▲',
      },
      {
        name: 'Hellbomb',
        code: '▼▲◄▼▲►▼▲',
      },
    ],
  },
]

export { STRATAGEMS }
