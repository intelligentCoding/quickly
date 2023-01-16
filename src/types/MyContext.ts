import { User } from "./user"

export type MyContext = {
  accessToken?: string | null
  user?: User
}