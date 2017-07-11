import React from 'react';
import LeaderRow from './LeaderRow.js';

class LeaderBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tbody>
            {this.props.leaders
                .map((leader, index) => {
                    return <LeaderRow leader={leader} key={leader.uusername} rank={index + 1}/>
                })}
            </tbody>
        )
    }
}

export default LeaderBody;