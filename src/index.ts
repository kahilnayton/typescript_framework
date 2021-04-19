import { User } from "./models/User";

const user = new User({ name: 'george', age: 1 });

user.save()

