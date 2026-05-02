import { KeyboardIcon as KeyboardBoldIcon } from "../bold/Keyboard";
import { KeyboardIcon as KeyboardDuotoneIcon } from "../duotone/Keyboard";
import { KeyboardIcon as KeyboardFillIcon } from "../fill/Keyboard";
import { KeyboardIcon as KeyboardLightIcon } from "../light/Keyboard";
import { KeyboardIcon as KeyboardRegularIcon } from "../regular/Keyboard";
import { KeyboardIcon as KeyboardThinIcon } from "../thin/Keyboard";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: KeyboardThinIcon,
	light: KeyboardLightIcon,
	regular: KeyboardRegularIcon,
	bold: KeyboardBoldIcon,
	fill: KeyboardFillIcon,
	duotone: KeyboardDuotoneIcon,
} as const;

export function KeyboardIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { KeyboardIcon as Keyboard };
