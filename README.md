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
# In your somepage1.component.html:
<StackLayout hideActionBar class="page">
```

### FontAwesome DuoTone
Helps us to control and create DuoTones in NativeScript.
As they have 2 layers of Label, and we want to control their colors not only the icon.
This is based on issue found in: https://github.com/NativeScript/NativeScript/issues/8162

In your somepage1.component.html:
```
<!-- Acorn -->
<Label col="1" text="&#xf6ae;" labelDuoTone class="larger fad c-forest"></Label>
<Label col="1" text="&#x10f6ae;" labelDuoTone class="larger fad c-blue fad-op"></Label>
```

