import { CodesandboxLogoIcon as CodesandboxLogoBoldIcon } from "../bold/CodesandboxLogo";
import { CodesandboxLogoIcon as CodesandboxLogoDuotoneIcon } from "../duotone/CodesandboxLogo";
import { CodesandboxLogoIcon as CodesandboxLogoFillIcon } from "../fill/CodesandboxLogo";
import { CodesandboxLogoIcon as CodesandboxLogoLightIcon } from "../light/CodesandboxLogo";
import { CodesandboxLogoIcon as CodesandboxLogoRegularIcon } from "../regular/CodesandboxLogo";
import { CodesandboxLogoIcon as CodesandboxLogoThinIcon } from "../thin/CodesandboxLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CodesandboxLogoThinIcon,
	light: CodesandboxLogoLightIcon,
	regular: CodesandboxLogoRegularIcon,
	bold: CodesandboxLogoBoldIcon,
	fill: CodesandboxLogoFillIcon,
	duotone: CodesandboxLogoDuotoneIcon,
} as const;

export function CodesandboxLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CodesandboxLogoIcon as CodesandboxLogo };
