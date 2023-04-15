import React, { FC } from "react";
import allPlayers from '../data/player_stats.json';

const Players: FC = () => {

    //const classes = useStyles();

    const getPlayerRow = (player: any) => {
        return (
            <div className="col xs-12">
                    <a className="h4" href={"#playerdetails_" + player.playerID} data-toggle="collapse" title="Pelaajan tapahtumat" style={{cursor: 'pointer', padding: '2px'}}>
                        {player.jersey} {player.firstName} {player.lastName}
                    </a>
                    <div className="collapse" id={"playerdetails_" + player.playerID}>
                    <div className="list-group">
                        <div className="div" style={{padding: '5px'}}>Syntymäaika: {player.dateOfBirth}</div>
                        <div className="div" style={{padding: '5px'}}>Pelipaikka: {player.role}</div>
                        <div className="div" style={{padding: '5px'}}>Kätisyys: {player.hand}</div>
                        {player.events.map((event: any) => {
                            return (
                                <div className="list-group-item">
                                    <a className="h5" href={"#playerdetails_" + player.playerID+ event.name} data-toggle="collapse" title="Kauden tilastot" style={{cursor: 'pointer', paddingLeft: '2%'}}>
                                        {player.role === "MV" && event.saves > 0 ?
                                            (<span> {event.name} : 
                                            <b>GA</b> 
                                            <span>{event.goalsAgainst}</span>
                                            <b> S</b>  
                                            <span>{event.saves}</span>
                                            <b> S%</b> :
                                            <span>{String((event.saves / (event.goalsAgainst + event.saves))*100).substr(0,5)}</span></span>)
                                        :
                                            <span> {event.name} : {event.goals} + {event.assists} = {event.points}</span>
                                        }
                                    </a>
                                    <div className="collapse" id={"playerdetails_" + player.playerID+ event.name}>
                                        <table width="100%" style={{paddingLeft: '2%', fontSize: '12px'}}>
                                            <thead style={{background: 'lightgrey'}}>
                                                <tr>
                                                    {player.role === "MV" && event.saves > 0?
                                                    <>
                                                        <th>Päästetyt maalit</th>
                                                        <th>Torjunnat</th>
                                                        <th>Torjunta-% </th>
                                                    </> : 
                                                    <>
                                                        <th>Maalit</th>
                                                        <th>Syötöt</th>
                                                        <th>Pisteet</th>
                                                    </>}
                                                    <th>Vastustaja</th>
                                                    <th>Päivämäärä</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {event.games &&
                                            (<>
                                                {event.games.map((game: any) => {
                                                    return (
                                                        <tr>
                                                            {player.role === "MV" && event.saves > 0 ?
                                                            <>
                                                                <td>{game.goalsAgainst}</td>
                                                                <td>{game.saves}</td>
                                                                {game.saves > 0 ?
                                                                <td>{String((game.saves / (game.goalsAgainst + game.saves))*100).substr(0,5)}</td>
                                                                :
                                                                <td>0</td>}
                                                            </>

                                                            :
                                                            <>
                                                                <td>{game.goals}</td>
                                                                <td>{game.assists}</td>
                                                                <td>{game.points}</td>
                                                            </>
                                                            }
                                                            <td>{game.against}</td>
                                                            <td>{game.date}</td>
                                                        </tr>
                                                    )}
                                                )}
                                            </>)}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )})}
                    </div>
                    </div>
                </div>
        )
    }

    return (
        <>
            <div className="div" style={{paddingLeft: '6%', paddingRight: '6%', paddingBottom: '10%'}}>
            {allPlayers.filter(player => player.events.some(event => event.name === '2022-2023')).map(player => {
                return getPlayerRow(player);
            })}
            <h3>Hall of Fame</h3>
            {allPlayers.filter(player => !player.events.some(event => event.name === '2022-2023')).map(player => {
                return getPlayerRow(player);
            })}
            </div>
        </>
    );
};
export default Players;