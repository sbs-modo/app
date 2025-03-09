import React, { FC } from "react";

import allEvents from '../data/all_games.json';

const Games: FC = () => {
    return (
        <>
            <div style={{paddingLeft: "6%", paddingRight: "6%", paddingBottom: "10%;"}}>
                {allEvents.map(event => {
                    return (
                        <div className="col xs-12">
                            <a href={"#event_details_" + event.name} data-toggle="collapse" title="Pelaajan tapahtumat" style={{cursor: "pointer", padding: "0px"}} className="h4">
                                {event.name} - {event.serie}
                            </a>
                            <div id={"event_details_" + event.name} className={event.name === "2024-2025" ? "collapse in" : "collapse out"}>
                                <div className="list-group">
                                    {event.games && event.games.length > 0 ? 
                                    event.games.map(game => 
                                        (<div className={"list-group-item " + (game.result === 0 ? "lostGame" : (game.result === 1 ? "wonGame": "otGame"))}>
                                            <div className="row" data-target={"#event_details_" +game.game_id} data-toggle="collapse" title="Kauden tilastot" style={{cursor: "pointer", paddingLeft: "2%"}}>
                                                <div className="col-xs-6">{game.homeTeam} - {game.awayTeam}</div>
                                                <div className="col-xs-3">{game.homeGoals} - {game.awayGoals} {game.finishedTypeString}</div>
                                                <div className="col-xs-3">{game.date}</div>
                                            </div>
                                            <div id={"event_details_" + game.game_id} className="collapse out">
                                                <table style={{width: "100%", paddingLeft: "2%", fontSize: "12px"}}>
                                                    <thead style={{background: "lightgrey"}}>
                                                        <tr>
                                                            <th>Nimi</th> 
                                                            <th>Maalit</th> 
                                                            <th>Syötöt</th> 
                                                            <th>Pisteet</th>  
                                                        </tr>
                                                    </thead>
                                                    <tbody style={{background: "white"}}>
                                                    {game.player_stats && game.player_stats.map(stats =>(
                                                        <tr>
                                                            <td>{stats.name}</td>
                                                            <td>{stats.goals}</td>
                                                            <td>{stats.assists}</td>
                                                            <td>{stats.points}</td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>))
                                    :
                                    <div className="list-group-item">
                                        {event.desc}
                                    </div>}
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    );
};
export default Games;