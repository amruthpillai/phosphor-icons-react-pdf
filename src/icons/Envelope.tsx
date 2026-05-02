import { EnvelopeIcon as EnvelopeBoldIcon } from "../bold/Envelope";
import { EnvelopeIcon as EnvelopeDuotoneIcon } from "../duotone/Envelope";
import { EnvelopeIcon as EnvelopeFillIcon } from "../fill/Envelope";
import { EnvelopeIcon as EnvelopeLightIcon } from "../light/Envelope";
import { EnvelopeIcon as EnvelopeRegularIcon } from "../regular/Envelope";
import { EnvelopeIcon as EnvelopeThinIcon } from "../thin/Envelope";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EnvelopeThinIcon,
	light: EnvelopeLightIcon,
	regular: EnvelopeRegularIcon,
	bold: EnvelopeBoldIcon,
	fill: EnvelopeFillIcon,
	duotone: EnvelopeDuotoneIcon,
} as const;

export function EnvelopeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EnvelopeIcon as Envelope };
