import todoRouter from './todoRoute.ts';
import { Application } from "../../deps.ts";

const initRouters = (app: Application) => {
    app.use(todoRouter.routes());
};

export default initRouters;