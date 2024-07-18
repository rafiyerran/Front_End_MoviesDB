type AuthPayload = {
    username: string
    password: string
}

type AuthResponse = {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    token: string
    refreshToken: string
  }

export type { AuthPayload, AuthResponse }