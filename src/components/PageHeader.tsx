import React, { FC } from "react";
//import TeamImage from "modo_team.jpg"

const PageHeader: FC = () => {

    //const classes = useStyles();

    return (
        <>
            <div id="header-image" className="div"><img src={process.env.PUBLIC_URL +"/modo_team.jpg"} alt="logo" className="img-responsive center-block"/></div>
            <nav className="navbar navbar-inverse navbar-relative-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" data-toggle="collapse" data-target="#navi" aria-expanded="false" className="navbar-toggle collapsed">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="/" className="navbar-brand">
                        <img src={process.env.PUBLIC_URL + "/modo_logo.jpg"} alt="logo" width="22" height="22" style={{float: "left"}}/>
                        <span style={{float: "left"}}>&nbsp;SBS MODO</span>
                    </a>
                </div>
                <div id="navi" className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-left">
                    <li><a href="/joukkue" className="sm-pull-right">Joukkue</a></li>
                    <li><a href="/pelit" className="sm-pull-right">Ottelut</a></li>
                    <li><a href="/alltime" className="sm-pull-right"> All time</a></li>
                    <li><a href="/yhteystiedot" className="sm-pull-right">Yhteystiedot</a></li>
                </ul>
                </div>
            </div>
            </nav>
        </>
    );
};
export default PageHeader;