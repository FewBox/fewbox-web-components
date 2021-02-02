import * as React from 'react';
import Section from '../Section';
import Card from './Card';
import { Base } from '@fewbox/react-components';

export interface Feature {
    icon: JSX.Element;
    title: JSX.Element;
    description: JSX.Element;
    moreCaption?: JSX.Element;
    morePath?: string;
}

export interface IFeatureGalleryProps {
    title: JSX.Element;
    description: JSX.Element;
    features: Feature[];
}

export default class FeatureGallery extends React.Component<IFeatureGalleryProps, any> {
    public render() {
        let colCount = 3;
        let rowCount = Math.ceil(this.props.features.length / colCount);
        let rows: JSX.Element[] = [];
        let featureIndex = 1;
        for (let rowIndex = 1; rowIndex <= rowCount; rowIndex++) {
            let cols: JSX.Element[] = [];
            for (let colIndex = 1; colIndex <= colCount; colIndex++) {
                if (featureIndex <= this.props.features.length) {
                    let col = <Base.Layout.Col key={`featureRow${rowIndex}Col${colIndex}`} type={Base.Layout.ColType.Medium} columnCount={12 / colCount}>
                        <Card feature={this.props.features[featureIndex - 1]} />
                    </Base.Layout.Col>;
                    cols.push(col);
                    featureIndex++;
                }
            }
            let row = <Base.Layout.Row key={`featureRow${rowIndex}`} textAlignType={Base.Layout.TextAlignType.Center}>
                {cols}
            </Base.Layout.Row>;
            rows.push(row);
        }
        return (
            <div className="fb-feature-gallery">
                <Section title={this.props.title} description={this.props.description} />
                {rows.map((row, rowIndex) => {
                    return row;
                })}
            </div>
        );
    }
}