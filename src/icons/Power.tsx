import { PowerIcon as PowerBoldIcon } from "../bold/Power";
import { PowerIcon as PowerDuotoneIcon } from "../duotone/Power";
import { PowerIcon as PowerFillIcon } from "../fill/Power";
import { PowerIcon as PowerLightIcon } from "../light/Power";
import { PowerIcon as PowerRegularIcon } from "../regular/Power";
import { PowerIcon as PowerThinIcon } from "../thin/Power";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: PowerThinIcon,
	light: PowerLightIcon,
	regular: PowerRegularIcon,
	bold: PowerBoldIcon,
	fill: PowerFillIcon,
	duotone: PowerDuotoneIcon,
} as const;

export function PowerIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { PowerIcon as Power };
