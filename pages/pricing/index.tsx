import * as React from 'react';
import { FormattedMessage, IntlProvider } from 'react-intl';
import * as FewBox from '../../src/next';
import langs from '../../langs';
import LogoSvg from '../../assets/svgs/logo.svg';

export interface IPricingPageProps {
}

class PricingPage extends React.Component<IPricingPageProps, any> {
  public render() {
    return (
      <IntlProvider locale={'en'} messages={langs('en-us')}>
        <FewBox.Analyze.GA path={(typeof(window)=='object')?window.location.pathname:'unknow'} trackingId="UA-132759085-1" isDebug={true} app="components-demo" />
        <FewBox.Common.Container>
          <FewBox.Official.Header logo={<LogoSvg />} slogan="Plugin Cloud">
            <FewBox.Official.Nav donateLink={<FormattedMessage id="Link.Donate" />} extensionNavLinks={[
              { path: 'feature', caption: <FormattedMessage id="Link.Feature" /> },
              { path: 'pricing', caption: <FormattedMessage id="Link.Pricing" /> }]} />
          </FewBox.Official.Header>
          <FewBox.Official.Pricing heroTitle={<FormattedMessage id="Label.PricingTitle" />} heroBody={<FormattedMessage id="Label.PricingBody" />} registerUrl="#" currenty="$" paypalEnvironment={FewBox.Official.PaypalEnvironmentType.Sandbox} paypalBusinessCode="GM5YEYHLR3XQL"
            prices={[
              { isRecommended: false, licenseType: FewBox.Official.LicenseType.Free, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, discountedPrice: "0", description: <p><b>Free</b> download the kubernetes version and use them <b>Now</b></p> },
              {
                isRecommended: false, licenseType: FewBox.Official.LicenseType.Monthly, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, originalPrice: "39.9", discountedPrice: "19.9", description: <div><p><b>Customized</b> search filter support</p>
                  <p>Sync the search filter on cloud</p></div>
              },
              {
                isRecommended: true, licenseType: FewBox.Official.LicenseType.Yearly, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, originalPrice: "478.8", discountedPrice: "199.9", description: <div><p><b>Customized</b> search filter support</p>
                  <p>Sync the search filter on cloud</p></div>
              }
            ]} />
        </FewBox.Common.Container>
        <FewBox.Official.Footer logo={<LogoSvg />} copyrightCaption={<FormattedMessage id="Label.Copyright" />} />
      </IntlProvider>
    );
  }
}

export default PricingPage;
