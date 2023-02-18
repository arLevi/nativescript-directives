# nativescript-directives
A personal list of directives commonly used in NativeScript applications

# Include in your project
We import a single module for all directives
Directives that you don't want - just remove from your project after cloning

### Project file: app.module.ts
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
