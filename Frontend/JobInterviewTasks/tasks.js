  //вывести только уникадбные значения
const unique = (arr) => {
    let newArr = [];
    arr.filter((el) => !newArr.includes(el) && newArr.push(el));
    return newArr;
  };

  const unique2 = (arr) => {
    const result = arr.reduce((acc, item) => {
      if (acc.includes(item)) {
        return acc;
      }
      return [...acc, item];
    }, []);
 return result;
  };
  const unique3 = (arr) =>
    arr.filter((item, index, self) => self.indexOf(item) === index);

 console.log( unique([1, 1, 2, 2, 4, 2, 3, 7, 3])); // => [1, 2, 4, 3, 7]
  /********************************************************************************************************************************************************* */
  /*
Необходимо написать функцию, принимающую 
в аргументах многомерный массив неограниченной 
вложенности и возвращающую новый одномерный массив,
 состоящий из элементов со всех уровней вложенности 
 исходного массива.

Например:

flat([1, [2, [3, [4,5]]]]); // => [1, 2, 3, 4, 5]
*/

  const flat = (arr) => {
    let res = [];
    arr.forEach((el) => {
      Array.isArray(el) ? (res = res.concat(flat(el))) : res.push(el);
    });
    return res;
  };

  const flat2 = (arr) =>
    arr.reduce(
      (acc, el) => (Array.isArray(el) ? [...acc, ...flat(el)] : [...acc, el]),
      []
    );

  //console.log(flat2([1, [2, [3, [4, 5]]]])); // => [1, 2, 3, 4, 5]

/************************************************************************************************************************************************** */
//Дана структура данных в виде дерева:

const tree = {
 value: 1,
 children: [
  {
   value: 2,
   children: [
    { value: 4 },
    { value: 5 },
   ]
  },
  {
   value: 3,
   children: [
    { value: 6 },
    { value: 7 },
   ]
  }
 ]
};
/*
Необходимо написать функцию, возвращающую значения всех вершин 
дерева:
getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

*/

const getTreeValues = (obj) => {
  let res = [ obj.value ];
  if (Array.isArray(obj.children)) {
		obj.children.forEach(el => res = res.concat(getTreeValues(el)));
	}

	return res;
};

const getTreeValues2 = (obj) => {
  let result = [obj.value]
if(obj.children){
obj.children.forEach(el => result = [...result, ...getTreeValues2(el)])
}
return result
};

const getTreeValues3 = ({value, children}) => {
  let result = [value]
if(children){
children.forEach(el => result = [...result, ...getTreeValues2(el)])
}
return result
};


const getTreeValues4 = ({value, children}) => {
  return [value].concat(children 
    ? children.reduce((acc, curr) => acc.concat(getTreeValues4(curr)), []) 
    : []);
};

console.log(getTreeValues4(tree)); // => [1, 2, 3, 4, 5, 6, 7]

