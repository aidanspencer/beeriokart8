var tracks = [
    'Mushroom Cup: Mario Kart Stadium',
    'Mushroom Cup: Water Park',
    'Mushroom Cup: Sweet Sweet Canyon',
    'Mushroom Cup: Thwomp Ruins',

    'Flower Cup: Mario Circuit',
    'Flower Cup: Toad Harbor',
    'Flower Cup: Twisted Mansion', 
    'Flower Cup: Shy Guy Falls',
    
    'Star Cup: Sunshine Airport',
    'Star Cup: Dolphin Shoals',
    'Star Cup: Electrodome',
    'Star Cup: Mount Wario',

    'Special Cup: Cloudtop Cruise',
    'Special Cup: Bone-Dry Dunes',
    'Special Cup: Bowser\'s Castle',
    'Special Cup: Rainbow Road',

    'Shell Cup: Moo Moo Meadows',
    'Shell Cup: Mario Circuit',
    'Shell Cup: Cheep Cheep Beach',
    'Shell Cup: Toad\s Turnpike',

    'Banana Cup: Dry Dry Desert',
    'Banana Cup: Donut Plains 3',
    'Banana Cup: Royal Raceway',
    'Banana Cup: Dk Jungle',

    'Leaf Cup: Wario Stadium',
    'Leaf Cup: Sherbert Land',
    'Leaf Cup: Music Park',
    'Leaf Cup: Yoshi Valley',
    
    'Lightning Cup: Tick-Tock Clock',
    'Lightning Cup: Piranha Plant Slide',
    'Lightning Cup: Grumble Volcano',
    'Lightning Cup: Rainbow Road',

    'Egg Cup: Yoshi Ciruit',
    'Egg Cup: Excitebike Arena',
    'Egg Cup: Dragon Driftway',
    'Egg Cup: Mute City',

    'Triforce Cup: Wario\s Gold Mine',
    'Triforce Cup: Rainbow Road',
    'Triforce Cup: Ice Ice Outpost',
    'Triforce Cup: Hyrule Circuit',

    'Crossing Cup: Baby Park',
    'Crossing Cup: Cheese Land',
    'Crossing Cup: Wild Woods',
    'Crossing Cup: Animal Crossing',

    'Bell Cup: Neo Bowser City',
    'Bell Cup: Ribbon Road',
    'Bell Cup: Super Bell Subway',
    'Bell Cup: Big Blue',
]

function newTrack() {
    var randomNumber = Math.floor(Math.random() * tracks.length);
    document.getElementById('trackDisplay').innerHTML = tracks[randomNumber];;
}