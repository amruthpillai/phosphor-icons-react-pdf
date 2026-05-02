import { SynagogueIcon as SynagogueBoldIcon } from "../bold/Synagogue";
import { SynagogueIcon as SynagogueDuotoneIcon } from "../duotone/Synagogue";
import { SynagogueIcon as SynagogueFillIcon } from "../fill/Synagogue";
import { SynagogueIcon as SynagogueLightIcon } from "../light/Synagogue";
import { SynagogueIcon as SynagogueRegularIcon } from "../regular/Synagogue";
import { SynagogueIcon as SynagogueThinIcon } from "../thin/Synagogue";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: SynagogueThinIcon,
	light: SynagogueLightIcon,
	regular: SynagogueRegularIcon,
	bold: SynagogueBoldIcon,
	fill: SynagogueFillIcon,
	duotone: SynagogueDuotoneIcon,
} as const;

export function SynagogueIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { SynagogueIcon as Synagogue };
