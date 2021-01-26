import * as React from 'react';
import Section from '../Section';
import ProductScreenshot from './Screenshot';
import ProductSpec from './Spec';
import * as FewBox from '@fewbox/react-components';

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
                            featureRow = <FewBox.Layout.Row key={`feature${featureIndex}`}>
                                <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={1} />
                                <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={(featureIndex % 2 == 0) ? 4 : 6}>
                                    {!!(featureIndex % 2 == 0) ? <ProductScreenshot textAlignType={TextAlignType.Right} image={feature.image} /> : <ProductSpec textAlignType={TextAlignType.Right} name={feature.name} descriptions={feature.descriptions} morePath={feature.morePath} moreCaption={feature.moreCaption} />}
                                </FewBox.Layout.Col>
                                <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={(featureIndex % 2 == 0) ? 6 : 4}>
                                    {!!(featureIndex % 2 == 0) ? <ProductSpec textAlignType={TextAlignType.Left} name={feature.name} descriptions={feature.descriptions} morePath={feature.morePath} moreCaption={feature.moreCaption} /> : <ProductScreenshot textAlignType={TextAlignType.Left} image={feature.image} />}
                                </FewBox.Layout.Col>
                                <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={1} />
                            </FewBox.Layout.Row>
                            break;
                        case ProductType.FullRow:
                            featureRow = <FewBox.Layout.Row key={`feature${featureIndex}`}>
                                <FewBox.Layout.Row>
                                    <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={12}>
                                        <ProductScreenshot textAlignType={TextAlignType.Center} image={feature.image} />
                                    </FewBox.Layout.Col>
                                </FewBox.Layout.Row>
                                <FewBox.Layout.Row>
                                    <FewBox.Layout.Col type={FewBox.Layout.ColType.Medium} columnCount={12}>
                                        <ProductSpec textAlignType={TextAlignType.Center} name={feature.name} descriptions={feature.descriptions} morePath={feature.morePath} moreCaption={feature.moreCaption} />
                                    </FewBox.Layout.Col>
                                </FewBox.Layout.Row>
                            </FewBox.Layout.Row>
                            break;
                        default:
                            featureRow = <FewBox.Layout.Row key={`feature${featureIndex}`}></FewBox.Layout.Row>;
                            break;
                    }
                    return featureRow;
                })}
            </div>
        );
    }
}