export interface Member {
    name: string;
    eloRating: number;
    image: string;
  }

  export interface totally extends Member{
    cost: number;
    faction: faction;
  }
  enum faction {
    tribal
  }
  export let tabs: totally[] = [
   {name: "Clubber", image: "https://static.wikia.nocookie.net/vsbattles/images/5/50/Red_Clubber.png", cost: 70, faction: faction.tribal, eloRating: 1000},
   {name: "Protector", image: "https://static.wikia.nocookie.net/vsbattles/images/1/1c/ProtectorRed.png", cost: 80, faction: faction.tribal, eloRating: 1000},
   {name: "Spear Thrower", image: "https://static.wikia.nocookie.net/vsbattles/images/9/93/1637610530660.png", cost: 120, faction: faction.tribal, eloRating: 1000},
   {name: "Stoner", image: "https://static.wikia.nocookie.net/vsbattles/images/b/b5/StonerRed.png", cost: 160, faction: faction.tribal, eloRating: 1000},
   {name: "Bone Mage", image: "https://i.ytimg.com/vi/nY8oEzjFoBI/maxresdefault.jpg", cost: 300, faction: faction.tribal, eloRating: 1000},
  ]

  export function setTabs(value: totally[]): void{
    tabs = value;
  }