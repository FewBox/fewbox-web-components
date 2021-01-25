import Link from 'next/link';
import * as React from 'react';
import { TextAlignType } from '../index';

export interface IProductSpecProps {
    textAlignType: TextAlignType;
    name: JSX.Element;
    descriptions: JSX.Element[];
    moreCaption?: string;
    morePath?: string;
}

export default class ProductSpec extends React.Component<IProductSpecProps, any> {
    public render() {
        let className = 'spec';
        if (this.props.textAlignType == TextAlignType.Left) {
            className += ' spec-left';
        }
        else if (this.props.textAlignType == TextAlignType.Right) {
            className += ' spec-right';
        }
        else {
            className += ' spec-center';
        }
        return (
            <div className={className}>
                <div>
                    {this.props.name}
                </div>
                <div>
                    {!!this.props.descriptions && this.props.descriptions.map((description, descriptionIndex) => {
                        return <p key={`description${descriptionIndex}`}>{description}</p>;
                    })}
                </div>
                <div>
                    {!!this.props.morePath && <Link href={this.props.morePath}>
                        <a>{this.props.moreCaption}</a>
                    </Link>}
                </div>
            </div>
        );
    }
}