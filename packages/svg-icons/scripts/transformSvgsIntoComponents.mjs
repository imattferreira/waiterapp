import fs from "node:fs";
import path from "node:path";

const SVGS_DIR = path.resolve("src", "assets", "svgs");
const COMPONENTS_DIR = path.resolve("src", "components", "Icons");
const ENTRYPOINT_COMPONENT_DIR = path.resolve("src", "components", "index.tsx");

function getSvgContent(name) {
  const dir = path.resolve(SVGS_DIR, name);

  return fs.readFileSync(dir, { encoding: "utf-8" });
}

function toPascalCase(str) {
  return (" " + str)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

function formatSvgPascalCaseName(name) {
  return toPascalCase(name).replace("Svg", "");
}

function formatSvgSnakeCaseName(name) {
  return name.replace(".svg", "");
}

function addPropsSpreadingAndFormatToJSX(svg) {
  const markupsToAddSpread = ["path", "circle"];
  // const markupsToTransform = [
  //   "stroke-linejoin",
  //   "stroke-linecap",
  //   "stroke-width",
  //   "clip-rule",
  //   "fill-rule",
  // ];

  return svg
    .split(" ")
    .map((str) => {
      if (markupsToAddSpread.some((markup) => str.trim().includes(markup))) {
        return str + " {...props}";
      }

      // TODO fix regex
      // if (markupsToTransform.some((markup) => str.trim().includes(markup))) {
      //   return toPascalCase(str);
      // }

      return str;
    })
    .join(" ");
}

function getComponentContent(iconName, svg) {
  return `
  type ${iconName}IconProps = {
    size?: number;
  };

  function ${iconName}Icon({ size = 24, ...props }: ${iconName}IconProps) {
    return (
      ${svg}
    );
  }

  export default ${iconName}Icon;
  `;
}

function removeExistingIconComponents() {
  const files = fs.readdirSync(COMPONENTS_DIR);

  for (const file of files) {
    fs.unlinkSync(path.resolve(COMPONENTS_DIR, file));
  }
}

function makeComponentFile({ iconName, content }) {
  fs.appendFileSync(path.resolve(COMPONENTS_DIR, `${iconName}.tsx`), content);
}

function makeEntrypointComponent(namesInPascalCase, namesInSnakeCase) {
  const template = `
import { Suspense, lazy } from "react";

const ICONS = {
  ${namesInPascalCase.map(
    (str, i) =>
      `'${namesInSnakeCase[i]}': lazy(() => import("./Icons/${str}"))\n`
  )}
};

export type IconTypes = keyof typeof ICONS;

type IconProps = {
  name: IconTypes;
  size?: number;
  className?: string;
};

function Icon({ name, size, ...props }: IconProps) {
  const Component = ICONS[name];

  return !Component ? null : (
    <Suspense>
      <Component size={size} {...props} />
    </Suspense>
  );
}

export default Icon;
`;

  fs.unlinkSync(ENTRYPOINT_COMPONENT_DIR);
  fs.appendFileSync(ENTRYPOINT_COMPONENT_DIR, template);
}

(function main() {
  const svgNames = fs.readdirSync(SVGS_DIR);
  const svgsContent = svgNames
    .map(getSvgContent)
    .map(addPropsSpreadingAndFormatToJSX);
  const formattedSvgCamelCaseNames = svgNames.map(formatSvgPascalCaseName);

  const components = [];

  for (let i = 0; i < formattedSvgCamelCaseNames.length; i++) {
    components.push({
      iconName: formattedSvgCamelCaseNames[i],
      content: getComponentContent(
        formattedSvgCamelCaseNames[i],
        svgsContent[i]
      ),
    });
  }

  removeExistingIconComponents();
  components.forEach(makeComponentFile);
  makeEntrypointComponent(
    formattedSvgCamelCaseNames,
    svgNames.map(formatSvgSnakeCaseName)
  );
})();
