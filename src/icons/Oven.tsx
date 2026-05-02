import { OvenIcon as OvenBoldIcon } from "../bold/Oven";
import { OvenIcon as OvenDuotoneIcon } from "../duotone/Oven";
import { OvenIcon as OvenFillIcon } from "../fill/Oven";
import { OvenIcon as OvenLightIcon } from "../light/Oven";
import { OvenIcon as OvenRegularIcon } from "../regular/Oven";
import { OvenIcon as OvenThinIcon } from "../thin/Oven";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: OvenThinIcon,
	light: OvenLightIcon,
	regular: OvenRegularIcon,
	bold: OvenBoldIcon,
	fill: OvenFillIcon,
	duotone: OvenDuotoneIcon,
} as const;

export function OvenIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { OvenIcon as Oven };
