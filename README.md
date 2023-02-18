# nativescript-directives
A personal list of directives commonly used in NativeScript applications

# Install all directives
We import a single module for all directives in a file called `directives.module.ts`.
Directives that you don't want - just remove from this file after cloning in your project.

### File: app.module.ts
Add this at the top of all includes
```
import { DirectivesModule } from './directives/directives.module';
```

Import it
```
imports: [
    ...
    DirectivesModule
],
```

# Usage

### Hide ActionBar
To hide the action bar just place `hideActionBar` directive in the element that wrap the entire page.
```
<StackLayout hideActionBar class="page">
```
