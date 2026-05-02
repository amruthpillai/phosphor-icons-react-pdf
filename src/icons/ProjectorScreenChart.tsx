import { ProjectorScreenChartIcon as ProjectorScreenChartBoldIcon } from "../bold/ProjectorScreenChart";
import { ProjectorScreenChartIcon as ProjectorScreenChartDuotoneIcon } from "../duotone/ProjectorScreenChart";
import { ProjectorScreenChartIcon as ProjectorScreenChartFillIcon } from "../fill/ProjectorScreenChart";
import { ProjectorScreenChartIcon as ProjectorScreenChartLightIcon } from "../light/ProjectorScreenChart";
import { ProjectorScreenChartIcon as ProjectorScreenChartRegularIcon } from "../regular/ProjectorScreenChart";
import { ProjectorScreenChartIcon as ProjectorScreenChartThinIcon } from "../thin/ProjectorScreenChart";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ProjectorScreenChartThinIcon,
	light: ProjectorScreenChartLightIcon,
	regular: ProjectorScreenChartRegularIcon,
	bold: ProjectorScreenChartBoldIcon,
	fill: ProjectorScreenChartFillIcon,
	duotone: ProjectorScreenChartDuotoneIcon,
} as const;

export function ProjectorScreenChartIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ProjectorScreenChartIcon as ProjectorScreenChart };
