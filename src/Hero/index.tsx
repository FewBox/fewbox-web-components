import * as React from 'react';
import * as FewBox from '@fewbox/react-components';

export interface IHeroProps {
    title: JSX.Element;
    body: JSX.Element;
}

export default class Hero extends React.Component<IHeroProps, any> {
    public render() {
        return (
            <div className="fb-hero">
                <FewBox.Layout.Row>
                    <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={2} />
                    <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={8}>
                        <h1>{this.props.title}</h1>
                        <p className="body">{this.props.body}</p>
                    </FewBox.Layout.Col>
                    <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={2} />
                </FewBox.Layout.Row>
            </div>
        );
    }
}