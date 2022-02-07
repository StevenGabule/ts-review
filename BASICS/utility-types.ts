interface MyUser {
    name: string;
    id: number;
    email?: string;
}

type MyUserOptionals = Partial<MyUser>

const merge = (user: MyUser, overrides: MyUserOptionals) : MyUser => {
    return {
        ...user,
        ...overrides
    }
}

console.log(merge({
    name: "Jack",
    id: 2,
    email: "dontemail@dontemail.com"
}, {
    name: "Mine"
}));

type RequiredMyUser = Required<MyUser>
type JustEmailAndName = Pick<MyUser, "email" | "name">
type UserWithoutID = Omit<MyUser, "id">;

const mayById = (users: MyUser[]) : Record<MyUser['id'], UserWithoutID> => {
    return users.reduce((a,v) => {
        const {id, ...other} = v;
        return {
            ...a,
            [id] : other
        }
    }, {})
}

console.log(mayById([
    {id: 1, name: "Mr. Foo"},
    {id: 2, name: "Mr. Baz"},
]));
