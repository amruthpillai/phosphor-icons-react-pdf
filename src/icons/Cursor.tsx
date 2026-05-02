import { CursorIcon as CursorBoldIcon } from "../bold/Cursor";
import { CursorIcon as CursorDuotoneIcon } from "../duotone/Cursor";
import { CursorIcon as CursorFillIcon } from "../fill/Cursor";
import { CursorIcon as CursorLightIcon } from "../light/Cursor";
import { CursorIcon as CursorRegularIcon } from "../regular/Cursor";
import { CursorIcon as CursorThinIcon } from "../thin/Cursor";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CursorThinIcon,
	light: CursorLightIcon,
	regular: CursorRegularIcon,
	bold: CursorBoldIcon,
	fill: CursorFillIcon,
	duotone: CursorDuotoneIcon,
} as const;

export function CursorIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CursorIcon as Cursor };
