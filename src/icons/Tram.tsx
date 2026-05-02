import { TramIcon as TramBoldIcon } from "../bold/Tram";
import { TramIcon as TramDuotoneIcon } from "../duotone/Tram";
import { TramIcon as TramFillIcon } from "../fill/Tram";
import { TramIcon as TramLightIcon } from "../light/Tram";
import { TramIcon as TramRegularIcon } from "../regular/Tram";
import { TramIcon as TramThinIcon } from "../thin/Tram";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TramThinIcon,
	light: TramLightIcon,
	regular: TramRegularIcon,
	bold: TramBoldIcon,
	fill: TramFillIcon,
	duotone: TramDuotoneIcon,
} as const;

export function TramIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TramIcon as Tram };
