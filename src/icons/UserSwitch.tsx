import { UserSwitchIcon as UserSwitchBoldIcon } from "../bold/UserSwitch";
import { UserSwitchIcon as UserSwitchDuotoneIcon } from "../duotone/UserSwitch";
import { UserSwitchIcon as UserSwitchFillIcon } from "../fill/UserSwitch";
import { UserSwitchIcon as UserSwitchLightIcon } from "../light/UserSwitch";
import { UserSwitchIcon as UserSwitchRegularIcon } from "../regular/UserSwitch";
import { UserSwitchIcon as UserSwitchThinIcon } from "../thin/UserSwitch";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: UserSwitchThinIcon,
	light: UserSwitchLightIcon,
	regular: UserSwitchRegularIcon,
	bold: UserSwitchBoldIcon,
	fill: UserSwitchFillIcon,
	duotone: UserSwitchDuotoneIcon,
} as const;

export function UserSwitchIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { UserSwitchIcon as UserSwitch };
