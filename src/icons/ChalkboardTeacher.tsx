import { ChalkboardTeacherIcon as ChalkboardTeacherBoldIcon } from "../bold/ChalkboardTeacher";
import { ChalkboardTeacherIcon as ChalkboardTeacherDuotoneIcon } from "../duotone/ChalkboardTeacher";
import { ChalkboardTeacherIcon as ChalkboardTeacherFillIcon } from "../fill/ChalkboardTeacher";
import { ChalkboardTeacherIcon as ChalkboardTeacherLightIcon } from "../light/ChalkboardTeacher";
import { ChalkboardTeacherIcon as ChalkboardTeacherRegularIcon } from "../regular/ChalkboardTeacher";
import { ChalkboardTeacherIcon as ChalkboardTeacherThinIcon } from "../thin/ChalkboardTeacher";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ChalkboardTeacherThinIcon,
	light: ChalkboardTeacherLightIcon,
	regular: ChalkboardTeacherRegularIcon,
	bold: ChalkboardTeacherBoldIcon,
	fill: ChalkboardTeacherFillIcon,
	duotone: ChalkboardTeacherDuotoneIcon,
} as const;

export function ChalkboardTeacherIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ChalkboardTeacherIcon as ChalkboardTeacher };
