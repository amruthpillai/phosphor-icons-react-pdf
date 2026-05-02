import { ExamIcon as ExamBoldIcon } from "../bold/Exam";
import { ExamIcon as ExamDuotoneIcon } from "../duotone/Exam";
import { ExamIcon as ExamFillIcon } from "../fill/Exam";
import { ExamIcon as ExamLightIcon } from "../light/Exam";
import { ExamIcon as ExamRegularIcon } from "../regular/Exam";
import { ExamIcon as ExamThinIcon } from "../thin/Exam";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: ExamThinIcon,
	light: ExamLightIcon,
	regular: ExamRegularIcon,
	bold: ExamBoldIcon,
	fill: ExamFillIcon,
	duotone: ExamDuotoneIcon,
} as const;

export function ExamIcon({ weight = "regular", ...props }: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { ExamIcon as Exam };
