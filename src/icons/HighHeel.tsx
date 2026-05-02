import { HighHeelIcon as HighHeelBoldIcon } from "../bold/HighHeel";
import { HighHeelIcon as HighHeelDuotoneIcon } from "../duotone/HighHeel";
import { HighHeelIcon as HighHeelFillIcon } from "../fill/HighHeel";
import { HighHeelIcon as HighHeelLightIcon } from "../light/HighHeel";
import { HighHeelIcon as HighHeelRegularIcon } from "../regular/HighHeel";
import { HighHeelIcon as HighHeelThinIcon } from "../thin/HighHeel";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HighHeelThinIcon,
	light: HighHeelLightIcon,
	regular: HighHeelRegularIcon,
	bold: HighHeelBoldIcon,
	fill: HighHeelFillIcon,
	duotone: HighHeelDuotoneIcon,
} as const;

export function HighHeelIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HighHeelIcon as HighHeel };
