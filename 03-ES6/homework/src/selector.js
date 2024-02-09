let traverseDomAndCollectElements = function (matchFunc, startEl = document.body) {
  let resultSet = [];

  //if (typeof startEl === "undefined") {
  // startEl = document.body;
  //} 


  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl)
  }

  for (let i = 0; i < startEl.children.length; i++) {
    let result = traverseDomAndCollectElements(matchFunc, startEl.children[i])
    resultSet = [...resultSet, ...result]
  }
  return resultSet;

};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

let selectorTypeMatcher = function (selector) {
  // tu código aquí
  if (selector[0] === "#") {
    return "id"
  } else if (selector[0] === ".") {
    return "class"
  } else if (selector.includes(".")) {
    return "tag.class"
  } else {
    return "tag"
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

let matchFunctionMaker = function (selector) {
  let selectorType = selectorTypeMatcher(selector);
  let matchFunction;
  if (selectorType === "id") {
    matchFunction = (element) => {
      return selector === `#${element.id}`
    }

  } else if (selectorType === "class") {
    matchFunction = (element) => {
      let classList = element.classList
      for (let i = 0; i < classList.length; i++) {
        if (selector === `.${classList[i]}`) {
          return true
        }
      }
      return false
    }

  } else if (selectorType === "tag.class") {

    let [tag, clase] = selector.split(".")

    matchFunction = (element) => {
      return matchFunctionMaker(tag)(element) && matchFunctionMaker("." + clase)(element)
    }

  } else if (selectorType === "tag") {
    matchFunction = (element) => {
      return element.tagName === selector.toUpperCase()
    }
  }
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
