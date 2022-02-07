function addNumbers(a: number, b: number) {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string | number) : string => `${str1} ${str2}`;

export const fetchData = (url: string) : Promise<string> => Promise.resolve(`Data from ${url}`)

function introduce(salutation:string, ...names: string[]) {
     return `${salutation} ${names.join(' ')}`
}

export function getName(user: {first: string, last: string}) : string {
  return `${user.first} ${user.last}`
}

export function getNames(user: {first: string, last: string}) : string {
  return `${user?.first ?? 'First'} ${user?.last ?? 'Last'}`;
}