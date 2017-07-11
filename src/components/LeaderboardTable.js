import React from 'react';
import LeaderRow from './LeaderRow.js';
import Axios from 'axios';

class LeaderboardTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recentLeaders: [],
            allTimeLeaders: []
        };
    }

    componentDidMount() {
        Axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
            .then(res => {
                this.setState({
                    recentLeaders: res.data
                })
            });

        Axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
            .then(res => {
                this.setState({
                    allTimeLeaders: res.data
                })
            });
    }

    handleClick() {

    }

    render() {
        let recentLeaders = this.state.recentLeaders.map((leader, index) => {
            return <LeaderRow leader={leader} key={index} rank={index+1}/>
        });

        let allTimeLeaders = this.state.allTimeLeaders.map((leader, index) => {
            return <LeaderRow leader={leader} key={index} rank={index+1}/>
        });
        return (
            <table>
                <thead>
                <tr className="topRow">
                    <th className="ranking">Ranking</th>
                    <th className="user">User</th>
                    <th className="recent"><a className="button" onClick={this.handleClick}>Points Last 30 Days \/</a></th>
                    <th className="allTime"><a className="button" onClick={this.handleClick}>Points All Time</a></th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        )
    }
}

export default LeaderboardTable