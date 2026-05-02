import { GlobeIcon as GlobeBoldIcon } from "../bold/Globe";
import { GlobeIcon as GlobeDuotoneIcon } from "../duotone/Globe";
import { GlobeIcon as GlobeFillIcon } from "../fill/Globe";
import { GlobeIcon as GlobeLightIcon } from "../light/Globe";
import { GlobeIcon as GlobeRegularIcon } from "../regular/Globe";
import { GlobeIcon as GlobeThinIcon } from "../thin/Globe";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GlobeThinIcon,
	light: GlobeLightIcon,
	regular: GlobeRegularIcon,
	bold: GlobeBoldIcon,
	fill: GlobeFillIcon,
	duotone: GlobeDuotoneIcon,
} as const;

export function GlobeIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GlobeIcon as Globe };
