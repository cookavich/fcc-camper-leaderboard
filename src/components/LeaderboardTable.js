import React from 'react';
import LeaderRow from 'LeaderRow.js';

class LeaderboardTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recentLeaders: [],
            test: 1
        };
    }

    componentDidMount() {
        axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
            .then(res => {
                this.setState({
                    recentLeaders: res
                })
            })
    }

    render() {
        return (
            <LeaderRow/>
        )
    }
}

export default LeaderboardTable