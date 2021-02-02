import * as React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import langs from '../../langs';
import LogoSvg from '../../assets/svgs/logo.svg';
import { Base } from '@fewbox/react-components';
import { Web } from '../../src/webpack';

export interface IPricingPageProps {
}

class PricingPage extends React.Component<IPricingPageProps, any> {
  public render() {
    return (
      <IntlProvider locale={'en'} messages={langs('en-us')}>
        <Base.Analyze.GA path={(typeof(window)=='object')?window.location.pathname:'unknow'} trackingId="UA-132759085-1" isDebug={true} app="components-demo" />
        <Base.Layout.Container>
          <Web.UI.Header logo={<LogoSvg />} slogan="Plugin Cloud">
            <Web.UI.Nav donateLink={<FormattedMessage id="Link.Donate" />} extensionNavLinks={[
              { path: 'feature', caption: <FormattedMessage id="Link.Feature" /> },
              { path: 'pricing', caption: <FormattedMessage id="Link.Pricing" /> }]} />
          </Web.UI.Header>
        </Base.Layout.Container>
        <Web.UI.Footer logo={<LogoSvg />} copyrightCaption={<FormattedMessage id="Label.Copyright" />} />
      </IntlProvider>
    );
  }
}

export default PricingPage;
