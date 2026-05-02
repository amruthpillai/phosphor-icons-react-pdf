import { VisorIcon as VisorBoldIcon } from "../bold/Visor";
import { VisorIcon as VisorDuotoneIcon } from "../duotone/Visor";
import { VisorIcon as VisorFillIcon } from "../fill/Visor";
import { VisorIcon as VisorLightIcon } from "../light/Visor";
import { VisorIcon as VisorRegularIcon } from "../regular/Visor";
import { VisorIcon as VisorThinIcon } from "../thin/Visor";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: VisorThinIcon,
	light: VisorLightIcon,
	regular: VisorRegularIcon,
	bold: VisorBoldIcon,
	fill: VisorFillIcon,
	duotone: VisorDuotoneIcon,
} as const;

export function VisorIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { VisorIcon as Visor };
