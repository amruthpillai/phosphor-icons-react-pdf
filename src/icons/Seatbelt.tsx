import { SeatbeltIcon as SeatbeltBoldIcon } from "../bold/Seatbelt";
import { SeatbeltIcon as SeatbeltDuotoneIcon } from "../duotone/Seatbelt";
import { SeatbeltIcon as SeatbeltFillIcon } from "../fill/Seatbelt";
import { SeatbeltIcon as SeatbeltLightIcon } from "../light/Seatbelt";
import { SeatbeltIcon as SeatbeltRegularIcon } from "../regular/Seatbelt";
import { SeatbeltIcon as SeatbeltThinIcon } from "../thin/Seatbelt";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SeatbeltThinIcon,
	light: SeatbeltLightIcon,
	regular: SeatbeltRegularIcon,
	bold: SeatbeltBoldIcon,
	fill: SeatbeltFillIcon,
	duotone: SeatbeltDuotoneIcon,
} as const;

export function SeatbeltIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SeatbeltIcon as Seatbelt };
