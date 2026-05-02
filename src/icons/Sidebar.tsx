import { SidebarIcon as SidebarBoldIcon } from "../bold/Sidebar";
import { SidebarIcon as SidebarDuotoneIcon } from "../duotone/Sidebar";
import { SidebarIcon as SidebarFillIcon } from "../fill/Sidebar";
import { SidebarIcon as SidebarLightIcon } from "../light/Sidebar";
import { SidebarIcon as SidebarRegularIcon } from "../regular/Sidebar";
import { SidebarIcon as SidebarThinIcon } from "../thin/Sidebar";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SidebarThinIcon,
	light: SidebarLightIcon,
	regular: SidebarRegularIcon,
	bold: SidebarBoldIcon,
	fill: SidebarFillIcon,
	duotone: SidebarDuotoneIcon,
} as const;

export function SidebarIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SidebarIcon as Sidebar };
