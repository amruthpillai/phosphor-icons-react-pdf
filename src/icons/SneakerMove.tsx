import { SneakerMoveIcon as SneakerMoveBoldIcon } from "../bold/SneakerMove";
import { SneakerMoveIcon as SneakerMoveDuotoneIcon } from "../duotone/SneakerMove";
import { SneakerMoveIcon as SneakerMoveFillIcon } from "../fill/SneakerMove";
import { SneakerMoveIcon as SneakerMoveLightIcon } from "../light/SneakerMove";
import { SneakerMoveIcon as SneakerMoveRegularIcon } from "../regular/SneakerMove";
import { SneakerMoveIcon as SneakerMoveThinIcon } from "../thin/SneakerMove";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SneakerMoveThinIcon,
	light: SneakerMoveLightIcon,
	regular: SneakerMoveRegularIcon,
	bold: SneakerMoveBoldIcon,
	fill: SneakerMoveFillIcon,
	duotone: SneakerMoveDuotoneIcon,
} as const;

export function SneakerMoveIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SneakerMoveIcon as SneakerMove };
