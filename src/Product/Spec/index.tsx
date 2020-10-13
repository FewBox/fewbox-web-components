import * as React from 'react';
import { TextAlignType } from '../index';

export interface IProductSpecProps {
    textAlignType: TextAlignType;
    name: JSX.Element;
    descriptions: JSX.Element[];
}

export default class ProductSpec extends React.Component<IProductSpecProps, any> {
    public render() {
        let className = 'spec';
        if (this.props.textAlignType == TextAlignType.Left) {
            className += ' spec-left';
        }
        else {
            className += ' spec-right';
        }
        return (
            <div className={className}>
                <div>
                    {this.props.name}
                </div>
                <div>
                    {!!this.props.descriptions && this.props.descriptions.map((description, descriptionIndex) => {
                        return <div key={`description${descriptionIndex}`}>{description}</div>;
                    })}
                </div>
            </div>
        );
    }
}