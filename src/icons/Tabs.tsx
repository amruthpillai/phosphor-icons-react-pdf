import { TabsIcon as TabsBoldIcon } from "../bold/Tabs";
import { TabsIcon as TabsDuotoneIcon } from "../duotone/Tabs";
import { TabsIcon as TabsFillIcon } from "../fill/Tabs";
import { TabsIcon as TabsLightIcon } from "../light/Tabs";
import { TabsIcon as TabsRegularIcon } from "../regular/Tabs";
import { TabsIcon as TabsThinIcon } from "../thin/Tabs";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: TabsThinIcon,
	light: TabsLightIcon,
	regular: TabsRegularIcon,
	bold: TabsBoldIcon,
	fill: TabsFillIcon,
	duotone: TabsDuotoneIcon,
} as const;

export function TabsIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { TabsIcon as Tabs };
