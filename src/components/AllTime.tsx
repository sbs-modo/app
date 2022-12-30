import React, { FC } from "react";
import allTime from '../data/all_time_stats.json';

const AllTime: FC = () => {

    //const classes = useStyles();

    return (
        <>
            <table id="allTimeStats" className="table table-striped table-bordered" width="100%">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nimi</th>
                        <th>Maalit</th>
                        <th>Syötöt</th>
                        <th>Pisteet</th>
                        <th title="Mukana vain 2. divari jäähyt"> Jäähyt (min)</th>
                    </tr>
                </thead>
                <tbody>
                    {allTime.roster.map((player: any) => {
                        return (
                            <tr>
                                <td>{player.rank}</td>
                                <td>{player.name}</td>
                                <td>{player.goals}</td>
                                <td>{player.assists}</td>
                                <td>{player.points}</td>
                                <td>{player.penalties}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
};
export default AllTime;