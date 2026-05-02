import { LightbulbIcon as LightbulbBoldIcon } from "../bold/Lightbulb";
import { LightbulbIcon as LightbulbDuotoneIcon } from "../duotone/Lightbulb";
import { LightbulbIcon as LightbulbFillIcon } from "../fill/Lightbulb";
import { LightbulbIcon as LightbulbLightIcon } from "../light/Lightbulb";
import { LightbulbIcon as LightbulbRegularIcon } from "../regular/Lightbulb";
import { LightbulbIcon as LightbulbThinIcon } from "../thin/Lightbulb";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LightbulbThinIcon,
	light: LightbulbLightIcon,
	regular: LightbulbRegularIcon,
	bold: LightbulbBoldIcon,
	fill: LightbulbFillIcon,
	duotone: LightbulbDuotoneIcon,
} as const;

export function LightbulbIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LightbulbIcon as Lightbulb };
