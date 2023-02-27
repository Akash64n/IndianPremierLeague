var data = {
    "name": "Royal Challengers Bangalore",
    "location": "Bangalore",
    "player": [
        {
            "name": "Faf Du Plessis",
            "country": "South Africa",
            "role": "Batsman",
            "price-in-crores": "7"
        },
        {
            "name": "Virat Kohli",
            "country": "India",
            "role": "Batsman",
            "price-in-crores": "15"
        },
        {
            "name": "Glenn Maxwell",
            "country": "Australia",
            "role": "Batsman",
            "price-in-crores": "11"
        },
        {
            "name": "Mohammad Siraj",
            "country": "India",
            "role": "Bowler",
            "price-in-crores": "7"
        },
        {
            "name": "Harshal Patel",
            "country": "India",
            "role": "Bowler",
            "price-in-crores": "10.75"
        },
        {
            "name": "Wanindu Hasaranga",
            "country": "Srilanka",
            "role": "Bowler",
            "price-in-crores": "10.75"
        },
        {
            "name": "Dinesh Karthik",
            "country": "India",
            "role": "Wicket-keeper",
            "price-in-crores": "5.5"
        },
        {
            "name": "Shahbaz Ahmed",
            "country": "India",
            "role": "All-Rounder",
            "price-in-crores": "2.4"
        },
        {
            "name": "Rajat Patidar",
            "country": "India",
            "role": "Batsman",
            "price-in-crores": "0.20"
        },
        {
            "name": "Josh Hazlewood",
            "country": "Australia",
            "role": "Bowler",
            "price-in-crores": "7.75"
        },
        {
            "name": "Mahipal Lomror",
            "country": "India",
            "role": "Bowler",
            "price-in-crores": "7.75"
        }
    ]
}

let foreignCountrycount = 0
let keeperCount = 0

function allForeignPlayers() {
    for (let i = 0; i <= data.player.length - 1; i++) {
        if (data.player[i].country != "India") {
            foreignCountrycount++
        }
    }
    return foreignCountrycount
}

function wicketKeeperCount() {
    for (let i = 0; i <= data.player.length - 1; i++) {
        if (data.player[i].role == "Wicket-keeper") {
            keeperCount++
        }
    }
    return keeperCount
}

module.exports = { allForeignPlayers, wicketKeeperCount }
