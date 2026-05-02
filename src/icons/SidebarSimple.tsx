import { SidebarSimpleIcon as SidebarSimpleBoldIcon } from "../bold/SidebarSimple";
import { SidebarSimpleIcon as SidebarSimpleDuotoneIcon } from "../duotone/SidebarSimple";
import { SidebarSimpleIcon as SidebarSimpleFillIcon } from "../fill/SidebarSimple";
import { SidebarSimpleIcon as SidebarSimpleLightIcon } from "../light/SidebarSimple";
import { SidebarSimpleIcon as SidebarSimpleRegularIcon } from "../regular/SidebarSimple";
import { SidebarSimpleIcon as SidebarSimpleThinIcon } from "../thin/SidebarSimple";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SidebarSimpleThinIcon,
	light: SidebarSimpleLightIcon,
	regular: SidebarSimpleRegularIcon,
	bold: SidebarSimpleBoldIcon,
	fill: SidebarSimpleFillIcon,
	duotone: SidebarSimpleDuotoneIcon,
} as const;

export function SidebarSimpleIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SidebarSimpleIcon as SidebarSimple };
