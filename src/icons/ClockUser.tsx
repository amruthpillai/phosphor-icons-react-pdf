import { ClockUserIcon as ClockUserBoldIcon } from "../bold/ClockUser";
import { ClockUserIcon as ClockUserDuotoneIcon } from "../duotone/ClockUser";
import { ClockUserIcon as ClockUserFillIcon } from "../fill/ClockUser";
import { ClockUserIcon as ClockUserLightIcon } from "../light/ClockUser";
import { ClockUserIcon as ClockUserRegularIcon } from "../regular/ClockUser";
import { ClockUserIcon as ClockUserThinIcon } from "../thin/ClockUser";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ClockUserThinIcon,
	light: ClockUserLightIcon,
	regular: ClockUserRegularIcon,
	bold: ClockUserBoldIcon,
	fill: ClockUserFillIcon,
	duotone: ClockUserDuotoneIcon,
} as const;

export function ClockUserIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ClockUserIcon as ClockUser };
