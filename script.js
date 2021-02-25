var pics = [
    "pics/1.png", "pics/2.png", "pics/3.png", "pics/4.png", 
    "pics/5.png", "pics/6.png", "pics/7.png", "pics/8.png", 
    "pics/9.png", "pics/10.png", "pics/11.png", "pics/12.png",
    "pics/13.png", "pics/14.png", "pics/15.png", "pics/16.png", 
    "pics/17.png", "pics/18.png", "pics/19.png", "pics/20.png", 
    "pics/21.png", "pics/22.png", "pics/23.png", "pics/24.png",
    "pics/25.png", "pics/26.png", "pics/27.png", "pics/28.png", 
    "pics/29.png", "pics/30.png", "pics/31.png", "pics/32.png", 
    "pics/33.png", "pics/34.png", "pics/35.png", "pics/36.png",
    "pics/37.png", "pics/38.png", "pics/39.png", "pics/40.png", 
    "pics/41.png", "pics/42.png", "pics/43.png", "pics/44.png", 
    "pics/45.png", "pics/46.png", "pics/47.png", "pics/48.png", 
]

var mk8tracks = [
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

var mk64tracks = [
    'Mushroom Cup: Luigi Raceway',
    'Mushroom Cup: Moo Moo Farm',
    'Mushroom Cup: Koopa Troopa Beach',
    'Mushroom Cup: Kalimari Desert',

    'Flower Cup: Toad\'s Turnpike',
    'Flower Cup: Frappe Snowland',
    'Flower Cup: Choco Mountain',
    'Flower Cup: Mario Raceway',

    'Star Cup: Wario Stadium',
    'Star Cup: Sherbert Land',
    'Star Cup: Royal Raceway',
    'Star Cup: Bowser\'s Castle',

    'Special Cup: DK\'s Jungle Parkway',
    'Special Cup: Yoshi Valley',
    'Special Cup: Banshee Boardwalk',
    'Special Cup: Rainbow Road',
]


function newTrack() {
    var sound = document.getElementById("audio");
    sound.play()
    var randomNumber = Math.floor(Math.random() * mk8tracks.length);
    document.getElementById('mk8trackDisplay').innerHTML = mk8tracks[randomNumber];
    document.getElementById("myPicture").src = pics[randomNumber];
}

function new64Track() {
    var randomNumber64 = Math.floor(Math.random() * mk64tracks.length);
    document.getElementById('mk64trackDisplay').innerHTML = mk64tracks[randomNumber64];
    //document.getElementById("myPicture").src = pics[randomNumber];
}