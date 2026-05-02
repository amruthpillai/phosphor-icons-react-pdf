import { TireIcon as TireBoldIcon } from "../bold/Tire";
import { TireIcon as TireDuotoneIcon } from "../duotone/Tire";
import { TireIcon as TireFillIcon } from "../fill/Tire";
import { TireIcon as TireLightIcon } from "../light/Tire";
import { TireIcon as TireRegularIcon } from "../regular/Tire";
import { TireIcon as TireThinIcon } from "../thin/Tire";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TireThinIcon,
	light: TireLightIcon,
	regular: TireRegularIcon,
	bold: TireBoldIcon,
	fill: TireFillIcon,
	duotone: TireDuotoneIcon,
} as const;

export function TireIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TireIcon as Tire };
