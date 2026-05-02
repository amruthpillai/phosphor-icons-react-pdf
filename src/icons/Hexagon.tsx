import { HexagonIcon as HexagonBoldIcon } from "../bold/Hexagon";
import { HexagonIcon as HexagonDuotoneIcon } from "../duotone/Hexagon";
import { HexagonIcon as HexagonFillIcon } from "../fill/Hexagon";
import { HexagonIcon as HexagonLightIcon } from "../light/Hexagon";
import { HexagonIcon as HexagonRegularIcon } from "../regular/Hexagon";
import { HexagonIcon as HexagonThinIcon } from "../thin/Hexagon";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: HexagonThinIcon,
	light: HexagonLightIcon,
	regular: HexagonRegularIcon,
	bold: HexagonBoldIcon,
	fill: HexagonFillIcon,
	duotone: HexagonDuotoneIcon,
} as const;

export function HexagonIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { HexagonIcon as Hexagon };
