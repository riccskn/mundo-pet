import {BrandContainer, BrandLogo} from "./style.ts";
import Logo from "../../assets/brand_logo.png";

export function Brand() {
    return (
        <BrandContainer>
           <BrandLogo src={Logo} />
        </BrandContainer>
    )
}
