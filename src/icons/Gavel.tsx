import { GavelIcon as GavelBoldIcon } from "../bold/Gavel";
import { GavelIcon as GavelDuotoneIcon } from "../duotone/Gavel";
import { GavelIcon as GavelFillIcon } from "../fill/Gavel";
import { GavelIcon as GavelLightIcon } from "../light/Gavel";
import { GavelIcon as GavelRegularIcon } from "../regular/Gavel";
import { GavelIcon as GavelThinIcon } from "../thin/Gavel";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GavelThinIcon,
	light: GavelLightIcon,
	regular: GavelRegularIcon,
	bold: GavelBoldIcon,
	fill: GavelFillIcon,
	duotone: GavelDuotoneIcon,
} as const;

export function GavelIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GavelIcon as Gavel };
