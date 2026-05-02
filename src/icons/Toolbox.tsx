import { ToolboxIcon as ToolboxBoldIcon } from "../bold/Toolbox";
import { ToolboxIcon as ToolboxDuotoneIcon } from "../duotone/Toolbox";
import { ToolboxIcon as ToolboxFillIcon } from "../fill/Toolbox";
import { ToolboxIcon as ToolboxLightIcon } from "../light/Toolbox";
import { ToolboxIcon as ToolboxRegularIcon } from "../regular/Toolbox";
import { ToolboxIcon as ToolboxThinIcon } from "../thin/Toolbox";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ToolboxThinIcon,
	light: ToolboxLightIcon,
	regular: ToolboxRegularIcon,
	bold: ToolboxBoldIcon,
	fill: ToolboxFillIcon,
	duotone: ToolboxDuotoneIcon,
} as const;

export function ToolboxIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ToolboxIcon as Toolbox };
