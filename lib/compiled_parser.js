/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,8],$V1=[5,25],$V2=[1,14],$V3=[1,13],$V4=[5,25,30,41],$V5=[1,17],$V6=[5,25,30,41,42,51],$V7=[1,27],$V8=[1,36],$V9=[1,40],$Va=[1,37],$Vb=[1,38],$Vc=[1,35],$Vd=[1,39],$Ve=[1,25],$Vf=[5,25,30],$Vg=[5,25,30,41,42],$Vh=[1,52],$Vi=[18,46],$Vj=[1,55],$Vk=[1,56],$Vl=[1,57],$Vm=[1,58],$Vn=[5,18,25,30,33,36,37,40,41,42,46,51,53,54,55,56,57,72],$Vo=[5,18,25,30,33,36,37,40,41,42,46,48,51,53,54,55,56,57,58,72],$Vp=[1,61],$Vq=[2,64],$Vr=[1,73],$Vs=[1,74],$Vt=[5,25,30,41,46],$Vu=[1,89],$Vv=[5,25,30,41,42,46,53],$Vw=[5,25,30,40,41,42,51],$Vx=[1,92],$Vy=[1,93],$Vz=[1,94],$VA=[5,18,25,30,33,34,36,37,40,41,42,46,51,53,54,55,56,57,72],$VB=[5,25,30,33,36,37,40,41,42,51];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"Root":3,"Query":4,"EOF":5,"SelectQuery":6,"Unions":7,"SelectWithLimitQuery":8,"BasicSelectQuery":9,"Select":10,"OrderClause":11,"GroupClause":12,"LimitClause":13,"SelectClause":14,"WhereClause":15,"SELECT":16,"Fields":17,"FROM":18,"Table":19,"DISTINCT":20,"Joins":21,"Literal":22,"LEFT_PAREN":23,"List":24,"RIGHT_PAREN":25,"WINDOW":26,"WINDOW_FUNCTION":27,"Number":28,"Union":29,"UNION":30,"ALL":31,"Join":32,"JOIN":33,"ON":34,"Expression":35,"LEFT":36,"RIGHT":37,"INNER":38,"OUTER":39,"WHERE":40,"LIMIT":41,"ORDER":42,"BY":43,"OrderArgs":44,"OrderArg":45,"SEPARATOR":46,"Value":47,"DIRECTION":48,"GroupBasicClause":49,"HavingClause":50,"GROUP":51,"ArgumentList":52,"HAVING":53,"MATH":54,"MATH_MULTI":55,"OPERATOR":56,"CONDITIONAL":57,"IN":58,"String":59,"Function":60,"UserFunction":61,"Boolean":62,"NUMBER":63,"BOOLEAN":64,"STRING":65,"DBLSTRING":66,"LITERAL":67,"DOT":68,"FUNCTION":69,"Field":70,"STAR":71,"AS":72,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",16:"SELECT",18:"FROM",20:"DISTINCT",23:"LEFT_PAREN",25:"RIGHT_PAREN",26:"WINDOW",27:"WINDOW_FUNCTION",30:"UNION",31:"ALL",33:"JOIN",34:"ON",36:"LEFT",37:"RIGHT",38:"INNER",39:"OUTER",40:"WHERE",41:"LIMIT",42:"ORDER",43:"BY",46:"SEPARATOR",48:"DIRECTION",51:"GROUP",53:"HAVING",54:"MATH",55:"MATH_MULTI",56:"OPERATOR",57:"CONDITIONAL",58:"IN",63:"NUMBER",64:"BOOLEAN",65:"STRING",66:"DBLSTRING",67:"LITERAL",68:"DOT",69:"FUNCTION",71:"STAR",72:"AS"},
productions_: [0,[3,2],[4,1],[4,2],[6,1],[6,1],[9,1],[9,2],[9,2],[9,3],[8,2],[10,1],[10,2],[14,4],[14,5],[14,5],[14,6],[19,1],[19,3],[19,3],[19,4],[19,6],[7,1],[7,2],[29,2],[29,3],[21,1],[21,2],[32,4],[32,5],[32,5],[32,6],[32,6],[32,6],[32,6],[15,2],[13,2],[11,3],[44,1],[44,3],[45,1],[45,2],[12,1],[12,2],[49,3],[50,2],[35,3],[35,3],[35,3],[35,3],[35,3],[35,3],[35,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[24,1],[28,1],[62,1],[59,1],[59,1],[22,1],[22,3],[60,4],[61,4],[52,1],[52,3],[17,1],[17,3],[70,1],[70,1],[70,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return this.$ = $$[$0-1];
break;
case 2: case 4: case 5: case 6: case 11: case 42: case 52: case 53: case 54: case 55: case 56: case 57: case 58:
this.$ = $$[$0];
break;
case 3:
this.$ = (function () {
        $$[$0-1].unions = $$[$0];
        return $$[$0-1];
      }());
break;
case 7:
this.$ = (function () {
        $$[$0-1].order = $$[$0];
        return $$[$0-1];
      }());
break;
case 8:
this.$ = (function () {
        $$[$0-1].group = $$[$0];
        return $$[$0-1];
      }());
break;
case 9:
this.$ = (function () {
        $$[$0-2].group = $$[$0-1];
        $$[$0-2].order = $$[$0];
        return $$[$0-2];
      }());
break;
case 10:
this.$ = (function () {
        $$[$0-1].limit = $$[$0];
        return $$[$0-1];
      }());
break;
case 12:
this.$ = (function () {
        $$[$0-1].where = $$[$0];
        return $$[$0-1];
      }());
break;
case 13:
this.$ = new yy.Select($$[$0-2], $$[$0], false);
break;
case 14:
this.$ = new yy.Select($$[$0-2], $$[$0], true);
break;
case 15:
this.$ = new yy.Select($$[$0-3], $$[$0-1], false, $$[$0]);
break;
case 16:
this.$ = new yy.Select($$[$0-3], $$[$0-1], true, $$[$0]);
break;
case 17:
this.$ = new yy.Table($$[$0]);
break;
case 18: case 46:
this.$ = $$[$0-1];
break;
case 19:
this.$ = new yy.SubSelect($$[$0-1]);
break;
case 20:
this.$ = new yy.SubSelect($$[$0-2], $$[$0]);
break;
case 21:
this.$ = new yy.Table($$[$0-5], $$[$0-4], $$[$0-3], $$[$0-1]);
break;
case 22: case 26: case 38: case 68: case 70:
this.$ = [$$[$0]];
break;
case 23:
this.$ = $$[$0-1].concat($$[$01]);
break;
case 24:
this.$ = new yy.Union($$[$0]);
break;
case 25:
this.$ = new yy.Union($$[$0], true);
break;
case 27:
this.$ = $$[$0-1].concat($$[$0]);
break;
case 28:
this.$ = new yy.Join($$[$0-2], $$[$0]);
break;
case 29:
this.$ = new yy.Join($$[$0-2], $$[$0], 'LEFT');
break;
case 30:
this.$ = new yy.Join($$[$0-2], $$[$0], 'RIGHT');
break;
case 31:
this.$ = new yy.Join($$[$0-2], $$[$0], 'LEFT', 'INNER');
break;
case 32:
this.$ = new yy.Join($$[$0-2], $$[$0], 'RIGHT', 'INNER');
break;
case 33:
this.$ = new yy.Join($$[$0-2], $$[$0], 'LEFT', 'OUTER');
break;
case 34:
this.$ = new yy.Join($$[$0-2], $$[$0], 'RIGHT', 'OUTER');
break;
case 35:
this.$ = new yy.Where($$[$0]);
break;
case 36:
this.$ = new yy.Limit($$[$0]);
break;
case 37:
this.$ = new yy.Order($$[$0]);
break;
case 39: case 69: case 71:
this.$ = $$[$0-2].concat($$[$0]);
break;
case 40:
this.$ = new yy.OrderArgument($$[$0], 'ASC');
break;
case 41:
this.$ = new yy.OrderArgument($$[$0-1], $$[$0]);
break;
case 43:
this.$ = (function () {
        $$[$0-1].having = $$[$0];
        return $$[$0-1];
      }());
break;
case 44:
this.$ = new yy.Group($$[$0]);
break;
case 45:
this.$ = new yy.Having($$[$0]);
break;
case 47: case 48: case 49: case 50: case 51:
this.$ = new yy.Op($$[$0-1], $$[$0-2], $$[$0]);
break;
case 59:
this.$ = new yy.ListValue($$[$0]);
break;
case 60:
this.$ = new yy.NumberValue($$[$0]);
break;
case 61:
this.$ = new yy.BooleanValue($$[$0]);
break;
case 62:
this.$ = new yy.StringValue($$[$0], "'");
break;
case 63:
this.$ = new yy.StringValue($$[$0], '"');
break;
case 64:
this.$ = new yy.LiteralValue($$[$0]);
break;
case 65:
this.$ = new yy.LiteralValue($$[$0-2], $$[$0]);
break;
case 66:
this.$ = new yy.FunctionValue($$[$0-3], $$[$0-1]);
break;
case 67:
this.$ = new yy.FunctionValue($$[$0-3], $$[$0-1], true);
break;
case 72:
this.$ = new yy.Star();
break;
case 73:
this.$ = new yy.Field($$[$0]);
break;
case 74:
this.$ = new yy.Field($$[$0-2], $$[$0]);
break;
}
},
table: [{3:1,4:2,6:3,8:4,9:5,10:6,14:7,16:$V0},{1:[3]},{5:[1,9]},o($V1,[2,2],{7:10,13:11,29:12,30:$V2,41:$V3}),o($V4,[2,4]),o($V4,[2,5]),o($V4,[2,6],{11:15,12:16,49:18,42:$V5,51:[1,19]}),o($V6,[2,11],{15:20,40:[1,21]}),{17:22,20:[1,23],22:29,23:$V7,28:30,35:26,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd,70:24,71:$Ve},{1:[2,1]},o($V1,[2,3],{29:41,30:$V2}),o($V4,[2,10]),o($Vf,[2,22]),{28:42,63:$V8},{6:43,8:4,9:5,10:6,14:7,16:$V0,31:[1,44]},o($V4,[2,7]),o($V4,[2,8],{11:45,42:$V5}),{43:[1,46]},o($Vg,[2,42],{50:47,53:[1,48]}),{43:[1,49]},o($V6,[2,12]),{22:29,23:$V7,28:30,35:50,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},{18:[1,51],46:$Vh},{17:53,22:29,23:$V7,28:30,35:26,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd,70:24,71:$Ve},o($Vi,[2,70]),o($Vi,[2,72]),o($Vi,[2,73],{54:$Vj,55:$Vk,56:$Vl,57:$Vm,72:[1,54]}),{22:29,23:$V7,28:30,35:59,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},o($Vn,[2,52],{58:[1,60]}),o($Vo,[2,53],{68:$Vp}),o($Vo,[2,54]),o($Vo,[2,55]),o($Vo,[2,56]),o($Vo,[2,57]),o($Vo,[2,58]),o([5,18,25,30,33,36,37,40,41,42,46,48,51,53,54,55,56,57,58,68,72],$Vq,{23:[1,62]}),o($Vo,[2,60]),o($Vo,[2,62]),o($Vo,[2,63]),{23:[1,63]},o($Vo,[2,61]),o($Vf,[2,23]),o($V4,[2,36]),o($Vf,[2,24],{13:11,41:$V3}),{6:64,8:4,9:5,10:6,14:7,16:$V0},o($V4,[2,9]),{22:29,28:30,44:65,45:66,47:67,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},o($Vg,[2,43]),{22:29,23:$V7,28:30,35:68,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},{22:29,23:$V7,28:30,35:70,47:28,52:69,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},o($V6,[2,35],{54:$Vj,55:$Vk,56:$Vl,57:$Vm}),{19:71,22:72,23:$Vr,67:$Vs},{22:29,23:$V7,28:30,35:26,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd,70:75,71:$Ve},{18:[1,76],46:$Vh},{22:77,67:$Vs},{22:29,23:$V7,28:30,35:78,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},{22:29,23:$V7,28:30,35:79,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},{22:29,23:$V7,28:30,35:80,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},{22:29,23:$V7,28:30,35:81,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},{25:[1,82],54:$Vj,55:$Vk,56:$Vl,57:$Vm},{19:83,22:72,23:$Vr,67:$Vs},{67:[1,84]},{22:29,23:$V7,28:30,35:70,47:28,52:85,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},{22:29,23:$V7,28:30,35:70,47:28,52:86,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},o($Vf,[2,25],{13:11,41:$V3}),o($V4,[2,37],{46:[1,87]}),o($Vt,[2,38]),o($Vt,[2,40],{48:[1,88]}),o($Vg,[2,45],{54:$Vj,55:$Vk,56:$Vl,57:$Vm}),o([5,25,30,41,42,53],[2,44],{46:$Vu}),o($Vv,[2,68],{54:$Vj,55:$Vk,56:$Vl,57:$Vm}),o($Vw,[2,13],{21:90,32:91,33:$Vx,36:$Vy,37:$Vz}),o($VA,[2,17],{26:[1,95],68:$Vp}),{4:97,6:3,8:4,9:5,10:6,14:7,16:$V0,22:29,23:$V7,24:96,28:30,35:70,47:28,52:98,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},o([5,18,25,26,30,33,34,36,37,40,41,42,46,51,53,54,55,56,57,68,72],$Vq),o($Vi,[2,71]),{19:99,22:72,23:$Vr,67:$Vs},o($Vi,[2,74],{68:$Vp}),o([5,18,25,30,33,36,37,40,41,42,46,51,53,54,56,57,72],[2,47],{55:$Vk}),o($Vn,[2,48]),o([5,18,25,30,33,36,37,40,41,42,46,51,53,56,57,72],[2,49],{54:$Vj,55:$Vk}),o([5,18,25,30,33,36,37,40,41,42,46,51,53,57,72],[2,50],{54:$Vj,55:$Vk,56:$Vl}),o($Vn,[2,46]),o($Vn,[2,51]),o([5,18,25,26,30,33,34,36,37,40,41,42,46,48,51,53,54,55,56,57,58,68,72],[2,65]),{25:[1,100],46:$Vu},{25:[1,101],46:$Vu},{22:29,28:30,45:102,47:67,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},o($Vt,[2,41]),{22:29,28:30,47:103,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},o($Vw,[2,15],{32:104,33:$Vx,36:$Vy,37:$Vz}),o($VB,[2,26]),{19:105,22:72,23:$Vr,67:$Vs},{33:[1,106],38:[1,107],39:[1,108]},{33:[1,109],38:[1,110],39:[1,111]},{27:[1,112]},{25:[1,113]},{25:[1,114]},{25:[2,59],46:$Vu},o($Vw,[2,14],{32:91,21:115,33:$Vx,36:$Vy,37:$Vz}),o($Vo,[2,67]),o($Vo,[2,66]),o($Vt,[2,39]),o($Vv,[2,69]),o($VB,[2,27]),{34:[1,116]},{19:117,22:72,23:$Vr,67:$Vs},{33:[1,118]},{33:[1,119]},{19:120,22:72,23:$Vr,67:$Vs},{33:[1,121]},{33:[1,122]},{23:[1,123]},o($VA,[2,18]),o($VA,[2,19],{22:124,67:$Vs}),o($Vw,[2,16],{32:104,33:$Vx,36:$Vy,37:$Vz}),{22:29,23:$V7,28:30,35:125,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},{34:[1,126]},{19:127,22:72,23:$Vr,67:$Vs},{19:128,22:72,23:$Vr,67:$Vs},{34:[1,129]},{19:130,22:72,23:$Vr,67:$Vs},{19:131,22:72,23:$Vr,67:$Vs},{28:132,63:$V8},o($VA,[2,20],{68:$Vp}),o($VB,[2,28],{54:$Vj,55:$Vk,56:$Vl,57:$Vm}),{22:29,23:$V7,28:30,35:133,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},{34:[1,134]},{34:[1,135]},{22:29,23:$V7,28:30,35:136,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},{34:[1,137]},{34:[1,138]},{25:[1,139]},o($VB,[2,29],{54:$Vj,55:$Vk,56:$Vl,57:$Vm}),{22:29,23:$V7,28:30,35:140,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},{22:29,23:$V7,28:30,35:141,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},o($VB,[2,30],{54:$Vj,55:$Vk,56:$Vl,57:$Vm}),{22:29,23:$V7,28:30,35:142,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},{22:29,23:$V7,28:30,35:143,47:28,59:31,60:32,61:33,62:34,63:$V8,64:$V9,65:$Va,66:$Vb,67:$Vc,69:$Vd},o($VA,[2,21]),o($VB,[2,31],{54:$Vj,55:$Vk,56:$Vl,57:$Vm}),o($VB,[2,33],{54:$Vj,55:$Vk,56:$Vl,57:$Vm}),o($VB,[2,32],{54:$Vj,55:$Vk,56:$Vl,57:$Vm}),o($VB,[2,34],{54:$Vj,55:$Vk,56:$Vl,57:$Vm})],
defaultActions: {9:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}