import { KeyholeIcon as KeyholeBoldIcon } from "../bold/Keyhole";
import { KeyholeIcon as KeyholeDuotoneIcon } from "../duotone/Keyhole";
import { KeyholeIcon as KeyholeFillIcon } from "../fill/Keyhole";
import { KeyholeIcon as KeyholeLightIcon } from "../light/Keyhole";
import { KeyholeIcon as KeyholeRegularIcon } from "../regular/Keyhole";
import { KeyholeIcon as KeyholeThinIcon } from "../thin/Keyhole";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: KeyholeThinIcon,
	light: KeyholeLightIcon,
	regular: KeyholeRegularIcon,
	bold: KeyholeBoldIcon,
	fill: KeyholeFillIcon,
	duotone: KeyholeDuotoneIcon,
} as const;

export function KeyholeIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { KeyholeIcon as Keyhole };
