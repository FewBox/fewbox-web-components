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
                <div className="title">{this.props.teamMember.title}</div>
                {!!this.props.teamMember.description && <div className="description">{this.props.teamMember.description}</div>}
                {!!this.props.teamMember.socialAccounts &&
                    <ul className="social">
                        {this.props.teamMember.socialAccounts.map((socialAccount, socialAccountIndex) => {
                            return <li key={`socialAccount${socialAccountIndex}`}><a href={socialAccount.link} target="_blank">{socialAccount.icon}</a></li>
                        })}
                    </ul>}
            </div>
        );
    }
}