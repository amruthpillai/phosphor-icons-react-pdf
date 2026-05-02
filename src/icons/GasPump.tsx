import { GasPumpIcon as GasPumpBoldIcon } from "../bold/GasPump";
import { GasPumpIcon as GasPumpDuotoneIcon } from "../duotone/GasPump";
import { GasPumpIcon as GasPumpFillIcon } from "../fill/GasPump";
import { GasPumpIcon as GasPumpLightIcon } from "../light/GasPump";
import { GasPumpIcon as GasPumpRegularIcon } from "../regular/GasPump";
import { GasPumpIcon as GasPumpThinIcon } from "../thin/GasPump";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: GasPumpThinIcon,
	light: GasPumpLightIcon,
	regular: GasPumpRegularIcon,
	bold: GasPumpBoldIcon,
	fill: GasPumpFillIcon,
	duotone: GasPumpDuotoneIcon,
} as const;

export function GasPumpIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { GasPumpIcon as GasPump };
