import { TentIcon as TentBoldIcon } from "../bold/Tent";
import { TentIcon as TentDuotoneIcon } from "../duotone/Tent";
import { TentIcon as TentFillIcon } from "../fill/Tent";
import { TentIcon as TentLightIcon } from "../light/Tent";
import { TentIcon as TentRegularIcon } from "../regular/Tent";
import { TentIcon as TentThinIcon } from "../thin/Tent";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TentThinIcon,
	light: TentLightIcon,
	regular: TentRegularIcon,
	bold: TentBoldIcon,
	fill: TentFillIcon,
	duotone: TentDuotoneIcon,
} as const;

export function TentIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TentIcon as Tent };
