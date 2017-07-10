import React from 'react';

class LeaderRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr className="row">
                <td className="ranking">{this.props.rank}</td>
                <td className="user">
                    <a href={this.props.leader.username}>
                        <img src={this.props.leader.img}/>
                        <p>{this.props.leader.username}</p>
                    </a>
                </td>
                <td className="recent">{this.props.leader.recent}</td>
                <td className="allTime">{this.props.leader.alltime}</td>
            </tr>
        )
    }
}

export default LeaderRow;