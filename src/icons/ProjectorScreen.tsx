import { ProjectorScreenIcon as ProjectorScreenBoldIcon } from "../bold/ProjectorScreen";
import { ProjectorScreenIcon as ProjectorScreenDuotoneIcon } from "../duotone/ProjectorScreen";
import { ProjectorScreenIcon as ProjectorScreenFillIcon } from "../fill/ProjectorScreen";
import { ProjectorScreenIcon as ProjectorScreenLightIcon } from "../light/ProjectorScreen";
import { ProjectorScreenIcon as ProjectorScreenRegularIcon } from "../regular/ProjectorScreen";
import { ProjectorScreenIcon as ProjectorScreenThinIcon } from "../thin/ProjectorScreen";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ProjectorScreenThinIcon,
	light: ProjectorScreenLightIcon,
	regular: ProjectorScreenRegularIcon,
	bold: ProjectorScreenBoldIcon,
	fill: ProjectorScreenFillIcon,
	duotone: ProjectorScreenDuotoneIcon,
} as const;

export function ProjectorScreenIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ProjectorScreenIcon as ProjectorScreen };
