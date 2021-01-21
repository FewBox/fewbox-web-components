import * as React from 'react';
import Hero from '../Hero';
import Card from './Card';
import * as FewBox from '@fewbox/react-components';

export interface Feature {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface IFeatureGalleryProps {
    heroTitle: JSX.Element;
    heroBody: JSX.Element;
    features: Feature[];
}

export default class FeatureGallery extends React.Component<IFeatureGalleryProps, any> {
    public render() {
        let colCount = 3;
        let rowCount = Math.ceil(this.props.features.length / colCount);
        let rows = [];
        for (var rowIndex = 1; rowIndex < rowCount; rowIndex++) {
            <FewBox.Layout.Row key={`featureRow${rowIndex}`}>
                <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={12/colCount}>
                    <Card />
                </FewBox.Layout.Col>
            </FewBox.Layout.Row>
        }
        return (
            <div className="fb-feature">
                <Hero title={this.props.heroTitle} body={this.props.heroBody} />
                {rows.map((row, rowIndex) => {
                    return row;
                })}
            </div>
        );
    }
}