import * as React from 'react';
import { TeamMember } from '..';

export interface ITeamCardProps {
    teamMember: TeamMember;
}

export default class TeamCard extends React.Component<ITeamCardProps, any> {
    public render() {
        return (
            <div className="fb-team-card">
                <div className="icon">{this.props.teamMember.avatar}</div>
                <h3>{this.props.teamMember.title}</h3>
                <p>{this.props.teamMember.description}</p>
            </div>
        );
    }
}