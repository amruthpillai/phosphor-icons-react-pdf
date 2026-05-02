import { EnvelopeSimpleIcon as EnvelopeSimpleBoldIcon } from "../bold/EnvelopeSimple";
import { EnvelopeSimpleIcon as EnvelopeSimpleDuotoneIcon } from "../duotone/EnvelopeSimple";
import { EnvelopeSimpleIcon as EnvelopeSimpleFillIcon } from "../fill/EnvelopeSimple";
import { EnvelopeSimpleIcon as EnvelopeSimpleLightIcon } from "../light/EnvelopeSimple";
import { EnvelopeSimpleIcon as EnvelopeSimpleRegularIcon } from "../regular/EnvelopeSimple";
import { EnvelopeSimpleIcon as EnvelopeSimpleThinIcon } from "../thin/EnvelopeSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EnvelopeSimpleThinIcon,
	light: EnvelopeSimpleLightIcon,
	regular: EnvelopeSimpleRegularIcon,
	bold: EnvelopeSimpleBoldIcon,
	fill: EnvelopeSimpleFillIcon,
	duotone: EnvelopeSimpleDuotoneIcon,
} as const;

export function EnvelopeSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EnvelopeSimpleIcon as EnvelopeSimple };
