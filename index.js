const survivors = require('./data/survivors.json');
const survivorItems = require('./data/survivor-items.json');
const survivorPerks = require('./data/survivor-perks.json');

const killers = require('./data/killers.json');
const killerPerks = require('./data/killer-perks.json');


function randomNumber(length)
{
    return Math.floor(Math.random() * length);
}



function generateSurvivor()
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

function generateKiller()
{
    return killers[randomNumber(killers.length)];
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



exports.allSurvivors = survivors;
exports.getSurvivor = generateSurvivor();
exports.allItems = survivorItems;
exports.allSurvivorPerks = survivorPerks;
exports.getSurvivorPerk = generateSurvivorPerk();
exports.getSurvivorLoadout = generateFourSurvivorPerks();

exports.allKillers = killers;
exports.getKiller = generateKiller();
exports.allKillerPerks = killerPerks;
exports.getKillerPerk = generateKillerPerk();
exports.getKillerLoadout = generateFourKillerPerks();