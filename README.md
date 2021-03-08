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
it’s written <variable>: <expression>. <br>
```
$base-color: #c6538c;
$border-dark: rgba($base-color, 0.88);

.alert {
  border: 1px solid $border-dark;
}
```

8. What is a **mixin**? Why is it important? Give an example<br>
Mixins allow you to define styles that can be re-used throughout your stylesheet. They make it easy to avoid using non-semantic classes like, and to distribute collections of styles in libraries.
Mixins are defined using the @mixin at-rule, which is written @mixin <name> { ... } or @mixin name(<arguments...>) { ... }. A mixin’s name can be any Sass identifier, and it can contain any statement other than top-level statements. They can be used to encapsulate styles that can be dropped into a single style rule; they can contain style rules of their own that can be nested in other rules or included at the top level of the stylesheet; or they can just serve to modify variables. Mixins are included into the current context using the @include at-rule, which is written @include <name> or @include <name>(<arguments...>), with the name of the mixin being included.
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
10. What is **SASS**? Give an example<br>
11. What is the difference between **.scss** and **.sass** syntax. <br>
12. In which cases would we use **SCSS**? And in which cases would we use **SASS**?<br>
13. Explain how **traditional CSS** and **Preprocessed CSS workflows** are different.<br>
14. Can we create functions with **SASS**? If it is true, give an example.<br>
15. What is **nesting**? Is it useful? Give an example of **nesting**<br>
16. Why use **@import**?<br>
17. How can we **import other CSS/SASS files** in SASS? Give an example<br>
18. Explain the concept of **inheritance in SASS**.<br>
19. Why use **@extend**? Give an example<br>
