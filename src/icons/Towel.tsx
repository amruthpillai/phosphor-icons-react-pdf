import { TowelIcon as TowelBoldIcon } from "../bold/Towel";
import { TowelIcon as TowelDuotoneIcon } from "../duotone/Towel";
import { TowelIcon as TowelFillIcon } from "../fill/Towel";
import { TowelIcon as TowelLightIcon } from "../light/Towel";
import { TowelIcon as TowelRegularIcon } from "../regular/Towel";
import { TowelIcon as TowelThinIcon } from "../thin/Towel";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TowelThinIcon,
	light: TowelLightIcon,
	regular: TowelRegularIcon,
	bold: TowelBoldIcon,
	fill: TowelFillIcon,
	duotone: TowelDuotoneIcon,
} as const;

export function TowelIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TowelIcon as Towel };
