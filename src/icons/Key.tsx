import { KeyIcon as KeyBoldIcon } from "../bold/Key";
import { KeyIcon as KeyDuotoneIcon } from "../duotone/Key";
import { KeyIcon as KeyFillIcon } from "../fill/Key";
import { KeyIcon as KeyLightIcon } from "../light/Key";
import { KeyIcon as KeyRegularIcon } from "../regular/Key";
import { KeyIcon as KeyThinIcon } from "../thin/Key";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: KeyThinIcon,
	light: KeyLightIcon,
	regular: KeyRegularIcon,
	bold: KeyBoldIcon,
	fill: KeyFillIcon,
	duotone: KeyDuotoneIcon,
} as const;

export function KeyIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { KeyIcon as Key };
