import * as React from 'react';
import Section from '../Section';
import ProductScreenshot from './Screenshot';
import ProductSpec from './Spec';
import { Base } from '@fewbox/react-components';

export enum ProductType {
    Normal,
    FullRow
}

export enum TextAlignType {
    Left,
    Right,
    Center
}

export interface Feature {
    name: JSX.Element;
    descriptions: JSX.Element[];
    image: JSX.Element;
    moreCaption?: JSX.Element;
    morePath?: string;
}

export interface IProductProps {
    type: ProductType;
    title: JSX.Element;
    description: JSX.Element;
    features: Feature[];
}

export default class Product extends React.Component<IProductProps, any> {
    public render() {
        return (
            <div className="fb-product">
                <Section title={this.props.title} description={this.props.description} />
                {!!this.props.features && this.props.features.map((feature, featureIndex) => {
                    let featureRow;
                    switch (this.props.type) {
                        case ProductType.Normal:
                            featureRow = <Base.Layout.Row key={`feature${featureIndex}`}>
                                <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={1} />
                                <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={(featureIndex % 2 == 0) ? 4 : 6}>
                                    {!!(featureIndex % 2 == 0) ? <ProductScreenshot textAlignType={TextAlignType.Right} image={feature.image} /> : <ProductSpec textAlignType={TextAlignType.Right} name={feature.name} descriptions={feature.descriptions} morePath={feature.morePath} moreCaption={feature.moreCaption} />}
                                </Base.Layout.Col>
                                <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={(featureIndex % 2 == 0) ? 6 : 4}>
                                    {!!(featureIndex % 2 == 0) ? <ProductSpec textAlignType={TextAlignType.Left} name={feature.name} descriptions={feature.descriptions} morePath={feature.morePath} moreCaption={feature.moreCaption} /> : <ProductScreenshot textAlignType={TextAlignType.Left} image={feature.image} />}
                                </Base.Layout.Col>
                                <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={1} />
                            </Base.Layout.Row>
                            break;
                        case ProductType.FullRow:
                            featureRow = <Base.Layout.Row key={`feature${featureIndex}`}>
                                <Base.Layout.Row>
                                    <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={1}></Base.Layout.Col>
                                    <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={10}>
                                        <ProductScreenshot textAlignType={TextAlignType.Center} image={feature.image} />
                                    </Base.Layout.Col>
                                    <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={1}></Base.Layout.Col>
                                </Base.Layout.Row>
                                <Base.Layout.Row>
                                    <Base.Layout.Col type={Base.Layout.ColType.Medium} columnCount={12}>
                                        <ProductSpec textAlignType={TextAlignType.Center} name={feature.name} descriptions={feature.descriptions} morePath={feature.morePath} moreCaption={feature.moreCaption} />
                                    </Base.Layout.Col>
                                </Base.Layout.Row>
                            </Base.Layout.Row>
                            break;
                        default:
                            featureRow = <Base.Layout.Row key={`feature${featureIndex}`}></Base.Layout.Row>;
                            break;
                    }
                    return featureRow;
                })}
            </div>
        );
    }
}