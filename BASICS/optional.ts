interface User {
    id: string;
    info?: {
        email?: string;
    }
}

function getEmail(user:User) : string {
    if (user.info) {
        return user.info.email!;
    }
    return ""
}

function getEmailEasy(user:User) : string {
    return user?.info?.email ?? "";
}

function addWithCallBack(x: number, y:number, callback?: () => void) {
    console.log([x,y]);
    callback?.();
}