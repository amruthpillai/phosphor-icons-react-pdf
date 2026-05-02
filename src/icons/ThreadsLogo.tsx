import { ThreadsLogoIcon as ThreadsLogoBoldIcon } from "../bold/ThreadsLogo";
import { ThreadsLogoIcon as ThreadsLogoDuotoneIcon } from "../duotone/ThreadsLogo";
import { ThreadsLogoIcon as ThreadsLogoFillIcon } from "../fill/ThreadsLogo";
import { ThreadsLogoIcon as ThreadsLogoLightIcon } from "../light/ThreadsLogo";
import { ThreadsLogoIcon as ThreadsLogoRegularIcon } from "../regular/ThreadsLogo";
import { ThreadsLogoIcon as ThreadsLogoThinIcon } from "../thin/ThreadsLogo";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ThreadsLogoThinIcon,
	light: ThreadsLogoLightIcon,
	regular: ThreadsLogoRegularIcon,
	bold: ThreadsLogoBoldIcon,
	fill: ThreadsLogoFillIcon,
	duotone: ThreadsLogoDuotoneIcon,
} as const;

export function ThreadsLogoIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ThreadsLogoIcon as ThreadsLogo };
