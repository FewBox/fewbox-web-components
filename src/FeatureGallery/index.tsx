import * as React from 'react';
import Section from '../Section';
import Card from './Card';
import * as FewBox from '@fewbox/react-components';

export interface Feature {
    icon: JSX.Element;
    title: string;
    description: string;
    moreCaption?: string;
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
                    let col = <FewBox.Layout.Col key={`featureRow${rowIndex}Col${colIndex}`} type={FewBox.Layout.ColType.Medium} columnCount={12 / colCount}>
                        <Card feature={this.props.features[featureIndex - 1]} />
                    </FewBox.Layout.Col>;
                    cols.push(col);
                    featureIndex++;
                }
            }
            let row = <FewBox.Layout.Row key={`featureRow${rowIndex}`} textAlignType={FewBox.Layout.RowTextAlignType.Center}>
                {cols}
            </FewBox.Layout.Row>;
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