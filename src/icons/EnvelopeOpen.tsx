import { EnvelopeOpenIcon as EnvelopeOpenBoldIcon } from "../bold/EnvelopeOpen";
import { EnvelopeOpenIcon as EnvelopeOpenDuotoneIcon } from "../duotone/EnvelopeOpen";
import { EnvelopeOpenIcon as EnvelopeOpenFillIcon } from "../fill/EnvelopeOpen";
import { EnvelopeOpenIcon as EnvelopeOpenLightIcon } from "../light/EnvelopeOpen";
import { EnvelopeOpenIcon as EnvelopeOpenRegularIcon } from "../regular/EnvelopeOpen";
import { EnvelopeOpenIcon as EnvelopeOpenThinIcon } from "../thin/EnvelopeOpen";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: EnvelopeOpenThinIcon,
	light: EnvelopeOpenLightIcon,
	regular: EnvelopeOpenRegularIcon,
	bold: EnvelopeOpenBoldIcon,
	fill: EnvelopeOpenFillIcon,
	duotone: EnvelopeOpenDuotoneIcon,
} as const;

export function EnvelopeOpenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { EnvelopeOpenIcon as EnvelopeOpen };
