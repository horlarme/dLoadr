# dLoadr 
#### `A Javascript Loading animation library`

This library helps creating a loading animation animating with CSS and created to the browser using Javascript's 
`Node.createElement`. CSS animations are from https://loading.io/css/


##Installation
Install using npm:
```
$ npm install @horlarme/dloadr
```

##Usage
```javascript
import dLoadr from "@horlarme/dLoadr";

//create instance of dLoadr
let loaderAnimation = dLoadr({
        parent: "body" //parent element which animation will be added into 
    });

//display the animation
loaderAnimation.display();

//get the created element
loaderAnimation.getDisplayedAnimation();

//get id of element or loader id
loaderAnimation.id;

//remove/delete
//only after display, else will throw error
loaderAnimation.remove();

``` 

##Configurations
- parent: The parent element which will hold the animation element, the animation will be appended as a child. 
Accepts all CSS selectors. 
Example: `'body div.loadHere'`, `'#onlyLoadHere'`
- id: A custom id to be given to the created loading animation. Default is a random string containing DateTime values.
- color: The color to be giving to the loading animation. Default `"#fff"`
- text: The text to be displayed under animation. Default `"Loading..."`.
- type: The type of animation to be displayed. Currently only support `"circle"`. More to come in coming updates.

##Todo
- [X] Allow multiple instances
- [x] Allow configuration
- [] Add all animations from https://loading.io/css/
- [] Allow custom css/styling
