import React, { FC } from "react";
import allPlayers from '../data/player_stats.json';
import allTime from '../data/all_time_stats.json';

const Records: FC = () => {

    const TOP_LIST_SIZE = 10;
    const mostPoints = allTime.roster.sort((a, b) => (a.points > b.points ? -1 : 1)).slice(0,TOP_LIST_SIZE);
    const mostGoals = allTime.roster.sort((a, b) => (a.goals > b.goals ? -1 : 1)).slice(0,TOP_LIST_SIZE);
    const mostAssists = allTime.roster.sort((a, b) => (a.assists > b.assists ? -1 : 1)).slice(0,TOP_LIST_SIZE);

    const seasonStats: any[] = [];
    allPlayers.map(player => player.events.forEach(playerSeason => seasonStats.push(
        {
            name: player.firstName + ' ' + player.lastName, 
            seasonName: playerSeason.name,
            points: playerSeason.points,
            assists: playerSeason.assists,
            goals: playerSeason.goals,
        } as any
    )))

    const seasonMostPoints = seasonStats.sort((a, b) => (a.points > b.points ? -1 : 1)).slice(0,TOP_LIST_SIZE);
    const seasonMostGoals = seasonStats.sort((a, b) => (a.goals > b.goals ? -1 : 1)).slice(0,TOP_LIST_SIZE);
    const seasonMostAssists = seasonStats.sort((a, b) => (a.assists > b.assists ? -1 : 1)).slice(0,TOP_LIST_SIZE);
    // TODO: calculate longest point streaks per season
    //const seasonLongestPointStreak = undefined;

    const gameStats: any[] = [];
    //@ts-ignore
    allPlayers.map(player => player.events.forEach(playerSeason => playerSeason.games?.forEach(playerGameStats => gameStats.push(
        {
            name: player.firstName + ' ' + player.lastName, 
            seasonName: playerSeason.name,
            points: playerGameStats.points,
            assists: playerGameStats.assists,
            goals: playerGameStats.goals,
        } as any
    ))))

    const gameMostPoints = gameStats.sort((a, b) => (a.points > b.points ? -1 : 1)).slice(0,TOP_LIST_SIZE);
    const gameMostGoals = gameStats.sort((a, b) => (a.goals > b.goals ? -1 : 1)).slice(0,TOP_LIST_SIZE);
    const gameMostAssists = gameStats.sort((a, b) => (a.assists > b.assists ? -1 : 1)).slice(0,TOP_LIST_SIZE);

    const getRecordTable = (items: any, header: string, field: string, header2?: string, field2?: string) => {
        return (
            <table style={{fontSize: '12px', border: '0.5px solid black', marginTop: '10px', width:'100%', minWidth:'300px'}}>
                <thead style={{background: 'lightgrey'}}>
                    <tr>
                        <th style={{width:"30%"}}>{header}</th>
                        <th>Nimi</th>
                        {header2 && <th>{header2}</th>}
                    </tr>
                </thead>
                <tbody>
                {items.map((player: any, index: number) => (
                    <tr>
                        <td>{player[field]}</td>
                        <td>{player.name}</td>
                        {field2 && <td>{player[field2]}</td>}
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }

    return (
        <div style={{marginLeft: '10px',marginRight: '10px'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around'}}>
                <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                    <h5>All time</h5>
                    {getRecordTable(mostPoints, "Pisteet", "points")}
                    {getRecordTable(mostGoals, "Maalit", "goals")}
                    {getRecordTable(mostAssists, "Syötöt", "assists")}
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                    <h5>Yhden kauden ennätykset</h5>
                    {getRecordTable(seasonMostPoints, "Pisteet", "points", "Kausi", "seasonName")}
                    {getRecordTable(seasonMostGoals, "Maalit", "goals", "Kausi", "seasonName")}
                    {getRecordTable(seasonMostAssists, "Syötöt", "assists", "Kausi", "seasonName")}
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'column'}}>
                    <h5>Yhden pelin ennätykset</h5>
                    {getRecordTable(gameMostPoints, "Pisteet", "points", "Kausi", "seasonName")}
                    {getRecordTable(gameMostGoals, "Maalit", "goals", "Kausi", "seasonName")}
                    {getRecordTable(gameMostAssists, "Syötöt", "assists", "Kausi", "seasonName")}
                </div>
            </div>
        </div>
    );
};
export default Records;