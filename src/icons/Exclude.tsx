import { ExcludeIcon as ExcludeBoldIcon } from "../bold/Exclude";
import { ExcludeIcon as ExcludeDuotoneIcon } from "../duotone/Exclude";
import { ExcludeIcon as ExcludeFillIcon } from "../fill/Exclude";
import { ExcludeIcon as ExcludeLightIcon } from "../light/Exclude";
import { ExcludeIcon as ExcludeRegularIcon } from "../regular/Exclude";
import { ExcludeIcon as ExcludeThinIcon } from "../thin/Exclude";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ExcludeThinIcon,
	light: ExcludeLightIcon,
	regular: ExcludeRegularIcon,
	bold: ExcludeBoldIcon,
	fill: ExcludeFillIcon,
	duotone: ExcludeDuotoneIcon,
} as const;

export function ExcludeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ExcludeIcon as Exclude };
