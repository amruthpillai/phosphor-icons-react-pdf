import { StudentIcon as StudentBoldIcon } from "../bold/Student";
import { StudentIcon as StudentDuotoneIcon } from "../duotone/Student";
import { StudentIcon as StudentFillIcon } from "../fill/Student";
import { StudentIcon as StudentLightIcon } from "../light/Student";
import { StudentIcon as StudentRegularIcon } from "../regular/Student";
import { StudentIcon as StudentThinIcon } from "../thin/Student";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: StudentThinIcon,
	light: StudentLightIcon,
	regular: StudentRegularIcon,
	bold: StudentBoldIcon,
	fill: StudentFillIcon,
	duotone: StudentDuotoneIcon,
} as const;

export function StudentIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { StudentIcon as Student };
