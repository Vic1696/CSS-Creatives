function generateFixtures(teams) {
    const n = teams.length;
    const fixtures = [];
  
    // Create  first leg fixtures
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        const homeTeam = teams[i][0];
        const homeCity = teams[i][1];
        const awayTeam = teams[j][0];
        const awayCity = teams[j][1];
        const fixture = {
          home: homeTeam,
          homeCity: homeCity,
          away: awayTeam,
          awayCity: awayCity,
          stadium: `${homeTeam} Arena`,
          leg: 1
        };
        fixtures.push(fixture);
      }
    }
  
    // Create second leg fixtures
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        const homeTeam = teams[j][0];
        const homeCity = teams[j][1];
        const awayTeam = teams[i][0];
        const awayCity = teams[i][1];
        const fixture = {
          home: homeTeam,
          homeCity: homeCity,
          away: awayTeam,
          awayCity: awayCity,
          stadium: `${homeTeam} Arena`,
          leg: 2
        };
        fixtures.push(fixture);
      }
    }
  
    // Shufffle fr random selection
    shuffleArray(fixtures);
  
    return fixtures;
  }
// Helper function to shuffle an array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  
  function displayFixturesTable(fixtures) {
    console.log("| Home \t\t| City \t\t| vs \t| Away \t\t| City \t\t| Stadium \t\t| Leg\t|");
    console.log("-------------------------------------------------------------------------------");
    fixtures.forEach(fixture => {
      const { home, homeCity, away, awayCity, stadium, leg } = fixture;
      console.log(`| ${home}\t\t| ${homeCity}\t\t| vs \t| ${away}\t\t| ${awayCity}\t\t| ${stadium}\t| ${leg}\t|`);
    });
  }

//   Teams
  const teams = [
    ["Cklein Stars", "Nairobi"],
    ["Wolves FC", "Nairobi"],
    ["Dolphins FC", "Mombasa"],
    ["Sea Horses FC", "Mombasa"],
    ["Sharks United", "Kisumu"],
    ["Lake Basin FC", "Kisumu"],
    ["Thika United", "Thika"],
    ["Mavuno Comrades FC", "Thika"],
    ["Nakuru FC", "Nakuru"],
    ["Ostrich Associates", "Nakuru"]
  ];
  
    
  const fixtures = generateFixtures(teams);
  displayFixturesTable(fixtures);
  