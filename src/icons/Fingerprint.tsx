import { FingerprintIcon as FingerprintBoldIcon } from "../bold/Fingerprint";
import { FingerprintIcon as FingerprintDuotoneIcon } from "../duotone/Fingerprint";
import { FingerprintIcon as FingerprintFillIcon } from "../fill/Fingerprint";
import { FingerprintIcon as FingerprintLightIcon } from "../light/Fingerprint";
import { FingerprintIcon as FingerprintRegularIcon } from "../regular/Fingerprint";
import { FingerprintIcon as FingerprintThinIcon } from "../thin/Fingerprint";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: FingerprintThinIcon,
	light: FingerprintLightIcon,
	regular: FingerprintRegularIcon,
	bold: FingerprintBoldIcon,
	fill: FingerprintFillIcon,
	duotone: FingerprintDuotoneIcon,
} as const;

export function FingerprintIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { FingerprintIcon as Fingerprint };
