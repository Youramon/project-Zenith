export interface Member {
    name: string;
    eloRating: number;
    image: string;
    record: number[];
  }

  export interface totally extends Member{
    cost: number;
    faction: faction;
  }
  export enum faction {
    tribal,
    Farmer,
    Medieval,
    Ancient,
    Viking,
    Dynasty,
    Renaissance,
    Pirate,
    Spooky,
    WildWest,
    Legacy,
    FantasyGood,
    FantasyEvil,
    Secret,
    Matchroom
  }
  export let tabs: totally[] = [
   {name: "Clubber", image: "static.wikia.nocookie.net/vsbattles/images/5/50/Red_Clubber.png", cost: 70, faction: faction.tribal, eloRating: 1000, record: [0,0,0]},
   {name: "Protector", image: "static.wikia.nocookie.net/vsbattles/images/1/1c/ProtectorRed.png", cost: 80, faction: faction.tribal, eloRating: 1000, record: [0,0,0]},
   {name: "Spear Thrower", image: "static.wikia.nocookie.net/vsbattles/images/9/93/1637610530660.png", cost: 120, faction: faction.tribal, eloRating: 1000, record: [0,0,0]},
   {name: "Stoner", image: "static.wikia.nocookie.net/vsbattles/images/b/b5/StonerRed.png", cost: 160, faction: faction.tribal, eloRating: 1000, record: [0,0,0]},
   {name: "Bone Mage", image: "i.ytimg.com/vi/nY8oEzjFoBI/maxresdefault.jpg", cost: 300, faction: faction.tribal, eloRating: 1000, record: [0,0,0]},
   {name: "Chieftain", image: "static.wikia.nocookie.net/vsbattles/images/0/06/Red_Chieftain.png", cost: 400, faction: faction.tribal, eloRating: 1000, record: [0,0,0]},
   {name: "Mammoth", image: "static.wikia.nocookie.net/vsbattles/images/c/c0/MammothRed.png", cost: 2200, faction: faction.tribal, eloRating: 1000, record: [0,0,0]},
   {name: "Halfling", image: "th.bing.com/th/id/OIP.ktzZGKP1G1knlzis7D8ykgHaHa?rs=1&pid=ImgDetMain", cost: 50, faction: faction.Farmer, eloRating: 1000, record: [0,0,0]},
   {name: "Farmer", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/9/98/Red_Farmer.png", cost: 80, faction: faction.Farmer, eloRating: 1000, record: [0,0,0]},
   {name: "Hay Baler", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/8/82/Red_Hay_Baler.png", cost: 140, faction: faction.Farmer, eloRating: 1000, record: [0,0,0]},
   {name: "Potionseller", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/3/3e/Red_Potionseller.png", cost: 340, faction: faction.Farmer, eloRating: 1000, record: [0,0,0]},
   {name: "Harvester", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/7/72/Red_Harvester.png", cost: 500, faction: faction.Farmer, eloRating: 1000, record: [0,0,0]},
   {name: "Wheelbarrow", image: "i.ytimg.com/vi/AIu7IgDfUbM/maxresdefault.jpg", cost: 1000, faction: faction.Farmer, eloRating: 1000, record: [0,0,0]},
   {name: "Scarecrow", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/d/db/Red_Scarecrow.png", cost: 1200, faction: faction.Farmer, eloRating: 1000, record: [0,0,0]},
   {name: "Bard + 1 random außer +1", image: "th.bing.com/th/id/R.305a565216c877a701c3eff70fa24e87?rik=%2bSH4uV65ABXy6w&pid=ImgRaw&r=0", cost: 60, faction: faction.Medieval, eloRating: 1000, record: [0,0,0]},
   {name: "Squire", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/5/57/Red_Squire.png", cost: 100, faction: faction.Medieval, eloRating: 1000, record: [0,0,0]},
   {name: "Archer", image: "static.wikia.nocookie.net/vsbattles/images/d/d2/ArcherRed.png", cost: 140, faction: faction.Medieval, eloRating: 1000, record: [0,0,0]},
   {name: "Healer + 1 random", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/b/b2/Red_Healer.png", cost: 180, faction: faction.Medieval, eloRating: 1000, record: [0,0,0]},
   {name: "Knight", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/4/4f/Red_Knight.png/", cost: 650, faction: faction.Medieval, eloRating: 1000, record: [0,0,0]},
   {name: "Catapult", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/b/be/Red_Catapult.png", cost: 1000, faction: faction.Medieval, eloRating: 1000, record: [0,0,0]},
   {name: "The King", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/b/bb/Red_King.png", cost: 1500, faction: faction.Medieval, eloRating: 1000, record: [0,0,0]},
   {name: "Shield Bearer", image: "static.wikia.nocookie.net/vsbattles/images/d/d8/ShieldBearerRed.png", cost:100, faction: faction.Ancient, eloRating: 1000, record: [0,0,0]},
   {name: "Sarissa", image: "static.wikia.nocookie.net/vsbattles/images/7/7f/SarissaRed.png", cost: 120, faction: faction.Ancient, eloRating: 1000, record: [0,0,0]},
   {name: "Hoplite", image: "static.wikia.nocookie.net/vsbattles/images/b/b3/HopiliteRed.png", cost: 180, faction: faction.Ancient, eloRating: 1000, record: [0,0,0]},
   {name: "Snake Archer", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/c/c1/Red_Snake_Archer.png", cost: 300, faction: faction.Ancient, eloRating: 1000, record: [0,0,0]},
   {name: "Ballista", image: "i.ytimg.com/vi/N1Yk0oq12Yg/maxresdefault.jpg", cost: 900, faction: faction.Ancient, eloRating: 1000, record: [0,0,0]},
   {name: "Minotaur", image: "static.wikia.nocookie.net/vsbattles/images/3/3a/MinotaurRed.png", cost: 1600, faction: faction.Ancient, eloRating: 1000, record: [0,0,0]},
   {name: "Zeus", image: "static.wikia.nocookie.net/vsbattles/images/e/e8/ZeusRed.png", cost: 2000, faction: faction.Ancient, eloRating: 1000, record: [0,0,0]},
   {name: "Headbutter", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/2/21/Red_Headbutter.png", cost: 90, faction: faction.Viking, eloRating: 1000, record: [0,0,0]},
   {name: "Ice Archer", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/f/f7/Red_Ice_Archer.png", cost: 160, faction: faction.Viking, eloRating: 1000, record: [0,0,0]},
   {name: "Brawler", image: "i.ytimg.com/vi/JXkUnStj-e0/maxresdefault.jpg", cost: 220, faction: faction.Viking, eloRating: 1000, record: [0,0,0]},
   {name: "Berserker", image: "static.wikia.nocookie.net/vsbattles/images/8/87/Berserker_TABS.png", cost: 250, faction: faction.Viking, eloRating: 1000, record: [0,0,0]},
   {name: "Valkyrie", image: "i.ytimg.com/vi/Qr4Xo4nTjzI/maxresdefault.jpg", cost: 500, faction: faction.Viking, eloRating: 1000, record: [0,0,0]},
   {name: "Longship", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/6/6f/Red_Longship.png", cost: 1000, faction: faction.Viking, eloRating: 1000, record: [0,0,0]},
   {name: "Jarl", image: "i.ytimg.com/vi/MKMjhgWBcyQ/maxresdefault.jpg", cost: 1500, faction: faction.Viking, eloRating: 1000, record: [0,0,0]},
   {name: "Samurai", image: "s1.qwant.com/thumbr/0x380/a/9/9b97fb88eff52b3fcd91ee6984642b015a7da93b772ae903324f82a181665b/latest.jpg?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Ftotally-accurate-battle-simulator%2Fimages%2F6%2F68%2FRed_Samurai.png%2Frevision%2Flatest%3Fcb%3D20201204045541&q=0&b=1&p=0&a=0", cost: 140, faction: faction.Viking, eloRating: 1000, record: [0,0,0]},
   {name: "Firework Archer", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/6/65/Red_Firework_Archer.png", cost: 180, faction: faction.Dynasty, eloRating: 1000, record: [0,0,0]},
   {name: "Monk", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/b/b5/Red_Monk.png", cost: 250, faction: faction.Dynasty, eloRating: 1000, record: [0,0,0]},
   {name: "Ninja", image: "s1.qwant.com/thumbr/0x380/3/9/28eab10d6cce9e14189f06840bee5d96f7a30919b15442bd67e50c0370ab03/maxresdefault.jpg?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F76yLTCxcrJQ%2Fmaxresdefault.jpg&q=0&b=1&p=0&a=0", cost: 500, faction: faction.Dynasty, eloRating: 1000, record: [0,0,0]},
   {name: "Dragon", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/9/95/Red_Dragon.png", cost: 1000, faction: faction.Dynasty, eloRating: 1000, record: [0,0,0]},
   {name: "Hwacha", image: "s1.qwant.com/thumbr/0x380/1/7/526077a515f66e14aa9afa5b7e1d1aec771f46aad2236b7adde9d75e0abb00/maxresdefault.jpg?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FSvrbd9Cf-bw%2Fmaxresdefault.jpg&q=0&b=1&p=0&a=0", cost: 1500, faction: faction.Dynasty, eloRating: 1000, record: [0,0,0]},
  {name: "Monkey King", image: "static.wikia.nocookie.net/totally-accurate-battle-simulator/images/5/5e/Red_Monkey_King.png", cost: 2000, faction: faction.Dynasty, eloRating: 1000, record: [0,0,0]},  
  ]

  export function setTabs(value: totally[]): void{
    tabs = value;
  }
  export let names: string[];
  export function setNames(){
    names = tabs.map(member => member.name);
  }