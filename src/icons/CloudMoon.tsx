import { CloudMoonIcon as CloudMoonBoldIcon } from "../bold/CloudMoon";
import { CloudMoonIcon as CloudMoonDuotoneIcon } from "../duotone/CloudMoon";
import { CloudMoonIcon as CloudMoonFillIcon } from "../fill/CloudMoon";
import { CloudMoonIcon as CloudMoonLightIcon } from "../light/CloudMoon";
import { CloudMoonIcon as CloudMoonRegularIcon } from "../regular/CloudMoon";
import { CloudMoonIcon as CloudMoonThinIcon } from "../thin/CloudMoon";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CloudMoonThinIcon,
	light: CloudMoonLightIcon,
	regular: CloudMoonRegularIcon,
	bold: CloudMoonBoldIcon,
	fill: CloudMoonFillIcon,
	duotone: CloudMoonDuotoneIcon,
} as const;

export function CloudMoonIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CloudMoonIcon as CloudMoon };
