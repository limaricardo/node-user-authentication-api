import { Router, Request, Response, NextFunction, response } from "express";
import { StatusCodes } from "http-status-codes";
import userRepository from "../repositories/user.repository";

// get /users
// get /users/:uuid
// post /users
// put /users/:uuid
// delete /users:uuid


const usersRoute = Router(); 

usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send({users});
});

usersRoute.get('/users/:uuid', (req: Request<{ uuid:string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body
    res.status(StatusCodes.CREATED).send(newUser)
});

usersRoute.put('/users/:uuid', (req: Request<{ uuid:string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({  uuid });
});

usersRoute.delete('/users/:uuid', (req: Request<{ uuid:string }>, res: Response, next: NextFunction) => {
    res.status(StatusCodes.OK);
})

export default usersRoute;