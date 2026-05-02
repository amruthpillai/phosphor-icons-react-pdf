import { InfoIcon as InfoBoldIcon } from "../bold/Info";
import { InfoIcon as InfoDuotoneIcon } from "../duotone/Info";
import { InfoIcon as InfoFillIcon } from "../fill/Info";
import { InfoIcon as InfoLightIcon } from "../light/Info";
import { InfoIcon as InfoRegularIcon } from "../regular/Info";
import { InfoIcon as InfoThinIcon } from "../thin/Info";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: InfoThinIcon,
	light: InfoLightIcon,
	regular: InfoRegularIcon,
	bold: InfoBoldIcon,
	fill: InfoFillIcon,
	duotone: InfoDuotoneIcon,
} as const;

export function InfoIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { InfoIcon as Info };
