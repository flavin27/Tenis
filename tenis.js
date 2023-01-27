// ATP URLS
const ATP_SINGLES_URL = 'https://www.atptour.com/en/rankings/singles';
const ATP_RACE_TO_LONDON_URL = 'https://www.atptour.com/en/rankings/singles-race-to-london';
const ATP_RACE_TO_MILAN_URL = 'https://www.atptour.com/en/rankings/race-to-milan';
const ATP_DOUBLES_URL = 'https://www.atptour.com/en/rankings/doubles';
const ATP_WIN_LOSS_URL = 'https://www.atptour.com/en/performance-zone/win-loss-index';
const SERVE_LEADERS_URL = 'https://www.atptour.com/en/stats/leaderboard?boardType=serve&timeFrame=52Week&surface=all&versusRank=all&formerNo1=false';
const RETURN_LEADERS_URL = 'https://www.atptour.com/en/stats/leaderboard?boardType=return&timeFrame=52Week&surface=all&versusRank=all&formerNo1=false';
const UNDER_PRESSURE_URL = 'https://www.atptour.com/en/stats/leaderboard?boardType=pressure&timeFrame=52Week&surface=all&versusRank=all&formerNo1=false';
const SERVICE_GAMES_WON_URL = 'https://www.atptour.com/en/stats/service-games-won';

/* ATP RANKINGS */

// ATP singles rankings API response
router.get('/rankings/singles', (req, res) => {

  let rankings = [];
  let countries = [];
  let players = [];
  let ages = [];
  let points = [];
  let tournaments = [];
  let JSONResponse = [];

  axios.get(ATP_SINGLES_URL).then((response) => {
    const $ = cheerio.load(response.data);
  }
    // Scraping rankings
    $('.mega-table tbody tr .rank-cell').each((i, td) => {
      rankings.push($(td).text().trim());
    });

    // Scraping countries
    $('.mega-table tbody tr .country-cell .country-inner .country-item img').each((i, img) => {
      countries.push($(img).attr('alt'));
    });

    // Scraping names
    $('.mega-table tbody tr .player-cell').each((i, td) => {
      players.push($(td).text().trim());
    });

console.log(players)