import React from 'react';
import LeaderRow from './LeaderRow.js';
import Axios from 'axios';

class LeaderboardTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recentLeaders: [],
        };
    }

    componentDidMount() {
        Axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
            .then(res => {
                this.setState({
                    recentLeaders: res.data
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.recentLeaders && <LeaderRow/>}
            </div>
        )
    }
}

export default LeaderboardTable