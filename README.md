quizdini-learn
https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf
https://pbs.twimg.com/media/EKv6IfiVAAA7TVd?format=jpg&name=4096x4096
https://github.com/vuejs/rfcs/blob/dynamic-lifecycle/active-rfcs/0000-dynamic-lifecycle-injection.md
https://codesandbox.io/s/nervous-flower-fepdx?file=/src/components/useDnD.js
https://jsfiddle.net/babalugats76/65Lvoryn/1/

## Naming Conventions

- For sass variables, follow spirit of this general naming convention: `$component-state-property-size`, e.g., `$button-disabled-color`, `$color-contrast-dark`

- `font-size`-related naming shall follow Tailwind conventions, including the use of `base`,`*xl`, etc.

## Scoping

- **Global**: Present in global stylesheet `$property-value`, e.g., `text-blue`
- **Component**: Scoped to component `$component--modifier-variant`, e.g., `ui-btn--disabled`
- **Modified Component Scope**: Use class chaining, e.g., `ui-btn.size--md`, and omit explicit component prefix

## Classes

### Global
| Category         | Prefix   | Description                                                                                                                                     | Example                             | Important |
| ---------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | --------- |
| Webfont          | N/A      | Sets `font-family` and `font-weight` for self-hosted webfonts                                                                                   | `montserrat-semi-bold`              | Yes       |
| Text Color       | text-*   | Sets `color` and `caret-color` including `100-900` variants. A "base" class, i.e., `-500`, is available for all colors, including theme colors. | `text-primary`, `text-blue-700`     | Yes       |
| Background Color | bg-*     | Sets `background-color` including `100-900` variants. A "base" class, i.e., `-500`, is available for all colors, including theme colors.        | `bg-primary`, `bg-blue-700`         | Yes       |
| Border Color     | border-* | Sets `border-color` including `100-900` variants. A "base" class, i.e., `-500`, is available for all colors, including theme colors.            | `border-primary`, `border-blue-700` | Yes       |
<br/>

### Modified Component Scope
| Category | Prefix  | Description                                                                                                         | Example           | Default      | Important |
| -------- | ------- | ------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------ | --------- |
| Scaling  | size--* | Sets `font-size` for components designed to scale. All size lists shall contain a `base` key to act as the default. | `ui-btn.size--xl` | `size--base` | No        |
<br/>

## UI Components

### Conventions

- **Multi-name Components**: Multi-part names, e.g., `ui-list` shall be used to avoid namespace collisions with existing HTML elements
- **Static Class**: A `staticClass` String, as a data item, will be provided for each component to facilitate component-level scoping
  
           data: function () {
             return {
               staticClass: "ui-list__item",
             };
           },
- **Mixins**: Shall be incorporated as appropriate to implement shared functionality, common conventions, etc.
  
### Mixins

| Name | Description                                                                  | Prop(s)                 | Computed Properties | Methods |
| ---- | ---------------------------------------------------------------------------- | ----------------------- | ------------------- | ------- |
| size | Adds `size` prop and dynamically generates `font-size` *scaling* class names | `size` (default `base`) | `sizeClasses`       | None    |
<br />

**Default prop values** can be overridden in the child ui component as need be (by including in `props` list and specifying `default`)
