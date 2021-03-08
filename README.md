# Sass-CloneInstagram
1. What is **SASS**? What does **SASS** stand for? <br>
Sass stands for Syntactically Awesome Stylesheet. Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself. <br>
2. What is a **CSS pre-processor**?<br>
CSS preprocessors are scripting languages that extend the default capabilities of CSS. They enable us to use logic in our CSS code, such as variables, nesting, inheritance, mixins, functions, and mathematical operations. CSS preprocessors all do similar things but in a different way and with their own syntaxes. <br>
3. What does a **pre-processor** have to do with **SASS**?<br>
Sass is a pre-processor itself. <br>
4. Why use **SASS**?<br>
Sass facilitates you to write clean, easy and less CSS in a programming construct. It contains fewer codes so you can write CSS quicker. It is more stable, powerful, and elegant because it is an extension of CSS.<br>
5. **SASS** has disadvantages? Which are?<br>
- The developer must have enough time to learn new features present in this preprocessor before using it.
- Using Sass may cause losing benefits of the browser’s built-in element inspector.
- Code has to be compiled
- Difficult Troubleshooting<br>
6. What is a **SASS Variable**? Explain why are useful<br>
Sass variables are simple: you assign a value to a name that begins with $, and then you can refer to that name instead of the value itself. But despite their simplicity, they're one of the most useful tools Sass brings to the table. Variables make it possible to reduce repetition, do complex math, configure libraries, and much more. <br>
7. Explain the SASS **variables** property with an example. <br>
it’s written variable: expression. <br>
```
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.alert {
  border: 1px solid $border-dark;
}
```

8. What is a **mixin**? Why is it important? Give an example<br>
Mixins allow you to define styles that can be re-used throughout your stylesheet. They make it easy to avoid using non-semantic classes like, and to distribute collections of styles in libraries.
Mixins are defined using the @mixin at-rule, which is written @mixin name { ... } or @mixin name(<arguments...>) { ... }. A mixin’s name can be any Sass identifier, and it can contain any statement other than top-level statements. They can be used to encapsulate styles that can be dropped into a single style rule; they can contain style rules of their own that can be nested in other rules or included at the top level of the stylesheet; or they can just serve to modify variables. Mixins are included into the current context using the @include at-rule, which is written @include name or @include name(<arguments...>), with the name of the mixin being included.
```
@mixin reset-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

@mixin horizontal-list {
  @include reset-list;

  li {
    display: inline-block;
    margin: {
      left: -2px;
      right: 2em;
    }
  }
}

nav ul {
  @include horizontal-list;
}
```
9.  What is **SCSS**? Give an example<br>
SCSS (Sassy CSS): Uses the .scss file extension and is fully compliant with CSS syntax. It is the new version of SASS. <br>
10. What is **SASS**? Give an example<br>
Indented (simply called 'Sass'): Uses .sass file extension and indentation rather than brackets; it is not fully compliant with CSS syntax, but it's quicker to write. It’s the old version of SASS, but it will never be deprecated! <br>
11. What is the difference between **.scss** and **.sass** syntax. <br>
- SASS is used when we need a original syntax, code syntax is not required for SCSS. 
- SASS follows strict indentation, SCSS has no strict indentation. SASS has a loose syntax with white space and no semicolons, the SCSS resembles more to CSS style and use of semicolons and braces are mandatory. 
- SASS file extension is .sass and SCSS file extension is .scss.
- SASS has more developer community and support than SCSS. <br>
12. In which cases would we use **SCSS**? And in which cases would we use **SASS**?<br>
The choice between scss and sass is more than just personal preference these days. scss is much more prevalent - used in the most popular CSS frameworks like Bootstrap, Foundation, Materialize etc. The main UI frameworks favor scss over sass by default. <br>
13. Explain how **traditional CSS** and **Preprocessed CSS workflows** are different.<br>
- Traditional css goes from css to browser.
- Preprocessed css goes from pre-css, to css, to the browser.<br>
14. Can we create functions with **SASS**? If it is true, give an example.<br>
Functions allow you to define complex operations on SassScript values that you can re-use throughout your stylesheet. They make it easy to abstract out common formulas and behaviors in a readable way.

Functions are defined using the @function at-rule, which is written @function name(<arguments...>) { ... }. A function’s name can be any Sass identifier. It can only contain universal statements, as well as the @return at-rule which indicates the value to use as the result of the function call. Functions are called using the normal CSS function syntax.
```
@function pow($base, $exponent) {
  $result: 1;
  @for $_ from 1 through $exponent {
    $result: $result * $base;
  }
  @return $result;
}

.sidebar {
  float: left;
  margin-left: pow(4, 3) * 1px;
}
```
15. What is **nesting**? Is it useful? Give an example of **nesting**<br>
Nesting is a shortcut to creating CSS rules. So instead of writing so many lines of CSS just to be specific on the style we want to apply to an element, we simply nest it.
SCSS Syntax:
```
font: {
  family: Helvetica, sans-serif;
  size: 18px;
  weight: bold;
}

text: {
  align: center;
  transform: lowercase;
  overflow: hidden;
}
```
Css output:
```
font-family: Helvetica, sans-serif;
font-size: 18px;
font-weight: bold;

text-align: center;
text-transform: lowercase;
text-overflow: hidden;
```

16. Why use **@import**?<br>
Sass extends CSS's @import rule with the ability to import Sass and CSS stylesheets, providing access to mixins, functions, and variables and combining multiple stylesheets' CSS together. Unlike plain CSS imports, which require the browser to make multiple HTTP requests as it renders your page, Sass imports are handled entirely during compilation. <br>

17. How can we **import other CSS/SASS files** in SASS? Give an example<br>
Sass imports have the same syntax as CSS imports, except that they allow multiple imports to be separated by commas rather than requiring each one to have its own @import. Also, in the indented syntax, imported URLs aren’t required to have quotes.
_code.scss <br>
```
code {
  padding: .25em;
  line-height: 0;
}
```
_lists.scss <br>
```
ul, ol {
  text-align: left;

  & & {
    padding: {
      bottom: 0;
      left: 0;
    }
  }
}
```
Styles.scss <br>
```
@import 'foundation/code', 'foundation/lists';
```
18. Explain the concept of **inheritance in SASS**.<br>
- The @extend directive lets you share a set of CSS properties from one selector to another.
- The @extend directive is useful if you have almost identically styled elements that only differ in some small details.<br>
19. Why use **@extend**? Give an example<br>
```
.error {
  border: 1px #f00;
  background-color: #fdd;

  &--serious {
    @extend .error;
    border-width: 3px;
  }
}
```
