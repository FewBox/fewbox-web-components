import _Header from './Header';
import _Footer from './Footer';
import _Pricing, { LicenseType as _LicenseType, PaypalEnvironmentType as _PaypalEnvironmentType  }  from './Pricing';
import _Nav from './Nav';
import _Trusted from './Trusted';
import _Promo, { PromoType as _PromoType } from './Promo';
import _Product from './Product';

export namespace Official {
    export const Header = _Header;
    export const Nav = _Nav;
    export const Pricing = _Pricing;
    export const LicenseType = _LicenseType;
    export const PaypalEnvironmentType = _PaypalEnvironmentType;
    export const Footer = _Footer;
    export const Trusted = _Trusted;
    export const Promo = _Promo;
    export const PromoType = _PromoType;
    export const Product = _Product;
}