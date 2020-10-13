import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import * as FewBox from '../src/index';
import LogoSvg from '../assets/svgs/logo.svg';

export interface IHomePageProps {
}

class HomePage extends React.Component<IHomePageProps, any> {
  public render() {
    return (
      <div>
        <FewBox.Analyze.GA trackingId="UA-132759085-1" isDebug={true} />
        <FewBox.VI.Style />
        <FewBox.Common.Container>
          <FewBox.Official.Header logo={<LogoSvg />} slogan="Plugin Cloud">
            <FewBox.Official.Nav extensionNavLinks={[
              { path: 'feature', caption: <FormattedMessage id="Link.Feature" /> },
              { path: 'pricing', caption: <FormattedMessage id="Link.Pricing" /> }]} />
          </FewBox.Official.Header>
          <FewBox.Official.Promo type={FewBox.Official.PromoType.Wistia} />
          <FewBox.Official.Trusted caption={<FormattedMessage id="Label.Trusted" />} clients={[{ name: <FormattedMessage id="Label.Brand" />, logo: <LogoSvg /> }, { name: <FormattedMessage id="Label.Brand" />, logo: <LogoSvg /> }, { name: <FormattedMessage id="Label.Brand" />, logo: <LogoSvg /> }]} />
          <FewBox.Official.Pricing registerUrl="#" currenty="$" paypalEnvironment={FewBox.Official.PaypalEnvironmentType.Sandbox} paypalBusinessCode="GM5YEYHLR3XQL"
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
      </div>
    );
  }
}

export default HomePage;
