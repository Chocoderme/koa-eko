# KoaEko
Create koa-router controllers using a decorator-based style

# What is KoaEko ?
KoaEko is [**koa**](https://koajs.com/) module allowing you to generate koa-router controllers using decorators

# Dependencies
KoaEko was built using multiple packages:
* **koa**: [Website](https://koajs.com/) | [GitHub](https://github.com/koajs/koa) | [**Npm**](https://www.npmjs.com/package/koa)
* **koa-router**: Website | [GitHub](https://github.com/alexmingoia/koa-router) | [**Npm**](https://www.npmjs.com/package/koa-router)
* **sequelize**: [Website](http://docs.sequelizejs.com/) | [GitHub](https://github.com/sequelize/sequelize) | [**Npm**](https://www.npmjs.com/package/sequelize)
* **sequelize-typescript**: Website | GitHub | [**Npm**](https://www.npmjs.com/package/sequelize-typescript)
* **reflect-metadata**: [Website](https://rbuckton.github.io/reflect-metadata/) | GitHub | [**Npm**](https://www.npmjs.com/package/reflect-metadata)

# Installation
You can install **KoaEko** using **npm**:
```bash
npm i koa-eko
```

# Reference

* Classes
    * [EkoController](#ekocontroller)
* Class decorators
    * [EkoVersion(version: string)](#ekoversionversion-string)
* Method decorators
    * [EkoRoute(type: RouteType, path: string, name?: string, description?: string)](#ekoroutetype-routetype-path-string-name-string-description-string)
    * [EkoGet(path: string, name?: string, description?: string)](#ekogetpath-string-name-string-description-string)
    * [EkoPost(path: string, name?: string, description?: string)](#ekopostpath-string-name-string-description-string)
    * [EkoPut(path: string, name?: string, description?: string)](#ekoputpath-string-name-string-description-string)
    * [EkoDelete(path: string, name?: string, description?: string)](#ekodeletepath-string-name-string-description-string)
* Enums
    * [RouteType](#routetype)

## EkoController
**KoaEko** provides a EkoController you **must inherit from** if you want KoaEko to work
```typescript
import { EkoController } from "koa-eko";

class MyController extends EkoController {}
```
Once your controller inherits from EkoController, it will have access to `Routes(): IMiddleware` and `AllowedMethods(): IMiddleware`.
You can find more on these functions on [koa-router documentation](https://github.com/alexmingoia/koa-router#api-reference)


## Decorators
### EkoVersion(version: string)
**EkoVersion** allows you to set a version for a KoaEko controller
```typescript
import { EkoController, EkoVersion } from "koa-eko";

@EkoVersion("1.0.0")
class MyController extends EkoController {}
```
If the tag is missing, the version *1.0.0* will be used by default

### EkoRoute(type: RouteType, path: string, name?: string, description?: string)
**EkoRoute** declares the attached method as a **KoaEko** controller route
* **type** (RouteType): verb of the API route (eg: RouteType.GET)
* **path** (string): the route relative path (eg: "/")
* **name** (string) *optional*: the route name (eg: "Get all users")
* **description** (string) *optional*: the route description (eg: "Returns all users with their personal informations")
```typescript
import { IRouterContext } from "koa-router"
import { EkoController, EkoRoute, RouteType } from "koa-eko"

class UsersController extends EkoController {
    public constructor() {
        super();
    }
    
    @EkoRoute(RouteType.GET, "/" "Get all users", "Returns all users with their personal informations")
    public async MyGetRoute(ctx: IRouterContext): Promise<void> {
        // Do Stuff
    }
}
```

### EkoGet(path: string, name?: string, description?: string)
Alias for EkoRoute(RouteType.GET, path, name, description)
```typescript
import { IRouterContext } from "koa-router"
import { EkoGet } from "koa-eko"

@EkoGet("/" "Get all users", "Returns all users with their personal informations")
public async MyGetRoute(ctx: IRouterContext): Promise<void> {
    // Do Stuff
}
```

### EkoPost(path: string, name?: string, description?: string)
Alias for EkoRoute(RouteType.POST, path, name, description)
```typescript
import { IRouterContext } from "koa-router"
import { EkoPost } from "koa-eko"

@EkoPost("/" "Add an user", "Add a new user and return it")
public async MyPostRoute(ctx: IRouterContext): Promise<void> {
    // Do Stuff
}
```

### EkoPut(path: string, name?: string, description?: string)
Alias for EkoRoute(RouteType.PUT, path, name, description)
```typescript
import { IRouterContext } from "koa-router"
import { EkoPut } from "koa-eko"

@EkoPut("/{id}" "Patch an user", "Update user's informations")
public async MyPutRoute(ctx: IRouterContext): Promise<void> {
    // Do Stuff
}
```

### EkoDelete(path: string, name?: string, description?: string)
Alias for EkoRoute(RouteType.DELETE, path, name, description)
```typescript
import { IRouterContext } from "koa-router"
import { EkoDelete } from "koa-eko"

@EkoDelete("/{id}" "Delete an user", "Delete an existing user")
public async MyDeleteRoute(ctx: IRouterContext): Promise<void> {
    // Do Stuff
}
```

## Enums
### RouteType
RouteType represents the verbs that **KoaEko** handles.
```typescript
export enum RouteType {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
```

# Exemple
Here is a controller build using KoaEko
```typescript
import { IRouterContext } from "koa-router";
import { Comment } from "../../POCO/Comment";
import { EkoGet, EkoVersion } from "koa-eko";


@EkoVersion("1.0.0")
export class CommentsController extends EkoController {

    public constructor() {
        super();
    }

    @EkoGet("/", "Get all comments", "Get all comments and / or associated users")
    public async GetAll(ctx: IRouterContext): Promise<void> {
        let comments: Comment[] = await Comment.scope(this.getScope()).all();
        ctx.body = comments;
    }

}

export default new CommentsController();
```
