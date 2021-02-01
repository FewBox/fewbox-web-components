import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import * as FewBox from '../src/index';
import LogoSvg from '../assets/svgs/logo.svg';
import { Base } from '@fewbox/react-components';
import { Web } from '../src/next';

export interface IHomePageProps {
}

class HomePage extends React.Component<IHomePageProps, any> {
  public render() {
    return (
      <div>
        <Base.Analyze.GA trackingId="UA-132759085-1" isDebug={true} />
        <Base.Container>
          <Web.UI.Header logo={<LogoSvg />} slogan="Plugin Cloud">
            <Web.UI.Nav extensionNavLinks={[
              { path: 'feature', caption: <FormattedMessage id="Link.Feature" /> },
              { path: 'pricing', caption: <FormattedMessage id="Link.Pricing" /> }]} />
          </Web.UI.Header>
          <Web.UI.Promo type={FewBox.Official.PromoType.Wistia} />
          <Web.UI.Trusted caption={<FormattedMessage id="Label.Trusted" />} clients={[{ name: <FormattedMessage id="Label.Brand" />, logo: <LogoSvg /> }, { name: <FormattedMessage id="Label.Brand" />, logo: <LogoSvg /> }, { name: <FormattedMessage id="Label.Brand" />, logo: <LogoSvg /> }]} />
          <Web.UI.Pricing registerUrl="#" currenty="$" paypalEnvironment={Web.UI.PricingPaypalEnvironmentType.Sandbox} paypalBusinessCode="GM5YEYHLR3XQL"
            prices={[
              { isRecommended: false, licenseType: Web.UI.PricingLicenseType.Free, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, discountedPrice: "0", description: <p><b>Free</b> download the kubernetes version and use them <b>Now</b></p> },
              {
                isRecommended: false, licenseType: Web.UI.PricingLicenseType.Monthly, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, originalPrice: "39.9", discountedPrice: "19.9", description: <div><p><b>Customized</b> search filter support</p>
                  <p>Sync the search filter on cloud</p></div>
              },
              {
                isRecommended: true, licenseType: Web.UI.PricingLicenseType.Yearly, licenseCaption: <FormattedMessage id="Label.FreeLicense" />, originalPrice: "478.8", discountedPrice: "199.9", description: <div><p><b>Customized</b> search filter support</p>
                  <p>Sync the search filter on cloud</p></div>
              }
            ]} />
        </Base.Container>
        <Web.UI.Footer logo={<LogoSvg />} copyrightCaption={<FormattedMessage id="Label.Copyright" />} />
      </div>
    );
  }
}

export default HomePage;
