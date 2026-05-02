import { KanbanIcon as KanbanBoldIcon } from "../bold/Kanban";
import { KanbanIcon as KanbanDuotoneIcon } from "../duotone/Kanban";
import { KanbanIcon as KanbanFillIcon } from "../fill/Kanban";
import { KanbanIcon as KanbanLightIcon } from "../light/Kanban";
import { KanbanIcon as KanbanRegularIcon } from "../regular/Kanban";
import { KanbanIcon as KanbanThinIcon } from "../thin/Kanban";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: KanbanThinIcon,
	light: KanbanLightIcon,
	regular: KanbanRegularIcon,
	bold: KanbanBoldIcon,
	fill: KanbanFillIcon,
	duotone: KanbanDuotoneIcon,
} as const;

export function KanbanIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { KanbanIcon as Kanban };
