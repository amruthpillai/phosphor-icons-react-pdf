import { MicrosoftExcelLogoIcon as MicrosoftExcelLogoBoldIcon } from "../bold/MicrosoftExcelLogo";
import { MicrosoftExcelLogoIcon as MicrosoftExcelLogoDuotoneIcon } from "../duotone/MicrosoftExcelLogo";
import { MicrosoftExcelLogoIcon as MicrosoftExcelLogoFillIcon } from "../fill/MicrosoftExcelLogo";
import { MicrosoftExcelLogoIcon as MicrosoftExcelLogoLightIcon } from "../light/MicrosoftExcelLogo";
import { MicrosoftExcelLogoIcon as MicrosoftExcelLogoRegularIcon } from "../regular/MicrosoftExcelLogo";
import { MicrosoftExcelLogoIcon as MicrosoftExcelLogoThinIcon } from "../thin/MicrosoftExcelLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: MicrosoftExcelLogoThinIcon,
	light: MicrosoftExcelLogoLightIcon,
	regular: MicrosoftExcelLogoRegularIcon,
	bold: MicrosoftExcelLogoBoldIcon,
	fill: MicrosoftExcelLogoFillIcon,
	duotone: MicrosoftExcelLogoDuotoneIcon,
} as const;

export function MicrosoftExcelLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { MicrosoftExcelLogoIcon as MicrosoftExcelLogo };
