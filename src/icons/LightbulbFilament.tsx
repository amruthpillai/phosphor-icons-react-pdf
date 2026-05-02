import { LightbulbFilamentIcon as LightbulbFilamentBoldIcon } from "../bold/LightbulbFilament";
import { LightbulbFilamentIcon as LightbulbFilamentDuotoneIcon } from "../duotone/LightbulbFilament";
import { LightbulbFilamentIcon as LightbulbFilamentFillIcon } from "../fill/LightbulbFilament";
import { LightbulbFilamentIcon as LightbulbFilamentLightIcon } from "../light/LightbulbFilament";
import { LightbulbFilamentIcon as LightbulbFilamentRegularIcon } from "../regular/LightbulbFilament";
import { LightbulbFilamentIcon as LightbulbFilamentThinIcon } from "../thin/LightbulbFilament";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: LightbulbFilamentThinIcon,
	light: LightbulbFilamentLightIcon,
	regular: LightbulbFilamentRegularIcon,
	bold: LightbulbFilamentBoldIcon,
	fill: LightbulbFilamentFillIcon,
	duotone: LightbulbFilamentDuotoneIcon,
} as const;

export function LightbulbFilamentIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { LightbulbFilamentIcon as LightbulbFilament };
