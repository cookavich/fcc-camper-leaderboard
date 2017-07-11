import React from 'react';
import Axios from 'axios';
import LeaderHeader from './LeaderHeader.js';
import LeaderBody from './LeaderBody.js';

class LeaderBoardTable extends React.Component {
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

    handleLeaderBoardChange = () => {
        this.setState(prevState => {
            return {toggleLeaderBoard: !prevState.toggleLeaderBoard}
        })
    };

    render() {
        return (
            <table>
                <LeaderHeader active={this.state.toggleLeaderBoard} handleLeaderChange={this.handleLeaderBoardChange}/>
                {this.state.toggleLeaderBoard
                    ? <LeaderBody leaders={this.state.recentLeaders} />
                    : <LeaderBody leaders={this.state.allTimeLeaders} />}
            </table>
        )
    }
}

export default LeaderBoardTable