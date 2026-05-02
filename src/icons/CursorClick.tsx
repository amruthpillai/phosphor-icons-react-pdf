import { CursorClickIcon as CursorClickBoldIcon } from "../bold/CursorClick";
import { CursorClickIcon as CursorClickDuotoneIcon } from "../duotone/CursorClick";
import { CursorClickIcon as CursorClickFillIcon } from "../fill/CursorClick";
import { CursorClickIcon as CursorClickLightIcon } from "../light/CursorClick";
import { CursorClickIcon as CursorClickRegularIcon } from "../regular/CursorClick";
import { CursorClickIcon as CursorClickThinIcon } from "../thin/CursorClick";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CursorClickThinIcon,
	light: CursorClickLightIcon,
	regular: CursorClickRegularIcon,
	bold: CursorClickBoldIcon,
	fill: CursorClickFillIcon,
	duotone: CursorClickDuotoneIcon,
} as const;

export function CursorClickIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CursorClickIcon as CursorClick };
