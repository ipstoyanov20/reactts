let userName: string | number = 'Max'


type User = {
    name: string
    age: number
    isAdmin: boolean
    id: string | number
}

let user: User

user = {
    name: 'Max',
    age: 20,
    isAdmin: true,
    id: 'abc'

}

var hobbies: Array<string> | string[]

hobbies = ['Sport', 'Music', 'Reading']

function add(a: number, b: number): number {
    const result = a + b
    return result
}

type Addfn = (a: number, b: number) => number

function calculate(a: number, b: number, calc: Addfn) {
    calc(a, b)
}

calculate(1, 2, add)


interface Credentials {
    password: string
    email: string
}

// interface Credentials{
//     mode: string
// }

let creds: Credentials

creds = {
    password: "13213",
    email: "test@example.com"
}

class AuthCredentials implements Credentials {
    email!: string
    password!: string
    userName!: string
}

function login(cred: Credentials) {

}

login(new AuthCredentials)

// type Admin = {
//     permissions: string[]
// }
// type AppUser = {
//     userName: string
// }
// type AppAdmin= Admin & AppUser

// let admin: AppAdmin

// admin = {
//     permissions: ['', ''],
//     userName: ''
// }


interface Admin {
    permissions: string[]
}

interface AppUser {
    userName: string
}

interface AppAdmin extends Admin, AppUser {

}

let admin: AppAdmin

admin = {
    permissions: ['', ''],
    userName: ''
}

let role: 'admin' | 'Admin1'

role = 'admin'
role = 'Admin1'


type DataStorage<T> = {
    storage: T[]
    add: (data: T) => void
}

const storage: DataStorage<string> = {
    storage: [''],
    add(data) {
        this.storage.push(data)
    }
}

function merge<T, U>(a: T, b: U) {
    return {
        ...a,
        ...b
    }
}

const newUser = merge<{ name: string }, { age: number }>({ name: "Ivo" }, { age: 20 })
{

}

newUser.age
