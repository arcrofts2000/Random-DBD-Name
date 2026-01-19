// These are callable, use "." followed by the name of the variable you want, such as ".survivors"
// Useful if you want to select a specific object in that file.
const survivors = require('./data/survivors.json');
const survivorItems = require('./data/survivor-items.json');
const survivorPerks = require('./data/survivor-perks.json');

const killers = require('./data/killers.json');
const killerPerks = require('./data/killer-perks.json');


// Private function - generates a random number, called in all functions
function randomNumber(length)
{
    return Math.floor(Math.random() * length);
}


// Randomly selects a single survivor, call using ".randomSurvivor()"
function generateSurvivorName()
{
    return survivors[randomNumber(survivors.length)];
}

// Randomly selects a survivor perk, Call using ".getSurvivorPerk()"
function generateSurvivorPerk()
{
    return survivorPerks[randomNumber(survivorPerks.length)];
}

// Private Function, called in generateSurvivor()
function generateFourSurvivorPerks()
{
    var perkList = [];

    while (perkList.length < 4)
    {
        var newPerk = generateSurvivorPerk();
        if (!perkList.includes(newPerk))
            perkList.push(newPerk);
    }
    return perkList;
}

// Randomly selects an Item with up to 2 addons, Call using ".getItem()"
function generateItem() 
{
    const keys = Object.keys(survivorItems);
    
    var item = keys[randomNumber(keys.length)];
    var itemType = survivorItems[item].type[randomNumber(survivorItems[item].type.length)];

    var addons = [];
    var randomAmountOfAddons = randomNumber(3);
    while (addons.length < randomAmountOfAddons)
    {
        var newAddon = survivorItems[item].addon[randomNumber(survivorItems[item].addon.length)];
        if (!addons.includes(newAddon))
            addons.push(newAddon);
    }
    
    return {"type": itemType, "addons": addons};
}

// Creates an entire loadout for Survivor, Call using ".getSurvivorLoadout()"
/*
    - Names the Survivor
    - Lists 4 (different) perks
    - Creates an item with up to 2 addons (also random)
*/
function generateSurvivor()
{
    var newSurvivor = generateSurvivorName();
    var newPerks = generateFourSurvivorPerks();
    var newItem = generateItem();

    return {"name": newSurvivor, "perks": newPerks, "item": newItem}
}

// Names a random Killer with up to 2 power addons - Call using ".randomKiller()""
function generateKillerName()
{
    const keys = Object.keys(killers);
    
    var killer = keys[randomNumber(keys.length)];

    var numOfAddons = randomNumber(3);
    var addonList = [];
    while (addonList.length < numOfAddons)
    {
        var newAddon = killers[killer].addon[randomNumber(killers[killer].addon.length)];
        if (!addonList.includes(newAddon))
            addonList.push(newAddon);
    }

    return {"name": killer, "addons": addonList};
}

// Names a random killer perk - Call using ".getKillerPerk()"
function generateKillerPerk()
{
    return killerPerks[randomNumber(killerPerks.length)];
}

// Private Function - Used in generateKiller() to list 4 different perks
function generateFourKillerPerks()
{
    var perkList = [];
    while(perkList.length < 4)
    {
        var newPerk = generateKillerPerk();
        if (!perkList.includes(newPerk))
            perkList.push(newPerk);
    }
    return perkList;
}

// Creates a whole killer loadout - Call using ".getKillerLoadout()"
/*
    - Names a random Killer
    - Lists 4 different killer perks
    - creates up to 2 addons for the Killer Power (based on the Killer named)
*/
function generateKiller()
{
    var killer = generateKillerName();
    var killerPerkList = generateFourKillerPerks();

    return {"name": killer, "perkList": killerPerkList}
}

console.log(generateKiller());

exports.survivors = survivors;
exports.items = survivorItems;
exports.survivorPerks = survivorPerks;
exports.randomSurvivor = generateSurvivorName;
exports.getItem = generateItem;
exports.getSurvivorPerk = generateSurvivorPerk;
exports.getSurvivorLoadout = generateSurvivor;

exports.killers = killers;
exports.killerPerks = killerPerks;
exports.randomKiller = generateKillerName;
exports.getKillerPerk = generateKillerPerk;
exports.getKillerLoadout = generateKiller;