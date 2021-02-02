import * as React from 'react';
import Section from '../Section';
import Card from './Card';
import { Base } from '@fewbox/react-components';

export interface SocialAccount {
    icon: JSX.Element;
    link: string;
}

export interface TeamMember {
    avatar: JSX.Element;
    title: JSX.Element;
    description?: JSX.Element;
    socialAccounts?: SocialAccount[];
}

export interface ITeamProps {
    title: JSX.Element;
    description: JSX.Element;
    teamMembers: TeamMember[];
}

export default class Team extends React.Component<ITeamProps, any> {
    public render() {
        let colCount = 3;
        let rowCount = Math.ceil(this.props.teamMembers.length / colCount);
        let rows: JSX.Element[] = [];
        let teamMemberIndex = 1;
        for (let rowIndex = 1; rowIndex <= rowCount; rowIndex++) {
            let cols: JSX.Element[] = [];
            for (let colIndex = 1; colIndex <= colCount; colIndex++) {
                if (teamMemberIndex <= this.props.teamMembers.length) {
                    let col = <Base.Layout.Col key={`teamMemberRow${rowIndex}Col${colIndex}`} type={Base.Layout.ColType.Medium} columnCount={12 / colCount}>
                        <Card teamMember={this.props.teamMembers[teamMemberIndex - 1]} />
                    </Base.Layout.Col>;
                    cols.push(col);
                    teamMemberIndex++;
                }
            }
            let row = <Base.Layout.Row key={`teamMemberRow${rowIndex}`} textAlignType={Base.Layout.TextAlignType.Center}>
                {cols}
            </Base.Layout.Row>;
            rows.push(row);
        }
        return (
            <div className="fb-team">
                <Section title={this.props.title} description={this.props.description} />
                {rows.map((row, rowIndex) => {
                    return row;
                })}
            </div>
        );
    }
}