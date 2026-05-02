import { CommandIcon as CommandBoldIcon } from "../bold/Command";
import { CommandIcon as CommandDuotoneIcon } from "../duotone/Command";
import { CommandIcon as CommandFillIcon } from "../fill/Command";
import { CommandIcon as CommandLightIcon } from "../light/Command";
import { CommandIcon as CommandRegularIcon } from "../regular/Command";
import { CommandIcon as CommandThinIcon } from "../thin/Command";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: CommandThinIcon,
	light: CommandLightIcon,
	regular: CommandRegularIcon,
	bold: CommandBoldIcon,
	fill: CommandFillIcon,
	duotone: CommandDuotoneIcon,
} as const;

export function CommandIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { CommandIcon as Command };
