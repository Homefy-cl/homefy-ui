# Homefy-ui (Created on React.JS)
![Homefy.cl Logo](https://raw.githubusercontent.com/Homefy-cl/docs/main/media/logo/isotipo/original.png)

## How are Components created:

Components should be created to interact only with the internal parts of it, never with the outside items.
A component should not be styled for a specific enviroment outside, instead this should adapt to it.
never with the outside items, for example:

A Card item is instantiated inside a View, to center the Card item the style
should be in the View.module.css file.


## Folder Structure:

The folder structure tries to standarize the project distribution of used
elements such as: Assets, Components, Utilities, Pages, APIs, etc.

### Assets:

Resources that are non component or configuration related such as: images, gifs, json.

### Components:

Every reusable componente folder such as: forms, layouts, tables.

### Utils:

Global utility objects such as: constants, validations, conversions, generators.

### Views:

Views presented on the web browser.

---

## Ways to contribute:

Your pull request will require.

```
- Explicit comment of what you did.
- Comments/Documentation that follows K.I.S.S (Keep It Stupid Simple).
- Relative imports.
- Follow the above Folder Structure.
```
