import { DeskIcon as DeskBoldIcon } from "../bold/Desk";
import { DeskIcon as DeskDuotoneIcon } from "../duotone/Desk";
import { DeskIcon as DeskFillIcon } from "../fill/Desk";
import { DeskIcon as DeskLightIcon } from "../light/Desk";
import { DeskIcon as DeskRegularIcon } from "../regular/Desk";
import { DeskIcon as DeskThinIcon } from "../thin/Desk";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: DeskThinIcon,
	light: DeskLightIcon,
	regular: DeskRegularIcon,
	bold: DeskBoldIcon,
	fill: DeskFillIcon,
	duotone: DeskDuotoneIcon,
} as const;

export function DeskIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { DeskIcon as Desk };
