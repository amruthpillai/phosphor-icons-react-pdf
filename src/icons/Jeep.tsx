import { JeepIcon as JeepBoldIcon } from "../bold/Jeep";
import { JeepIcon as JeepDuotoneIcon } from "../duotone/Jeep";
import { JeepIcon as JeepFillIcon } from "../fill/Jeep";
import { JeepIcon as JeepLightIcon } from "../light/Jeep";
import { JeepIcon as JeepRegularIcon } from "../regular/Jeep";
import { JeepIcon as JeepThinIcon } from "../thin/Jeep";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: JeepThinIcon,
	light: JeepLightIcon,
	regular: JeepRegularIcon,
	bold: JeepBoldIcon,
	fill: JeepFillIcon,
	duotone: JeepDuotoneIcon,
} as const;

export function JeepIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { JeepIcon as Jeep };
