import { TrayArrowDownIcon as TrayArrowDownBoldIcon } from "../bold/TrayArrowDown";
import { TrayArrowDownIcon as TrayArrowDownDuotoneIcon } from "../duotone/TrayArrowDown";
import { TrayArrowDownIcon as TrayArrowDownFillIcon } from "../fill/TrayArrowDown";
import { TrayArrowDownIcon as TrayArrowDownLightIcon } from "../light/TrayArrowDown";
import { TrayArrowDownIcon as TrayArrowDownRegularIcon } from "../regular/TrayArrowDown";
import { TrayArrowDownIcon as TrayArrowDownThinIcon } from "../thin/TrayArrowDown";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TrayArrowDownThinIcon,
	light: TrayArrowDownLightIcon,
	regular: TrayArrowDownRegularIcon,
	bold: TrayArrowDownBoldIcon,
	fill: TrayArrowDownFillIcon,
	duotone: TrayArrowDownDuotoneIcon,
} as const;

export function TrayArrowDownIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TrayArrowDownIcon as TrayArrowDown };
