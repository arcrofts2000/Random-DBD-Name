const survivors = require('./data/survivors.json');
const survivorItems = require('./data/survivor-items.json');
const survivorPerks = require('./data/survivor-perks.json');

const killers = require('./data/killers.json');
const killerPerks = require('./data/killer-perks.json');


function randomNumber(length)
{
    return Math.floor(Math.random() * length);
}



function generateSurvivorName()
{
    return survivors[randomNumber(survivors.length)];
}

function generateSurvivorPerk()
{
    return survivorPerks[randomNumber(survivorPerks.length)];
}

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

function generateSurvivor()
{
    var newSurvivor = generateSurvivorName();
    var newPerks = generateFourSurvivorPerks();
    var newItem = generateItem();

    return {"name": newSurvivor, "perks": newPerks, "item": newItem}
}

function generateKillerName()
{
    const keys = Object.keys(killers);
    
    var killer = keys[randomNumber(keys.length)];
    return killer;
}

function generateKillerPerk()
{
    return killerPerks[randomNumber(killerPerks.length)];
}

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

function generateKiller()
{
    var killer = generateKillerName();
    var killerPerkList = generateFourKillerPerks();

    var numOfAddons = randomNumber(3);
    var addonList = [];
    while (addonList.length < numOfAddons)
    {
        var newAddon = killers[killer].addon[randomNumber(killers[killer].addon.length)];
        if (!addonList.includes(newAddon))
            addonList.push(newAddon);
    }

    return {"name": killer, "perkList": killerPerkList, "addons": addonList}
}

console.log(generateSurvivor());

exports.allSurvivors = survivors;
exports.randomSurvivor = generateSurvivorName;
exports.allItems = survivorItems;
exports.allSurvivorPerks = survivorPerks;
exports.getSurvivorPerk = generateSurvivorPerk;
exports.getSurvivorLoadout = generateSurvivor;

exports.allKillers = killers;
exports.randomKiller = generateKillerName;
exports.allKillerPerks = killerPerks;
exports.getKillerPerk = generateKillerPerk;
exports.getKillerLoadout = generateFourKillerPerks;