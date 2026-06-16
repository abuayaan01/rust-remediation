import type { User } from "./types";

export const fetchUser = () => {
    const user = fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            if (!res.ok) {
                throw new Error("Error in fetching users");
            }
            return res.json();
        })
        .then((data: User[]) => {
            return data;
        })
        .catch((err) => {
            console.log(err)
            throw err;
        });
    return user;
};