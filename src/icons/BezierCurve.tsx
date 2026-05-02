import { BezierCurveIcon as BezierCurveBoldIcon } from "../bold/BezierCurve";
import { BezierCurveIcon as BezierCurveDuotoneIcon } from "../duotone/BezierCurve";
import { BezierCurveIcon as BezierCurveFillIcon } from "../fill/BezierCurve";
import { BezierCurveIcon as BezierCurveLightIcon } from "../light/BezierCurve";
import { BezierCurveIcon as BezierCurveRegularIcon } from "../regular/BezierCurve";
import { BezierCurveIcon as BezierCurveThinIcon } from "../thin/BezierCurve";
import type { WeightedIconProps } from "../types";

const weights = {
	thin: BezierCurveThinIcon,
	light: BezierCurveLightIcon,
	regular: BezierCurveRegularIcon,
	bold: BezierCurveBoldIcon,
	fill: BezierCurveFillIcon,
	duotone: BezierCurveDuotoneIcon,
} as const;

export function BezierCurveIcon({
	weight = "regular",
	...props
}: WeightedIconProps) {
	const Component = weights[weight];

	return <Component {...props} />;
}

export { BezierCurveIcon as BezierCurve };
