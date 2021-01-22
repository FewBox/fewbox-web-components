import * as React from 'react';
import * as FewBox from '@fewbox/react-components';

export interface ISectionProps {
    title: JSX.Element;
    description: JSX.Element;
}

export default class Section extends React.Component<ISectionProps, any> {
    public render() {
        return (
            <div className="fb-section">
                <FewBox.Layout.Row textAlignType={FewBox.Layout.RowTextAlignType.Center}>
                    <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={2} />
                    <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={8}>
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                    </FewBox.Layout.Col>
                    <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={2} />
                </FewBox.Layout.Row>
            </div>
        );
    }
}