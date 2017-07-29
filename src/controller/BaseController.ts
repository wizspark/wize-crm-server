import {Context} from "koa";

export class BaseController {
    private _model: any;

    constructor(model: any) {
        this._model = model;
    }

    /**
     * Get all model instances
     * @param context
     * @returns {Promise<void>}
     */
    get = async(context: Context): Promise<any> => {
        context.body = await this._model.findAndCountAll();
    };

    /**
     * Get specific instance
     * @param context
     * @returns {Promise<void>}
     */
    getById = async(context: Context): Promise<any> => {
        const {id} = context.params;
        context.body = await this._model.findById(id);
    };

    /**
     * Create new model instance
     * @param context
     * @returns {Promise<void>}
     */
    post = async(context: Context): Promise<any> => {
        const {body} = context.request;
        context.body = await this._model.create(body);
    };

    /**
     * Update an model instance
     * @param context
     * @returns {Promise<void>}
     */
    patch = async(context: Context): Promise<any> => {
        const {body} = context.request;
        const {id} = context.params;
        const instance = await this._model.findById(id);
        context.assert(instance, 404, 'Model not found');

        context.body = await instance.updateAttributes(body);
    };

    /**
     * Delete an model instance
     * @param context
     * @returns {Promise<void>}
     */
    destroy = async(context: Context): Promise<any> => {
        const {id} = context.params;
        const instance = await this._model.findById(id);
        context.assert(instance, 404, 'Model not found');

        context.body = await instance.destroy();
    }
}