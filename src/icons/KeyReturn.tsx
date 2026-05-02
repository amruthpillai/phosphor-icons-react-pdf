import { KeyReturnIcon as KeyReturnBoldIcon } from "../bold/KeyReturn";
import { KeyReturnIcon as KeyReturnDuotoneIcon } from "../duotone/KeyReturn";
import { KeyReturnIcon as KeyReturnFillIcon } from "../fill/KeyReturn";
import { KeyReturnIcon as KeyReturnLightIcon } from "../light/KeyReturn";
import { KeyReturnIcon as KeyReturnRegularIcon } from "../regular/KeyReturn";
import { KeyReturnIcon as KeyReturnThinIcon } from "../thin/KeyReturn";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: KeyReturnThinIcon,
	light: KeyReturnLightIcon,
	regular: KeyReturnRegularIcon,
	bold: KeyReturnBoldIcon,
	fill: KeyReturnFillIcon,
	duotone: KeyReturnDuotoneIcon,
} as const;

export function KeyReturnIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { KeyReturnIcon as KeyReturn };
