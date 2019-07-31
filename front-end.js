var app = (function() {
    var json = { count: 87,
        next: 'https://swapi.co/api/people/?page=2',
        previous: null,
        results:
        [ { name: 'Luke Skywalker',
            height: '172',
            mass: '77',
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '19BBY',
            gender: 'male',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [Array],
            species: [Array],
            vehicles: [Array],
            starships: [Array],
            created: '2014-12-09T13:50:51.644000Z',
            edited: '2014-12-20T21:17:56.891000Z',
            url: 'https://swapi.co/api/people/1/' },
        { name: 'C-3PO',
            height: '167',
            mass: '75',
            hair_color: 'n/a',
            skin_color: 'gold',
            eye_color: 'yellow',
            birth_year: '112BBY',
            gender: 'n/a',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [Array],
            species: [Array],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:10:51.357000Z',
            edited: '2014-12-20T21:17:50.309000Z',
            url: 'https://swapi.co/api/people/2/' },
        { name: 'R2-D2',
            height: '96',
            mass: '32',
            hair_color: 'n/a',
            skin_color: 'white, blue',
            eye_color: 'red',
            birth_year: '33BBY',
            gender: 'n/a',
            homeworld: 'https://swapi.co/api/planets/8/',
            films: [Array],
            species: [Array],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:11:50.376000Z',
            edited: '2014-12-20T21:17:50.311000Z',
            url: 'https://swapi.co/api/people/3/' },
        { name: 'Darth Vader',
            height: '202',
            mass: '136',
            hair_color: 'none',
            skin_color: 'white',
            eye_color: 'yellow',
            birth_year: '41.9BBY',
            gender: 'male',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [Array],
            species: [Array],
            vehicles: [],
            starships: [Array],
            created: '2014-12-10T15:18:20.704000Z',
            edited: '2014-12-20T21:17:50.313000Z',
            url: 'https://swapi.co/api/people/4/' },
        { name: 'Leia Organa',
            height: '150',
            mass: '49',
            hair_color: 'brown',
            skin_color: 'light',
            eye_color: 'brown',
            birth_year: '19BBY',
            gender: 'female',
            homeworld: 'https://swapi.co/api/planets/2/',
            films: [Array],
            species: [Array],
            vehicles: [Array],
            starships: [],
            created: '2014-12-10T15:20:09.791000Z',
            edited: '2014-12-20T21:17:50.315000Z',
            url: 'https://swapi.co/api/people/5/' },
        { name: 'Owen Lars',
            height: '178',
            mass: '120',
            hair_color: 'brown, grey',
            skin_color: 'light',
            eye_color: 'blue',
            birth_year: '52BBY',
            gender: 'male',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [Array],
            species: [Array],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:52:14.024000Z',
            edited: '2014-12-20T21:17:50.317000Z',
            url: 'https://swapi.co/api/people/6/' },
        { name: 'Beru Whitesun lars',
            height: '165',
            mass: '75',
            hair_color: 'brown',
            skin_color: 'light',
            eye_color: 'blue',
            birth_year: '47BBY',
            gender: 'female',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [Array],
            species: [Array],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:53:41.121000Z',
            edited: '2014-12-20T21:17:50.319000Z',
            url: 'https://swapi.co/api/people/7/' },
        { name: 'R5-D4',
            height: '97',
            mass: '32',
            hair_color: 'n/a',
            skin_color: 'white, red',
            eye_color: 'red',
            birth_year: 'unknown',
            gender: 'n/a',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [Array],
            species: [Array],
            vehicles: [],
            starships: [],
            created: '2014-12-10T15:57:50.959000Z',
            edited: '2014-12-20T21:17:50.321000Z',
            url: 'https://swapi.co/api/people/8/' },
        { name: 'Biggs Darklighter',
            height: '183',
            mass: '84',
            hair_color: 'black',
            skin_color: 'light',
            eye_color: 'brown',
            birth_year: '24BBY',
            gender: 'male',
            homeworld: 'https://swapi.co/api/planets/1/',
            films: [Array],
            species: [Array],
            vehicles: [],
            starships: [Array],
            created: '2014-12-10T15:59:50.509000Z',
            edited: '2014-12-20T21:17:50.323000Z',
            url: 'https://swapi.co/api/people/9/' },
        { name: 'Obi-Wan Kenobi',
            height: '182',
            mass: '77',
            hair_color: 'auburn, white',
            skin_color: 'fair',
            eye_color: 'blue-gray',
            birth_year: '57BBY',
            gender: 'male',
            homeworld: 'https://swapi.co/api/planets/20/',
            films: [Array],
            species: [Array],
            vehicles: [Array],
            starships: [Array],
            created: '2014-12-10T16:16:29.192000Z',
            edited: '2014-12-20T21:17:50.325000Z',
            url: 'https://swapi.co/api/people/10/' } ] }

    function logDetails(jsonData) {
        var characters = [];
        jsonData['results'].forEach(function(char) {
            var character = {};
            character.name = char.name;
            character.height = char.height;
            character.films = [];
            for(var i=0; i<3; i++) {
                character.films.push(char.films[i]);
            }
            characters.push(character);
         });
         console.log(characters);
         return characters;
    }

    function calculateHeight(height) {
        
    }

    function generateTableRow(char) {
        var row = `<tr><td>${char.name}</td><td>${char.height}</td><td>${char.films}</td></tr>`
        document.querySelector('table').innerHTML += row;
    }

    return {

        init: function() {
            var characters = logDetails(json);
            characters.forEach(function(char) {
                generateTableRow(char);
            });
        }
    }

})();

app.init();