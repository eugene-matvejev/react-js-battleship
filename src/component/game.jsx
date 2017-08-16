import React from "react";
import PropTypes from "prop-types";
import Battlefield from "./battlefield";
import Player from "./player";
import GameModel from "../model/game_model";
import "../stylesheets/css/game.css";

export default class Game extends React.Component {
    render() {
        const model = this.props.model;

        return (
            <div className={`battlefield-game ${this.props.className || ''}`}>
                {
                    model.battlefields.map((battlefield, key) =>
                        <div key={key} className="col-md-6">
                            <Player model={battlefield.getPlayer()}/>
                            <Battlefield model={battlefield}/>
                        </div>
                    )
                }
            </div>
        );
    }

    static propTypes = {
        model: PropTypes.instanceOf(GameModel).isRequired,
        className: PropTypes.string,
    }
}
