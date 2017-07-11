import React from 'react';
import Axios from 'axios';
import LeaderHeader from './LeaderHeader.js';
import LeaderRow from './LeaderRow.js';

class LeaderboardTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recentLeaders: [],
            allTimeLeaders: [],
            toggleLeaderBoard: true
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

    getLeaderBoard() {
        return this.toggleLeaderBoard
            ? this.state.recentLeaders.map((leader, index) => {
                return <LeaderRow leader={leader} key={index} rank={index+1}/>
            })
            : this.state.allTimeLeaders.map((leader, index) => {
                return <LeaderRow leader={leader} key={index} rank={index+1}/>
            });
    }


    render() {
        return (
            <table>
                <LeaderHeader/>
                <tbody>
                    {this.getLeaderBoard()}
                </tbody>
            </table>
        )
    }
}

export default LeaderboardTable