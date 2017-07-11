import React from 'react';

class LeaderHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {

    }

    render() {
        return (
            <thead>
            <tr className="topRow">
                <th className="ranking">Ranking</th>
                <th className="user">User</th>
                <th className="recent"><a className="button" onClick={this.handleClick}>Points Last 30 Days \/</a></th>
                <th className="allTime"><a className="button" onClick={this.handleClick}>Points All Time</a></th>
            </tr>
            </thead>
        )
    }
}

export default LeaderHeader;