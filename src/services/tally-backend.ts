/* tslint:disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.0.13.0 (NJsonSchema v9.13.17.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

export module TallyBackend {

    export class Client {
        private http: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> };
        private baseUrl: string;
        protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

        constructor(baseUrl?: string, http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }) {
            this.http = http ? http : <any>window;
            this.baseUrl = baseUrl ? baseUrl : "";
        }

        /**
         * @return Success
         */
        getComments(id: string): Promise<PetitionCommentEntity[]> {
            let url_ = this.baseUrl + "/api/Comments/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");

            let options_ = <RequestInit>{
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };

            return this.http.fetch(url_, options_).then((_response: Response) => {
                return this.processGetComments(_response);
            });
        }

        protected processGetComments(response: Response): Promise<PetitionCommentEntity[]> {
            const status = response.status;
            let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
            if (status === 200) {
                return response.text().then((_responseText) => {
                    let result200: any = null;
                    let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [] as any;
                        for (let item of resultData200)
                            result200!.push(PetitionCommentEntity.fromJS(item));
                    }
                    return result200;
                });
            } else if (status !== 200 && status !== 204) {
                return response.text().then((_responseText) => {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve<PetitionCommentEntity[]>(<any>null);
        }

        /**
         * @param model (optional) 
         * @return Success
         */
        addComment(id: string, model: AddCommentModel | null | undefined): Promise<void> {
            let url_ = this.baseUrl + "/api/Comments/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");

            const content_ = JSON.stringify(model);

            let options_ = <RequestInit>{
                body: content_,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                }
            };

            return this.http.fetch(url_, options_).then((_response: Response) => {
                return this.processAddComment(_response);
            });
        }

        protected processAddComment(response: Response): Promise<void> {
            const status = response.status;
            let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
            if (status === 200) {
                return response.text().then((_responseText) => {
                    return;
                });
            } else if (status !== 200 && status !== 204) {
                return response.text().then((_responseText) => {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve<void>(<any>null);
        }

        /**
         * @param category (optional) 
         * @return Success
         */
        getAllPetitions(category: Category | null | undefined): Promise<PetitionEntity[]> {
            let url_ = this.baseUrl + "/api/Petitions?";
            if (category !== undefined)
                url_ += "category=" + encodeURIComponent("" + category) + "&";
            url_ = url_.replace(/[?&]$/, "");

            let options_ = <RequestInit>{
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };

            return this.http.fetch(url_, options_).then((_response: Response) => {
                return this.processGetAllPetitions(_response);
            });
        }

        protected processGetAllPetitions(response: Response): Promise<PetitionEntity[]> {
            const status = response.status;
            let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
            if (status === 200) {
                return response.text().then((_responseText) => {
                    let result200: any = null;
                    let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [] as any;
                        for (let item of resultData200)
                            result200!.push(PetitionEntity.fromJS(item));
                    }
                    return result200;
                });
            } else if (status !== 200 && status !== 204) {
                return response.text().then((_responseText) => {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve<PetitionEntity[]>(<any>null);
        }

        /**
         * @return Success
         */
        getPetition(id: string): Promise<PetitionEntity> {
            let url_ = this.baseUrl + "/api/Petitions/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");

            let options_ = <RequestInit>{
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };

            return this.http.fetch(url_, options_).then((_response: Response) => {
                return this.processGetPetition(_response);
            });
        }

        protected processGetPetition(response: Response): Promise<PetitionEntity> {
            const status = response.status;
            let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
            if (status === 200) {
                return response.text().then((_responseText) => {
                    let result200: any = null;
                    let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                    result200 = resultData200 ? PetitionEntity.fromJS(resultData200) : new PetitionEntity();
                    return result200;
                });
            } else if (status !== 200 && status !== 204) {
                return response.text().then((_responseText) => {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve<PetitionEntity>(<any>null);
        }

        /**
         * @return Success
         */
        deletePetition(id: string): Promise<void> {
            let url_ = this.baseUrl + "/api/Petitions/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");

            let options_ = <RequestInit>{
                method: "DELETE",
                headers: {
                }
            };

            return this.http.fetch(url_, options_).then((_response: Response) => {
                return this.processDeletePetition(_response);
            });
        }

        protected processDeletePetition(response: Response): Promise<void> {
            const status = response.status;
            let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
            if (status === 200) {
                return response.text().then((_responseText) => {
                    return;
                });
            } else if (status !== 200 && status !== 204) {
                return response.text().then((_responseText) => {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve<void>(<any>null);
        }

        /**
         * @param model (optional) 
         * @return Success
         */
        createPetition(model: CreatePetitionModel | null | undefined): Promise<void> {
            let url_ = this.baseUrl + "/api/Petitions/create";
            url_ = url_.replace(/[?&]$/, "");

            const content_ = JSON.stringify(model);

            let options_ = <RequestInit>{
                body: content_,
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                }
            };

            return this.http.fetch(url_, options_).then((_response: Response) => {
                return this.processCreatePetition(_response);
            });
        }

        protected processCreatePetition(response: Response): Promise<void> {
            const status = response.status;
            let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
            if (status === 201) {
                return response.text().then((_responseText) => {
                    return;
                });
            } else if (status !== 200 && status !== 204) {
                return response.text().then((_responseText) => {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve<void>(<any>null);
        }

        /**
         * @return Success
         */
        upvotePetition(id: string): Promise<void> {
            let url_ = this.baseUrl + "/api/Petitions/{id}/upvote";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");

            let options_ = <RequestInit>{
                method: "PUT",
                headers: {
                }
            };

            return this.http.fetch(url_, options_).then((_response: Response) => {
                return this.processUpvotePetition(_response);
            });
        }

        protected processUpvotePetition(response: Response): Promise<void> {
            const status = response.status;
            let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
            if (status === 200) {
                return response.text().then((_responseText) => {
                    return;
                });
            } else if (status !== 200 && status !== 204) {
                return response.text().then((_responseText) => {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve<void>(<any>null);
        }

        /**
         * @return Success
         */
        downvotePetition(id: string): Promise<void> {
            let url_ = this.baseUrl + "/api/Petitions/{id}/downvote";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");

            let options_ = <RequestInit>{
                method: "PUT",
                headers: {
                }
            };

            return this.http.fetch(url_, options_).then((_response: Response) => {
                return this.processDownvotePetition(_response);
            });
        }

        protected processDownvotePetition(response: Response): Promise<void> {
            const status = response.status;
            let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
            if (status === 200) {
                return response.text().then((_responseText) => {
                    return;
                });
            } else if (status !== 200 && status !== 204) {
                return response.text().then((_responseText) => {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve<void>(<any>null);
        }

        /**
         * @return Success
         */
        getUser(id: string): Promise<UserEntity[]> {
            let url_ = this.baseUrl + "/api/Users/{id}";
            if (id === undefined || id === null)
                throw new Error("The parameter 'id' must be defined.");
            url_ = url_.replace("{id}", encodeURIComponent("" + id));
            url_ = url_.replace(/[?&]$/, "");

            let options_ = <RequestInit>{
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            };

            return this.http.fetch(url_, options_).then((_response: Response) => {
                return this.processGetUser(_response);
            });
        }

        protected processGetUser(response: Response): Promise<UserEntity[]> {
            const status = response.status;
            let _headers: any = {}; if (response.headers && response.headers.forEach) { response.headers.forEach((v: any, k: any) => _headers[k] = v); };
            if (status === 200) {
                return response.text().then((_responseText) => {
                    let result200: any = null;
                    let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
                    if (resultData200 && resultData200.constructor === Array) {
                        result200 = [] as any;
                        for (let item of resultData200)
                            result200!.push(UserEntity.fromJS(item));
                    }
                    return result200;
                });
            } else if (status !== 200 && status !== 204) {
                return response.text().then((_responseText) => {
                    return throwException("An unexpected server error occurred.", status, _responseText, _headers);
                });
            }
            return Promise.resolve<UserEntity[]>(<any>null);
        }
    }

    export class PetitionCommentEntity implements IPetitionCommentEntity {
        id?: string | undefined;
        comment?: string | undefined;
        timeStamp?: Date | undefined;
        petitionEntityId?: string | undefined;
        petitionEntity?: PetitionEntity | undefined;

        constructor(data?: IPetitionCommentEntity) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        (<any>this)[property] = (<any>data)[property];
                }
            }
        }

        init(data?: any) {
            if (data) {
                this.id = data["id"];
                this.comment = data["comment"];
                this.timeStamp = data["timeStamp"] ? new Date(data["timeStamp"].toString()) : <any>undefined;
                this.petitionEntityId = data["petitionEntityId"];
                this.petitionEntity = data["petitionEntity"] ? PetitionEntity.fromJS(data["petitionEntity"]) : <any>undefined;
            }
        }

        static fromJS(data: any): PetitionCommentEntity {
            data = typeof data === 'object' ? data : {};
            let result = new PetitionCommentEntity();
            result.init(data);
            return result;
        }

        toJSON(data?: any) {
            data = typeof data === 'object' ? data : {};
            data["id"] = this.id;
            data["comment"] = this.comment;
            data["timeStamp"] = this.timeStamp ? this.timeStamp.toISOString() : <any>undefined;
            data["petitionEntityId"] = this.petitionEntityId;
            data["petitionEntity"] = this.petitionEntity ? this.petitionEntity.toJSON() : <any>undefined;
            return data;
        }
    }

    export interface IPetitionCommentEntity {
        id?: string | undefined;
        comment?: string | undefined;
        timeStamp?: Date | undefined;
        petitionEntityId?: string | undefined;
        petitionEntity?: PetitionEntity | undefined;
    }

    export class PetitionEntity implements IPetitionEntity {
        id?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        upVotes?: number | undefined;
        downVotes?: number | undefined;
        category?: PetitionEntityCategory | undefined;
        status?: PetitionEntityStatus | undefined;
        petitionCommentEntities?: PetitionCommentEntity[] | undefined;

        constructor(data?: IPetitionEntity) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        (<any>this)[property] = (<any>data)[property];
                }
            }
        }

        init(data?: any) {
            if (data) {
                this.id = data["id"];
                this.title = data["title"];
                this.description = data["description"];
                this.upVotes = data["upVotes"];
                this.downVotes = data["downVotes"];
                this.category = data["category"];
                this.status = data["status"];
                if (data["petitionCommentEntities"] && data["petitionCommentEntities"].constructor === Array) {
                    this.petitionCommentEntities = [] as any;
                    for (let item of data["petitionCommentEntities"])
                        this.petitionCommentEntities!.push(PetitionCommentEntity.fromJS(item));
                }
            }
        }

        static fromJS(data: any): PetitionEntity {
            data = typeof data === 'object' ? data : {};
            let result = new PetitionEntity();
            result.init(data);
            return result;
        }

        toJSON(data?: any) {
            data = typeof data === 'object' ? data : {};
            data["id"] = this.id;
            data["title"] = this.title;
            data["description"] = this.description;
            data["upVotes"] = this.upVotes;
            data["downVotes"] = this.downVotes;
            data["category"] = this.category;
            data["status"] = this.status;
            if (this.petitionCommentEntities && this.petitionCommentEntities.constructor === Array) {
                data["petitionCommentEntities"] = [];
                for (let item of this.petitionCommentEntities)
                    data["petitionCommentEntities"].push(item.toJSON());
            }
            return data;
        }
    }

    export interface IPetitionEntity {
        id?: string | undefined;
        title?: string | undefined;
        description?: string | undefined;
        upVotes?: number | undefined;
        downVotes?: number | undefined;
        category?: PetitionEntityCategory | undefined;
        status?: PetitionEntityStatus | undefined;
        petitionCommentEntities?: PetitionCommentEntity[] | undefined;
    }

    export class AddCommentModel implements IAddCommentModel {
        username?: string | undefined;
        comment?: string | undefined;

        constructor(data?: IAddCommentModel) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        (<any>this)[property] = (<any>data)[property];
                }
            }
        }

        init(data?: any) {
            if (data) {
                this.username = data["username"];
                this.comment = data["comment"];
            }
        }

        static fromJS(data: any): AddCommentModel {
            data = typeof data === 'object' ? data : {};
            let result = new AddCommentModel();
            result.init(data);
            return result;
        }

        toJSON(data?: any) {
            data = typeof data === 'object' ? data : {};
            data["username"] = this.username;
            data["comment"] = this.comment;
            return data;
        }
    }

    export interface IAddCommentModel {
        username?: string | undefined;
        comment?: string | undefined;
    }

    export class CreatePetitionModel implements ICreatePetitionModel {
        title?: string | undefined;
        description?: string | undefined;
        category?: CreatePetitionModelCategory | undefined;

        constructor(data?: ICreatePetitionModel) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        (<any>this)[property] = (<any>data)[property];
                }
            }
        }

        init(data?: any) {
            if (data) {
                this.title = data["title"];
                this.description = data["description"];
                this.category = data["category"];
            }
        }

        static fromJS(data: any): CreatePetitionModel {
            data = typeof data === 'object' ? data : {};
            let result = new CreatePetitionModel();
            result.init(data);
            return result;
        }

        toJSON(data?: any) {
            data = typeof data === 'object' ? data : {};
            data["title"] = this.title;
            data["description"] = this.description;
            data["category"] = this.category;
            return data;
        }
    }

    export interface ICreatePetitionModel {
        title?: string | undefined;
        description?: string | undefined;
        category?: CreatePetitionModelCategory | undefined;
    }

    export class UserEntity implements IUserEntity {
        id?: string | undefined;
        username?: string | undefined;
        data?: string | undefined;

        constructor(data?: IUserEntity) {
            if (data) {
                for (var property in data) {
                    if (data.hasOwnProperty(property))
                        (<any>this)[property] = (<any>data)[property];
                }
            }
        }

        init(data?: any) {
            if (data) {
                this.id = data["id"];
                this.username = data["username"];
                this.data = data["data"];
            }
        }

        static fromJS(data: any): UserEntity {
            data = typeof data === 'object' ? data : {};
            let result = new UserEntity();
            result.init(data);
            return result;
        }

        toJSON(data?: any) {
            data = typeof data === 'object' ? data : {};
            data["id"] = this.id;
            data["username"] = this.username;
            data["data"] = this.data;
            return data;
        }
    }

    export interface IUserEntity {
        id?: string | undefined;
        username?: string | undefined;
        data?: string | undefined;
    }

    export enum Category {
        _0 = 0,
        _1 = 1,
        _2 = 2,
        _3 = 3,
        _4 = 4,
        _5 = 5,
    }

    export enum PetitionEntityCategory {
        _0 = 0,
        _1 = 1,
        _2 = 2,
        _3 = 3,
        _4 = 4,
        _5 = 5,
    }

    export enum PetitionEntityStatus {
        _0 = 0,
        _1 = 1,
        _2 = 2,
        _3 = 3,
        _4 = 4,
    }

    export enum CreatePetitionModelCategory {
        _0 = 0,
        _1 = 1,
        _2 = 2,
        _3 = 3,
        _4 = 4,
        _5 = 5,
    }

    export class SwaggerException extends Error {
        message: string;
        status: number;
        response: string;
        headers: { [key: string]: any; };
        result: any;

        constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
            super();

            this.message = message;
            this.status = status;
            this.response = response;
            this.headers = headers;
            this.result = result;
        }

        protected isSwaggerException = true;

        static isSwaggerException(obj: any): obj is SwaggerException {
            return obj.isSwaggerException === true;
        }
    }

    function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
        if (result !== null && result !== undefined)
            throw result;
        else
            throw new SwaggerException(message, status, response, headers, null);
    }

}