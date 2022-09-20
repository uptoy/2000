import { rest } from 'msw'
import posts from './posts'


export const handlers = [
    rest.get(`${process.env.REACT_APP_API_URL}/users`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([{ username: "friend1" }, { username: "friend2" }]))
    }),
    rest.get(`${process.env.REACT_APP_API_URL}/posts`, (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(posts))
    })
]