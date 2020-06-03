/*//////////////////////////////////
         POPSCRIPT LANGUAGE
               Tokens
//////////////////////////////////*/

module.exports = {

  // BASIC

  SPACE       : /\s/,
  PROPERTY    : /:\w+/,
  TABS        : /^\s+/,
  COLON       : /:/,
  DOT         : /\./,
  COMMA       : /,/,    
  L_PAREN     : /\(/,
  R_PAREN     : /\)/,
  ARGUMENTS   : /=>/,

  // TYPES

  STRING      : /('|")(.*?)('|")/,
  INT         : /\d+/,
  ARRAY_START : /:-/,
  ARRAY_END   : /-:/,
  TYPE        : /int|str|list/,
  OPTIONAL    : /optional/,
  BOOLEAN     : /true|false/,

  // KEYWORDS

  FUNCTION    : /fn|fnc|func|def|function/,
  IF          : /if/,
  ELIF        : /elif/,
  ELSE        : /else/,
  PRINT       : /print/,
  RETURN      : /return/,

  // OTHER

  WORD        : /\w+/,
  SIGNS       : />|<|=+|\+|\-|\*|\/|%/,
  NOT         : /not|!/,
  AND         : /and|&/,
  COMMENT     : /;.*/

}