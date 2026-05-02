import { AlarmIcon as AlarmBoldIcon } from "../bold/Alarm";
import { AlarmIcon as AlarmDuotoneIcon } from "../duotone/Alarm";
import { AlarmIcon as AlarmFillIcon } from "../fill/Alarm";
import { AlarmIcon as AlarmLightIcon } from "../light/Alarm";
import { AlarmIcon as AlarmRegularIcon } from "../regular/Alarm";
import { AlarmIcon as AlarmThinIcon } from "../thin/Alarm";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: AlarmThinIcon,
	light: AlarmLightIcon,
	regular: AlarmRegularIcon,
	bold: AlarmBoldIcon,
	fill: AlarmFillIcon,
	duotone: AlarmDuotoneIcon,
} as const;

export function AlarmIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { AlarmIcon as Alarm };
