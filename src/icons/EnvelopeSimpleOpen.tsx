import { EnvelopeSimpleOpenIcon as EnvelopeSimpleOpenBoldIcon } from "../bold/EnvelopeSimpleOpen";
import { EnvelopeSimpleOpenIcon as EnvelopeSimpleOpenDuotoneIcon } from "../duotone/EnvelopeSimpleOpen";
import { EnvelopeSimpleOpenIcon as EnvelopeSimpleOpenFillIcon } from "../fill/EnvelopeSimpleOpen";
import { EnvelopeSimpleOpenIcon as EnvelopeSimpleOpenLightIcon } from "../light/EnvelopeSimpleOpen";
import { EnvelopeSimpleOpenIcon as EnvelopeSimpleOpenRegularIcon } from "../regular/EnvelopeSimpleOpen";
import { EnvelopeSimpleOpenIcon as EnvelopeSimpleOpenThinIcon } from "../thin/EnvelopeSimpleOpen";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EnvelopeSimpleOpenThinIcon,
	light: EnvelopeSimpleOpenLightIcon,
	regular: EnvelopeSimpleOpenRegularIcon,
	bold: EnvelopeSimpleOpenBoldIcon,
	fill: EnvelopeSimpleOpenFillIcon,
	duotone: EnvelopeSimpleOpenDuotoneIcon,
} as const;

export function EnvelopeSimpleOpenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EnvelopeSimpleOpenIcon as EnvelopeSimpleOpen };
