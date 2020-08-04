# fetchGOAL

# Project Proposal Example

## Project Description

My app is call fetchGoal. It's an app for fanatic futbol(Football) fans. Users can see a list of all the current matches being played, and the country they are taken place in. Once users can also click on team and see information regarding the team in terms of current coaches, players on roster, times zones, as well as the current olds for the match.

## Wireframes

### Home Page

![](https://i.imgur.com/bFslGj4.jpg 'fetchGoal/Indepth')

### fetchGoal Indepth

![](https://i.imgur.com/HQKX4Zk.jpg 'fetchGoal/Indepth')

## MVP User Stories

### _MVP User Stories_

- As a user, I want to see a listing of the current matches being played by season and/or country so that I can consider which ones I might want to watch.

- As a user, I would like to click on an individual match to view additional details about it including the current roster, current coaching staff, and Odds from current bookmakers that are available.

- As a user, I want to be able to easily navigate the fetchGoal app on my mobile device so that I can see match details while I'm on the go.

## Post MVP Stretch Goals

- As, a user, I would like to search for a team by name so I can follow my favorite team.

- As a user, I would like to filter matches by country, so that I can more easily select matches based on where I am located at the moment.

- As a user, I would like to be able to search for a player on any given team incase the player might have been transferred

## API Documentation 


[The fetchGoal DB API Documentation](api-football-v1.p.rapidapi.com)

### Current Matches Response

### Current Roster Response

### Current Caching Staff Response

### Current Odds From Current Bookmakers Response

#### OPTIONAL Component Details

| Component | Description                                                      | State/Props |
| --------- | ---------------------------------------------------------------- | ----------- |
| App       | This will make the initial data request and include React Router | State       |
| --------- | -----------                                                      | ----------  |
| Header    | This will render the header & nav                                | Props       |
| --------- | -----------                                                      | ----------- |
| FetchGoal | This will render all the matches                                 | Props       |
