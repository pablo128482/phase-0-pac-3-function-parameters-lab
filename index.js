function logTwoValues(introduduction, name) {
    console.log(`The two values are ${introduction} and ${name}.`);
  }
  
  function introduction(name) {
    return(`Hi, my name is ${name}.`)
  }
  
  function introductionWithLanguage(name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
  }
  function introductionWithLanguageOptional(name, language = "JavaScript") {
   return(`Hi, my name is ${name} and I am learning to program in ${language}.`)
  }