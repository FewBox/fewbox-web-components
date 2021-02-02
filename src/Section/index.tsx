import * as React from 'react';
import { Base } from '@fewbox/react-components';

export interface ISectionProps {
    title: JSX.Element;
    description: JSX.Element;
}

export default class Section extends React.Component<ISectionProps, any> {
    public render() {
        return (
            <div className="fb-section">
                <Base.Layout.Row textAlignType={Base.Layout.TextAlignType.Center}>
                    <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={2} />
                    <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={8}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                    </Base.Layout.Col>
                    <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={2} />
                </Base.Layout.Row>
            </div>
        );
    }
}