import * as React from 'react';
import Section from '../Section';
import Card from './Card';
import * as FewBox from '@fewbox/react-components';

export interface TeamMember {
    avatar: JSX.Element;
    title: string;
    description: string;
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
                    let col = <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={12 / colCount}>
                        <Card teamMember={this.props.teamMembers[teamMemberIndex - 1]} />
                    </FewBox.Layout.Col>;
                    cols.push(col);
                    teamMemberIndex++;
                }
            }
            let row = <FewBox.Layout.Row key={`teamMemberRow${rowIndex}`} textAlignType={FewBox.Layout.RowTextAlignType.Center}>
                {cols}
            </FewBox.Layout.Row>;
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