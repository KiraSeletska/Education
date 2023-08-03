

export const DataArr = [
  {
    enique: [
      {
        name: "Enique",
        exampleImag:'',
        constText: 1,
        functionName: " unique ",
        equals: 1,
        args: " (arr) ",
        equalsMore: 1,
        braces: "",
        body1: "let newArr = [];",
        body2: " arr.filter((el) => !newArr.includes(el) && newArr.push(el));",
        body3: "",
        body4: "",
        body5: "",
        return: 1,
        returnValue: "newArr",
        functionCallArg: "([1, 1, 2, 2, 4, 2, 3, 7, 3])",
        notes: "// => [1, 2, 4, 3, 7]",
      },
      {
        constText: 1,
        functionName: " unique2 ",
        equals: 1,
        args: " (arr) ",
        equalsMore: 1,
        braces: 1,
        body1: "const result = arr.reduce((acc, item) => {",
        body2: "      if (acc.includes(item)) {",
        body3: "return acc;}",
        body4: "return [...acc, item];",
        body5: "    }, []);",
        return: 1,
        returnValue: " result;",
        functionCallArg: "([1, 1, 2, 2, 4, 2, 3, 7, 3])",
        notes: "// => [1, 2, 4, 3, 7]",
      },

      {
        constText: 1,
        functionName: " unique3 ",
        equals: 1,
        args: " (arr) ",
        equalsMore: 1,
        braces: "",
        body1:
          "arr.filter((item, index, self) => self.indexOf(item) === index);",
        body2: "",
        body3: "",
        body4: "",
        body5: "",
        return: "",
        returnValue: "",
        functionCallArg: "([1, 1, 2, 2, 4, 2, 3, 7, 3])",
        notes: "// => [1, 2, 4, 3, 7]",
      },
    ],
  },
  { flat: [
    {
      name: "Flat",
      exampleImag:  '',
      constText: 1,
      functionName: " flat ",
      equals: 1,
      args: " (arr) ",
      equalsMore: 1,
      braces: "",
      body1: "let res = [];",
      body2: " Array.isArray(el) ? (res = res.concat(flat(el))) : res.push(el);",
      body3: "    });",
      body4: "",
      body5: "",
      return: 1,
      returnValue: "res",
      functionCallArg: "([1, [2, [3, [4, 5]]]]))",
      notes: "// => [1, 2, 3, 4, 5]"
    },
    {
      constText: 1,
      functionName: " flat2 ",
      equals: 1,
      args: " (arr) ",
      equalsMore: 1,
      braces: "",
      body1: "arr.reduce(",
      body2: "(acc, el) => (Array.isArray(el) ? [...acc, ...flat(el)] : [...acc, el]),",
      body3: "[]",
      body4: ");",
      body5: "",
      return: 1,
      returnValue: "res",
      functionCallArg: "([1, [2, [3, [4, 5]]]]))",
      notes: "// => [1, 2, 3, 4, 5]"
    }
  ] },
  {
    getTreeValues: [
      {
        name: "GetTreeValues",
        exampleImag:  '../../images/exampleTree.jpg',
        constText: 1,
        functionName: " getTreeValues ",
        equals: 1,
        args: " (obg) ",
        equalsMore: 1,
        braces: "",
        body1: "let res = [ obj.value ];",
        body2: "if (Array.isArray(obj.children)) {",
        body3: "obj.children.forEach(el => res = res.concat(getTreeValues(el)))",
        body4: "}",
        body5: "",
        return: 1,
        returnValue: " res;",
        functionCallArg: "(tree)",
        notes: "// => [1, 2, 3, 4, 5, 6, 7]",
      },
      {
        constText: 1,
        functionName: " getTreeValues2 ",
        equals: 1,
        args: " (obg) ",
        equalsMore: 1,
        braces: "",
        body1: "let result = [obj.value]",
        body2: "if(obj.children){",
        body3: "obj.children.forEach(el => result = [...result, ...getTreeValues2(el)])",
        body4: "}",
        body5: "",
        return: 1,
        returnValue: " result",
        functionCallArg: "(tree)",
        notes: "// => [1, 2, 3, 4, 5, 6, 7]",
      },
      {
        constText: 1,
        functionName: " getTreeValues3 ",
        equals: 1,
        args: " ({value, children}) ",
        equalsMore: 1,
        braces: "",
        body1: "  let result = [value]",
        body2: "if(children){",
        body3: "children.forEach(el => result = [...result, ...getTreeValues2(el)])",
        body4: "}",
        body5: "",
        return: 1,
        returnValue: " result",
        functionCallArg: "(tree)",
        notes: "// => [1, 2, 3, 4, 5, 6, 7]",
      },
      {
        constText: 1,
        functionName: " getTreeValues4 ",
        equals: 1,
        args: " ({value, children}) ",
        equalsMore: 1,
        braces: "",
        body1: "",
        body2: "",
        body3: "",
        body4: "",
        body5: "",
        return: 1,
        returnValue: "[value].concat(children ? children.reduce((acc, curr) => acc.concat(getTreeValues4(curr)), []) : []);};",
        functionCallArg: "(tree)",
        notes: "// => [1, 2, 3, 4, 5, 6, 7]",
      }
    ]
  }, {
    test: [{name: 'test1'}]
  },
  {
    test: [{name: 'test2'}]
  },
  {
    test: [{name: 'test3'}]
  },
  {
    test: [{name: 'test4'}]
  },
  {
    test: [{name: 'test2'}]
  },
  {
    test: [{name: 'test6'}]
  },
  {
    test: [{name: 'test7'}]
  },
  {
    test: [{name: 'test8'}]
  },
  {
    test: [{name: 'test9'}]
  },
  {
    test: [{name: 'test10'}]
  },
];
