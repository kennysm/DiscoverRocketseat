# Combinators

Combinadores, pois eles trabalham para buscar e combinar seletores a fim
de aplicar uma estilização

## Descendant combinator

* Identificado por um espaço entre os seletores.
* Busca um elementos dentro de outros.


```css
body article h2
```


## Child combinators

* Identificado pelo sinal `>` entre dois seletores
* Selecione somente o elemento que é filho direto do pai
* Elementos depois do filho direto serão desconsiderados

```css
body >ul > li
```

## Adjacent sibling combinator

* Identificado pelo sina `+` entre dois Seletores
* Selecione somente o elemento do lado direto que é irmão direto na hierarquia

```css
h1 + p
```

## Utilizando combinators

```css
ul> li[class="red"]
```

# Dica

* Seletores muito específicos tendem a causar dificuldades no resudo das regras
de estilização dos Elementos.
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.

