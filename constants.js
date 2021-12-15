const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const cityColors = {
    Dallas: "sky",
    "The Colony": "purple",
    Carrollton: "green",
    Plano: "pink",
    Richardson: "yellow"
}
const groups = {
    "North Dallas Gaming Group": {
        name: "North Dallas Gaming Group",
        link: "https://www.meetup.com/North-Dallas-Gaming-Group/",
        events: [{
            time: "6:30-10pm",
            location: "The Thirsty Growler",
            city: "The Colony",
            address: "5733 TX-121 Ste. 230, The Colony, TX 75056",
            day: "Tuesday",
            weekNum: [1, 2, 3, 4, 5, 6]
        },
        {
            time: "6:30-10pm",
            location: "The Thirsty Growler",
            city: "The Colony",
            address: "5733 TX-121 Ste. 230, The Colony, TX 75056",
            day: "Friday",
            weekNum: [1, 3, 5]
        },
        {
            time: "12-11pm",
            location: "The Thirsty Growler",
            city: "The Colony",
            address: "5733 TX-121 Ste. 230, The Colony, TX 75056",
            day: "Saturday",
            weekNum: [4]
        }
        ]
    },
    "The Dallas Area Boardgames Meetup Group": {
        name: "The Dallas Area Boardgames Meetup Group",
        link: "https://www.meetup.com/DallasAreaBoardgames/",
        events: [{
            time: "1:30-4:30pm",
            location: "Cityline Whole Foods",
            city: "Richardson",
            address: "1411 E Renner Rd, Richardson, TX 75082",
            day: "Sunday",
            weekNum: [1, 2, 3, 4, 5, 6]
        }]
    },
    "DFW Boardgamers": {
        name: "DFW Boardgamers",
        link: "https://www.meetup.com/Frisco-Board-Gamers/",
        events: [{
            time: "6-11pm",
            location: "NYLO Dallas Plano Hotel",
            city: "Plano",
            address: "8201 Preston Rd, Plano, TX 75024",
            day: "Thursday",
            weekNum: [1, 2, 3, 4, 5, 6]
        },
        {
            time: "10am-11pm",
            location: "NYLO Dallas Plano Hotel",
            city: "Plano",
            address: "8201 Preston Rd, Plano, TX 75024",
            day: "Saturday",
            weekNum: [1]
        },
        ]
    },
    "20 and 30 somethings in DALLAS - Awesome Stuff": {
        name: "20 and 30 somethings in DALLAS - Awesome Stuff",
        link: "https://www.meetup.com/20-and-30-somethings-in-DALLAS-Awesome-Stuff/",
        events: [{
            time: "6-8pm",
            location: "Carrollton Public Library at Josey Ranch Lake",
            city: "Carrollton",
            address: "1700 Keller Springs Rd, Carrollton, TX 75006",
            day: "Wednesday",
            weekNum: [2, 4, 6]
        },
        {
            time: "7:30pm-12am",
            location: "Madness Games & Comics",
            city: "Plano",
            address: "3000 Custer Rd #310, Plano, TX 75075",
            day: "Saturday",
            weekNum: [3]
        }
        ]
    },
    "Carrollton Game Night": {
        name: "Carrollton Game Night",
        link: "https://www.meetup.com/Carrollton-Game-Night/",
        events: [{
            time: "4-11:45pm",
            location: "Host's House",
            city: "Carrollton",
            address: "",
            day: "Saturday",
            weekNum: [2, 4, 6]
        },]
    },
    "Boards & Brews - Dallas": {
        name: "Boards & Brews - Dallas",
        link: "https://www.meetup.com/Boards-Brews-Dallas/",
        events: [{
            time: "6:15-10:15pm",
            location: "On Rotation Brewery & Kitchen",
            city: "Dallas",
            address: "7701 Lemmon Ave Suite 200, Dallas, TX 75209",
            day: "Wednesday",
            weekNum: [1]
        },]
    },
    "Game Night Dallas": {
        name: "Game Night Dallas",
        link: "https://www.meetup.com/game-night-dallas/",
        events: []
    }
}

const events = Object.values(groups).flatMap(group => group.events.map((event) => ({
    ...event,
    groupName: group.name,
    groupLink: group.link
}))).map((event, id) => ({
    ...event,
    id
}))


const eventsByDay = events.reduce(
    (result, event, index) => {
        event ? result[event.day].push(event) : ""
        return result
    }, {
    'Sunday': [],
    'Monday': [],
    'Tuesday': [],
    'Wednesday': [],
    'Thursday': [],
    'Friday': [],
    'Saturday': []
}
)