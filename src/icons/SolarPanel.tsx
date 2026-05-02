import { SolarPanelIcon as SolarPanelBoldIcon } from "../bold/SolarPanel";
import { SolarPanelIcon as SolarPanelDuotoneIcon } from "../duotone/SolarPanel";
import { SolarPanelIcon as SolarPanelFillIcon } from "../fill/SolarPanel";
import { SolarPanelIcon as SolarPanelLightIcon } from "../light/SolarPanel";
import { SolarPanelIcon as SolarPanelRegularIcon } from "../regular/SolarPanel";
import { SolarPanelIcon as SolarPanelThinIcon } from "../thin/SolarPanel";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SolarPanelThinIcon,
	light: SolarPanelLightIcon,
	regular: SolarPanelRegularIcon,
	bold: SolarPanelBoldIcon,
	fill: SolarPanelFillIcon,
	duotone: SolarPanelDuotoneIcon,
} as const;

export function SolarPanelIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SolarPanelIcon as SolarPanel };
