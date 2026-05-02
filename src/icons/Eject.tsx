import { EjectIcon as EjectBoldIcon } from "../bold/Eject";
import { EjectIcon as EjectDuotoneIcon } from "../duotone/Eject";
import { EjectIcon as EjectFillIcon } from "../fill/Eject";
import { EjectIcon as EjectLightIcon } from "../light/Eject";
import { EjectIcon as EjectRegularIcon } from "../regular/Eject";
import { EjectIcon as EjectThinIcon } from "../thin/Eject";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EjectThinIcon,
	light: EjectLightIcon,
	regular: EjectRegularIcon,
	bold: EjectBoldIcon,
	fill: EjectFillIcon,
	duotone: EjectDuotoneIcon,
} as const;

export function EjectIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EjectIcon as Eject };
