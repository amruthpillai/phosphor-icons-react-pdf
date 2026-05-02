import { SeatIcon as SeatBoldIcon } from "../bold/Seat";
import { SeatIcon as SeatDuotoneIcon } from "../duotone/Seat";
import { SeatIcon as SeatFillIcon } from "../fill/Seat";
import { SeatIcon as SeatLightIcon } from "../light/Seat";
import { SeatIcon as SeatRegularIcon } from "../regular/Seat";
import { SeatIcon as SeatThinIcon } from "../thin/Seat";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SeatThinIcon,
	light: SeatLightIcon,
	regular: SeatRegularIcon,
	bold: SeatBoldIcon,
	fill: SeatFillIcon,
	duotone: SeatDuotoneIcon,
} as const;

export function SeatIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SeatIcon as Seat };
