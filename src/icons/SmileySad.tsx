import { SmileySadIcon as SmileySadBoldIcon } from "../bold/SmileySad";
import { SmileySadIcon as SmileySadDuotoneIcon } from "../duotone/SmileySad";
import { SmileySadIcon as SmileySadFillIcon } from "../fill/SmileySad";
import { SmileySadIcon as SmileySadLightIcon } from "../light/SmileySad";
import { SmileySadIcon as SmileySadRegularIcon } from "../regular/SmileySad";
import { SmileySadIcon as SmileySadThinIcon } from "../thin/SmileySad";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SmileySadThinIcon,
	light: SmileySadLightIcon,
	regular: SmileySadRegularIcon,
	bold: SmileySadBoldIcon,
	fill: SmileySadFillIcon,
	duotone: SmileySadDuotoneIcon,
} as const;

export function SmileySadIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SmileySadIcon as SmileySad };
