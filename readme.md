# Namaste React -- Learning Notes

## Episode 1: Basics

*Add your Episode 1 notes here.*

## Episode 2: Parcel and Browserslist

### Topics covered

-   Parcel
-   Browserslist

### Browserslist

Browserslist helps tools such as Babel, Autoprefixer, and Parcel
determine which browsers your project needs to support.

Explore browser queries here:

-   [Browserslist query
    playground](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)

------------------------------------------------------------------------

## What happens when we use `type="module"` in a script tag?

Example:

``` html
<script type="module" src="./app.js"></script>
```

Adding `type="module"` tells the browser to treat `app.js` as a
**JavaScript ES module (ESM)** rather than a classic script.

This enables features such as `import` and `export`, gives the file its
own module scope, and automatically enables strict mode.

### 1. Module scripts behave like deferred scripts by default

**Classic script:**

``` html
<script src="./app.js"></script>
```

A classic script without `async` or `defer` normally blocks HTML parsing
while it is fetched and executed.

**Module script:**

``` html
<script type="module" src="./app.js"></script>
```

A module script is deferred by default:

1.  The browser downloads the module without blocking HTML parsing.
2.  The browser finishes parsing the HTML.
3.  The browser evaluates the module and its dependencies.

You do not need to add `defer` to a module script. Note that adding
`async` changes the execution timing: an async module runs as soon as
its dependencies are ready, without waiting for HTML parsing to finish.

### 2. Supports `import` and `export`

Modules let you split JavaScript into separate files and reuse code.

**math.js**

``` javascript
export function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
```

**app.js**

``` javascript
import { add } from './math.js';

console.log(add(10, 20));
```

This works because `app.js` is loaded as a module. A classic script
cannot use static `import` and `export` declarations.

### 3. Variables have module scope

Top-level variables declared in a module do not automatically become
properties of the global `window` object.

``` html
<script type="module">
    var username = "Ashok";
</script>

<script>
    console.log(username);
</script>
```

The second script throws a `ReferenceError` because `username` is scoped
to the module.

In a classic script, a top-level `var` declaration generally creates a
property on `window`.

### 4. Strict mode is enabled automatically

JavaScript modules always run in strict mode. You do not need to write
`"use strict"`.

``` javascript
username = "Ashok";
```

This throws a `ReferenceError` if `username` has not been declared.

### 5. A module is evaluated once per module instance

When the same module is imported from multiple places, the browser
reuses the same module instance instead of evaluating it again for each
import. This helps avoid repeating the module's initialization.

### 6. Module scripts follow CORS rules

Module scripts use CORS when loaded from another origin.

For example:

``` html
<script type="module" src="https://example.com/app.js"></script>
```

The server hosting the file must return suitable CORS headers to allow
the page to load it.

Module scripts should generally be tested through a local development
server, such as the one provided by Parcel, rather than by opening the
HTML file directly with a `file://` URL. This is especially important
when using imports.

------------------------------------------------------------------------

## Classic Script vs Module Script

  -----------------------------------------------------------------------
  Feature                 Classic script          Module script
  ----------------------- ----------------------- -----------------------
  Script type             Default when `type` is  `type="module"`
                          omitted                 

  Deferred by default     No                      Yes

  Static `import` /       Not supported           Supported
  `export`                                        

  Strict mode             Only when explicitly    Enabled automatically
                          enabled                 

  Top-level scope         Top-level `var`         Module scope; does not
                          generally becomes a     automatically become
                          `window` property       global

  Cross-origin loading    Depends on script type  Uses CORS
                          and loading mode        

  Execution timing        Runs when encountered   Deferred by default;
                          unless `async` or       `async` changes timing
                          `defer` is used         

  Module evaluation       Not applicable to       Once per module
                          classic scripts         instance
  -----------------------------------------------------------------------

## When should you use `type="module"`?

Use module scripts when you want to:

-   Organize JavaScript into separate, reusable files.
-   Use `import` and `export`.
-   Keep variables and functions scoped to their modules.
-   Use JavaScript's built-in strict mode.
-   Build modern applications, including React applications.

## Quick recap

`type="module"` tells the browser:

> Treat this file as a JavaScript module. Allow module imports and
> exports, use module scope, enable strict mode, and defer execution by
> default until HTML parsing is complete.
