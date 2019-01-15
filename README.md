# QjSearch
JQuery plugin for search on DOM. Search is carried out according to the text.

## HTML code ##
```html
<input type="text" id="search_field" placeholder="city" data-qjs="#content .block" data-qjs-0="#emptyresult" data-qjs-1="#notemptyresult" data_qjs_res="#result_count" />
```
## Attributes ##
```
data-qjs      - target for search output

data-qjs-res  - target for result output

data-qjs-0    - element visible for empty results

data-qjs-1    - element visible fot not empty results
```
## Javascript (JQuery) ##
```js
$("#search_field").qjsearch();  -  custom field function
$("input[data-gjs!='']").qjsearch();  -  universal function
```

Demo: [https://yumadilowadim.github.io/QjSearch/](https://yumadilowadim.github.io/QjSearch/)
