# phosphor-icons-react-pdf

Phosphor icons converted to [`@react-pdf/renderer`](https://react-pdf.org/) SVG components.

This package is for React-PDF documents rendered in the browser or in Node.js. It does not render normal DOM `<svg>` elements.

## Affiliation

This project is not affiliated with, endorsed by, or officially associated with `@phosphor-icons`. I am just a fan of the icon set and wanted React-PDF compatible components.

I created this library to make it easier to use Phosphor Icons in my project [Reactive Resume](https://github.com/amruthpillai/reactive-resume), which makes use of `@react-pdf/renderer` to render PDF resumes.

If the Phosphor Icons maintainers are interested in adopting this package into the `@phosphor-icons` organization, I would be happy to hand it over.

## Installation

```sh
pnpm add phosphor-icons-react-pdf @react-pdf/renderer react
```

`react` and `@react-pdf/renderer` are peer dependencies. This package expects your app to provide them.

## Basic Usage

The root import follows the `@phosphor-icons/react` naming style: icon components are exported as `PascalNameIcon`.

```tsx
import { AcornIcon, HorseIcon, HeartIcon } from "phosphor-icons-react-pdf";

export function PdfIcons() {
  return (
    <>
      <AcornIcon size={24} color="#111827" />
      <HorseIcon size={32} color="teal" weight="bold" />
      <HeartIcon size={32} color="#AE2983" weight="fill" />
    </>
  );
}
```

Compatibility aliases without the `Icon` suffix are also exported:

```tsx
import { Acorn } from "phosphor-icons-react-pdf";
```

## Weights

Root icon components support the same weight names as Phosphor Icons:

```tsx
<AcornIcon weight="thin" />
<AcornIcon weight="light" />
<AcornIcon weight="regular" />
<AcornIcon weight="bold" />
<AcornIcon weight="fill" />
<AcornIcon weight="duotone" />
```

The default weight is `regular`.

```ts
type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
```

## Dynamic Icon Component

Use `Icon` when the icon name is data-driven. The `name` prop is the lowercase Phosphor icon name, including hyphens when present.

```tsx
import { Icon } from "phosphor-icons-react-pdf";

export function PdfIconFromData() {
  return <Icon name="acorn" weight="duotone" size={24} color="#111827" />;
}
```

`Icon` forwards all remaining props to the selected icon component.

```tsx
<Icon name="arrow-down-left" weight="bold" size={18} color="crimson" />
```

Type exports are available for typed icon pickers:

```ts
import type {
  IconName,
  IconWeight,
  IconPropsWithName,
} from "phosphor-icons-react-pdf";
```

## Variant Subpath Imports

For smaller imports, use a fixed-weight subpath. These components do not need a `weight` prop because the weight is selected by the import path.

```tsx
import { AcornIcon } from "phosphor-icons-react-pdf/regular";
import { HeartIcon } from "phosphor-icons-react-pdf/fill";
import { HorseIcon } from "phosphor-icons-react-pdf/bold";
```

Supported subpaths:

```ts
import { AcornIcon } from "phosphor-icons-react-pdf/thin";
import { AcornIcon } from "phosphor-icons-react-pdf/light";
import { AcornIcon } from "phosphor-icons-react-pdf/regular";
import { AcornIcon } from "phosphor-icons-react-pdf/bold";
import { AcornIcon } from "phosphor-icons-react-pdf/fill";
import { AcornIcon } from "phosphor-icons-react-pdf/duotone";
```

Direct file subpaths are also exported:

```tsx
import { AcornIcon } from "phosphor-icons-react-pdf/regular/Acorn";
import { AcornIcon as AcornDuotoneIcon } from "phosphor-icons-react-pdf/duotone/Acorn";
```

## React-PDF Browser Example

```tsx
import { Document, Page, PDFViewer, Text, View } from "@react-pdf/renderer";
import { AcornIcon, Icon } from "phosphor-icons-react-pdf";

function MyDocument() {
  return (
    <Document>
      <Page size="A4">
        <View>
          <AcornIcon size={24} color="#166534" />
          <Icon name="heart" weight="fill" size={24} color="#dc2626" />
          <Text>React-PDF icons</Text>
        </View>
      </Page>
    </Document>
  );
}

export function App() {
  return (
    <PDFViewer>
      <MyDocument />
    </PDFViewer>
  );
}
```

## React-PDF Node.js Example

```tsx
import ReactPDF, { Document, Page, Text, View } from "@react-pdf/renderer";
import { AcornIcon } from "phosphor-icons-react-pdf";

function MyDocument() {
  return (
    <Document>
      <Page size="A4">
        <View>
          <AcornIcon size={24} color="#111827" weight="bold" />
          <Text>Generated on the server</Text>
        </View>
      </Page>
    </Document>
  );
}

await ReactPDF.render(<MyDocument />, "./example.pdf");
```

## Props

Every icon accepts:

```ts
type IconProps = {
  size?: number | string;
  color?: string;
};
```

Root icon components and the generic `Icon` also accept:

```ts
type WeightedIconProps = IconProps & {
  weight?: IconWeight;
};
```

Other props are passed to React-PDF's `Svg` component.

## Tree Shaking

For the smallest imports, prefer direct fixed-weight imports:

```tsx
import { AcornIcon } from "phosphor-icons-react-pdf/regular/Acorn";
```

Root imports and the generic `Icon` are more convenient, but they reference the generated icon registry.

## Development

```sh
pnpm install
pnpm generate
pnpm test
pnpm typecheck
pnpm build
```

The generator reads the published `@phosphor-icons/core` package from `node_modules`.

To generate from a local checkout or submodule instead:

```sh
PHOSPHOR_CORE_DIR=/path/to/phosphor-icons/core pnpm generate
```

The expected core asset layout is:

```text
assets/
  bold/
  duotone/
  fill/
  light/
  regular/
  thin/
```

## Publishing Checklist

```sh
pnpm generate
pnpm test
pnpm typecheck
pnpm build
pnpm pack --pack-destination /private/tmp --json
```
