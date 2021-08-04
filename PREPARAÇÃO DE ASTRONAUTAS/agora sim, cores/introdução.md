# Cores

Usamos CSS para alterar cores do nosso documento.

## Tipos 

* background-color (para caixas)
* color (para textos)
* border-color (para caixas)
* outros...


## Valores

podemos definir os Valores

* palavra-chave (blue, transparent)
* hexadecimal (#009911)
* funções: rgb. rgba, hsl, hsla

```css
element{
    /*Keyword values */
    color: currentcolor;
    /* <named-color> values */
    color:red;
    color:blue;
    color:green;
}
```

/* <hex-color> values 0-F */
color: #090; /*Red Green Blue */
color: #009900;
color: #090a;
color: #009900aa;

/* <rgb()> values */

color: rgb(34, 12, 64, 0.6); /* 0-255 */
color: rgba(34, 12, 64, 0.6); 

/* <hsl()> values */
color: hsl(30, 100%, 50%, 0.6); /* hue - Saturation - Luminance */

/* global values */
color: inherit;
color: initial;
color: unset;