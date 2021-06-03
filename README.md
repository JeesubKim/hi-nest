<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).







### ***작성자 : 김지섭***



# 0. nestjs 설치 및 시작하기

## 0. npm 을 이용한 설치
> $ npm install -g @nestjs/cli

설치가 완료되면 정상적으로 설치되었는지 확인하기 위해 콘솔창에 `nest` 를 입력해본다.


다음과 같이 나타나면 정상적으로 설치 된 것이다.
```console
Usage: nest <command> [options]

Options:
  -v, --version                                   Output the current version.
  -h, --help                                      Output usage information.  

Commands:
  new|n [options] [name]                          Generate Nest application.
  build [options] [app]                           Build Nest application.
  start [options] [app]                           Run Nest application.
  info|i                                          Display Nest project details.
  update|u [options]                              Update Nest dependencies.
  add [options] <library>                         Adds support for an external library to your project.
  generate|g [options] <schematic> [name] [path]  Generate a Nest element.
    Available schematics:
      ┌───────────────┬─────────────┬──────────────────────────────────────────────┐
      │ name          │ alias       │ description                                  │
      │ application   │ application │ Generate a new application workspace         │
      │ class         │ cl          │ Generate a new class                         │
      │ configuration │ config      │ Generate a CLI configuration file            │
      │ controller    │ co          │ Generate a controller declaration            │
      │ decorator     │ d           │ Generate a custom decorator                  │
      │ filter        │ f           │ Generate a filter declaration                │
      │ gateway       │ ga          │ Generate a gateway declaration               │
      │ guard         │ gu          │ Generate a guard declaration                 │
      │ interceptor   │ in          │ Generate an interceptor declaration          │
      │ interface     │ interface   │ Generate an interface                        │
      │ middleware    │ mi          │ Generate a middleware declaration            │
      │ module        │ mo          │ Generate a module declaration                │
      │ pipe          │ pi          │ Generate a pipe declaration                  │
      │ provider      │ pr          │ Generate a provider declaration              │
      │ resolver      │ r           │ Generate a GraphQL resolver declaration      │
      │ service       │ s           │ Generate a service declaration               │
      │ library       │ lib         │ Generate a new library within a monorepo     │
      │ sub-app       │ app         │ Generate a new application within a monorepo │
      │ resource      │ res         │ Generate a new CRUD resource                 │
      └───────────────┴─────────────┴──────────────────────────────────────────────┘
```

## 1. 프로젝트 생성


> $ nest new

를 입력하면 프로젝트 명과 npm/yarn 중 어떤것을 사용할 것인지 선택하는 메뉴가 나타난다.
Project 이름은 임의로 적고 필자는 npm을 선택하였다.

생성이 완료되면 다음과 같은 구조의 파일들이 생성된다.

![Project 초기 생성된 트리](tree.png)

코드 관리를 위한 github remote repo 등록도 잊지말고 해주자.



> $ git remote add origin ${REPO_HTTPS_LINK}


## 2. 프로젝트 실행

package.json 파일을 보면 script 들이 주르륵 적혀있다.
Nodejs 를 만들었을때와는 비교도 안되게 여러가지것들이 설정이 되어있다.
```json
{
    ...
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    ...
}

```

그 중 프로젝트 실행에 사용 되는 건 위 4개 정도이다.


우선 dev로 한번 실행해보자

> $ npm run start:dev


```console
[23:24:20] Starting compilation in watch mode...

[23:24:25] Found 0 errors. Watching for file changes.

[Nest] 13336   - 2021-05-28 23:24:27   [NestFactory] Starting Nest application...
[Nest] 13336   - 2021-05-28 23:24:27   [InstanceLoader] AppModule dependencies initialized +12ms   
[Nest] 13336   - 2021-05-28 23:24:27   [RoutesResolver] AppController {}: +5ms
[Nest] 13336   - 2021-05-28 23:24:27   [RouterExplorer] Mapped {, GET} route +2ms
[Nest] 13336   - 2021-05-28 23:24:27   [NestApplication] Nest application successfully started +2ms

```


성공적으로 실행되었다는 메세지가 출력 된다.

아니, 어디로 열렸는지 알려줘야지!!??

좀 불친절하다. 

src/main.ts 파일을 열어보자

```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

```

아... 뭐 가 NestFactory 도 있고... 잘 모르겠지만 app.listen 에서 포트 3000번을 듣고있는것을 알수 있다.

> http://localhost:3000/

으로 접속해 보자 ㅎㅎ


![nestjs 서버 첫 시작 화면](hello.png)


접속이 잘 된다. Very good.

끝. Happy hacking!

---

---

# 1. 시작하기


dev 로 시작하기까지 해봤으니 이제 파일 구조에 대해서 한번 뜯어보자

src 폴더에 가보면 
1. app.controller
2. app.module
3. app.service
4. main

으로 나눠져있는 것을 볼 수 있다.

다시말하면 `controller, module, service` 이렇게 3개로 나눠져 있다는 말이다.


nestjs 의 entry point 는 `main.ts` 파일이다. 바뀌면 안되는 부분이다.

main.ts 파일 내부를 살펴보면

```typescript
//src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

```

bootstrap 이라는 `async function`가 선언되어 있고 그 아래 호출된다.

이 함수는 기본으로 bootstrap 이라는 이름으로 만들어 져 있지만 고쳐도 무방하다. 대신 호출 해 줘야 겠지.


import 에 대해서 살펴보자.

NestFactory.. 뭔가 찍어내는 모듈처럼 이름이 생겼다. 이에 대한 자세한 분석은 lib내부를 또 뜯어내어야 하는데, 이부분은 추후에 시간적 여유가 된다면 해보자.

그 다음 import 는 AppModule 인데, 앞서 본 3개의 파일 중 하나인 것을 알 수 있다.

또, bootstrap 함수 첫줄에 보면 이 AppModule을 NestFactory.create 함수의 인자로 넘기는 것을 볼 수 있다.

AppModule 파일을 이번에 살펴보자.

```typescript
//src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```


@Module 부분이 눈에 띄는데, 이부분은 typescript decorator 이다.

* Nestjs 에서는 decorator 가 많이 나오므로 익숙해지자.

Module decorator 에 controllers와 providers 가 각각 AppController와 AppService 로 설정 되어 있다.


그렇다 위에서 봤던 3개 파일들이 코드에 다 나왔다.

controller 부터 들어가보자


```typescript
//src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

```

컨트롤러에는 AppContorller class를 export하고 있고, 그 내부에 @Get decorator 가 포함되어있는것이 보인다.

getHello() 라는 함수에 decorator 가 달려있고, return 은 또 appService에서 getHello 라는 함수를 호출하고 있다.

마지막 service 파일을 한번 들어가 보자


```typescript
//src/app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```


어렵다.
이번에는 Injectable decorator 로 감싸진 AppService class가 있고, 해당 멤버 함수에 getHello는 Hello World를 return 하고있다.


바로 우리가 http://localhost:3000/ 에서 보았던 바로 그 문구, 그게 여기서 나온것이였다.




- controller 는 url을 가져오고 함수를 실행하는 곳이라고 생각하면 된다. (express 의 router 같은 것)


그래서 다음과 같이 contoller 내에 @get decorator를 이용해서 추가 코드를 작성하고 테스트 해보자

```typescript
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

/* 이 부분 */
  @Get('/nest')
  test(): string {
    return "it's our fisrt time to use nestjs!!";
  }
/* 이 부분 */
}
```

그리곤 접속해보자 http://localhost:3000/nest/

![Controller에 router 를 작성](simpleRouterInController.png)



잘된다.

근데 기본 코드를 보면 좀 이상한 것을 볼 수 있는데, 

내가 작성한 /nest route에 mapping 해놓은 test() 함수의 return 으로 string 을 return 하고 있고, 이러한 로직으로도 잘 동작하고 있음에도,

기본 코드는 `this.appService`를 참조하여 해당 class의 멤버 함수인 getHello()를 호출하여 return 하고 있는것이다.


## 왜그럴까?


바로 nestjs 의 architecture와 관련되어 있다.


nestjs 는 비지니스 로직과 컨트롤러를 분리하기를 원하는데, 이러한 이유로 
controller에서는 routing만 하고, **실제 비지니스 로직은 app.service 에서 담당**하는 것이다.



그래서 위에서 구현한것 처럼 controller 에서 바로 결과를 return 하는게 아니라,

controller에서는 route 를 받고, service의 함수를 실행해서 return 하는게 기본 컨셉인 것이다.



그럼 위에서 작성한 코드를 기본 컨셉에 맞게 한번 고쳐보자.
1. app.service 에 test() 함수를 추가
```typescript
//src/app.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  test(): string {
    return "it's our fisrt time to use nestjs!!";
  }
}
```

2. app.controller에서 service의 test() 함수를 호출하여 return 하기
```typescript
//src/app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/nest')
  test(): string {
    return this.appService.test();
  }
}

```



3. 동작 확인
잘 동작한다.

![landingpage](appService.png)



---
---


# 2. 본격적으로 시작하기


지금까지 nestjs 를 초기에 생성했을때 생성되는 파일들의 구조를 한번 살펴보았다.

이제는 내 프로젝트를 만들어 보아야 하지 않을까?


간단하게 게시판을 하나 만들어 보려고 한다.

REST API 를 다양하게 만들기 위해서 
1. 게시판의 게시물 CRUD 기능과 
2. 제목으로 검색하는 기능

정도를 만들어 보고자 한다.


그럼 우선 처음부터 진행하기 위해서 src 폴더의 entry 포인트인 `main.ts` 와 그의 entry point인 `app.module.ts` 를 제외하고 모두 삭제하고 진행해 보자.

```typescript
//main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

```

```typescript
//app.module.ts
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule { }

```

AppModule class에 연결되어있던 controllers와 providers (service) 도 삭제하여 준비해 준다.


## 2.1 CLI 를 이용한 시작

앞서 우리는 nestjs cli 를 설치하였다. `$ nest` command 를 이용해서도 알 수 있듯이 다양한 command line interface 에 대한 가이드가 나온다.


### Controller
nest cli 를 이용해서 controller를 생성해 보자


```console
$ nest g co
```

- g는 generate 의 약어이다. generate 이라고 입력해도 무방하다.
- co 는 controller 의 약어이다. controller라고 입력해도 무방하다.

(console 창에서 nest라고만 쳐보면 나오는 설명에 모두 나와있으므로 참고해보기 바란다.)


위 command 를 입력 시 어떤 이름의 controller를 만들 것인지 물어보고, 필자는 게시판의 게시물을 CRUD 하는 post 관련 controller 를 만들 예정이라 `post` 라고 입력하였다.


```console
? What name would you like to use for the controller? post
CREATE post/post.controller.spec.ts (478 bytes)
CREATE post/post.controller.ts (97 bytes)
UPDATE app.module.ts (204 bytes)
```


![controller generation using cli](generateController.png)

그랬더니 위와같이 post 폴더가 생성되고 그 안에 post 와 관련된 controller가 생성된 것을 볼 수 있다.

* spec 파일은 테스트 파일이다. 추후에 자세히 다루도록 하겠다.

또, `app.module.ts` 내에 controller 에 post controller가 자동으로 등록 된 것을 확인 할 수 있다.

```typescript
import { Module } from '@nestjs/common';
import { PostController } from './post/post.controller';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [],
})
export class AppModule { }

```

이렇게 자동으로 추가를해주는 것을 보아서, nest에서 제공해주는 cli를 이용하면 편리하게 생성하고 그를 등록하고 할 수 있다는 의미이다.


그럼 돌아가서 `post.controller.ts` 파일을 한번 살펴 보자

```typescript
import { Controller } from '@nestjs/common';

@Controller('post')
export class PostController {}

```

아주 깰.끔 하게 별것이 없다.

@nestjs 로부터 Controller가 import 되어있고, Controller decorater에 'post' 라고 들어가 있는것을 볼 수 있다.

이게 무슨 의미이냐면,

> http://localhost:3000/post/ 의 주소는 이쪽으로 들어온다.

라는 의미이다.

즉 controller가 post router 와 같은 역할을 하는 것 이다.


그럼 이제 get method를 하나 등록해 보자
<br/><br/><br/>

>### 0. GET METHOD
필자는 게시물을 모두 return 할 예정의 함수를 넣어 보았다.
```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('post')
export class PostController {

    @Get('all')
    getAllPost() {
        return [
            {
                id: '0',
                title: 'hello nestjs',
                writer: 'gshopping',
                body: 'we are not familiar with nestjs yet'
            }
        ]
    }
}
```


그리곤 접속해보자.

http://localhost:3000/post/all


![our first nestjs api!](firstApi.png)

우리의 첫 rest api 이다. 정상적으로 잘 나오는 것을 볼 수 있다.

하나만 더 등록해 보자. 이번에는 router 링크를 파라미터로 받을 수 있도록 말이다.


nest js 에서는 거의 모든걸 decorater 를 사용해서 개발한다고 생각하는 편이 편하다.

```typescript
// post.controller.ts 의 일부
...
    @Get('/:id')
    getApost(@Param('id') id: string) {
        return [
            {
                id: id,
                title: 'our second post',
                writer: 'gshopping',
                body: 'we are getting better!!'
            }
        ]
    }
...
```

router 내의 값을 parameter로 받기 위해서는 `:` 를 접두어로 붙여준다.
위의 경우에는 `:id` 로 붙였고 이는 `해당 위치의 데이터는 id라는 파라미터로 받겠다` 라는 의미이다.


> 그러면 router 는 그렇게 설정하였고, 그 id값을 가져오는건 어떻게 하는건데?

decorater 바로 아래에 넣는 함수의 parameter에 작성해 주면 되는데, 바로 `@Param` decorater 를 사용한다.

@Param('id') 를 붙여주고 받을 변수 명과 type를 넣어주면 해당 id값을 함수내에서 사용할 수 있게 되는 것이다.

* 중요한건, 위의 예제를 예로들면, `@Param decorator 에 들어가는 값('id')`은 그 상위 decorater 인 @Get에서 parameter로 받기로한 `':id'` 와 이름이 동일해야 한다.


![our second rest api](secondApi.png)

의도한 대로 전달받은 데이터의 id값이 path 의 값과 동일하게 return 되는 것을 확인 할 수 있다.


>### 1. POST METHOD

post 로 전송할때는 body를 보낼텐데, 그럼 body는 어떻게 가져오는걸까?

위에서 말했던 것처럼 nest 에서는 `decorator 로 하면되겠지?` 로 의심하고 보면 된다.



```typescript
//post.controller.ts
...
@Post('/new')
makeNewPost(@Body() newPost) {

    return { 'successfully received body of new data': newPost };
}
...

```
새로운 포스트 데이터를 전달 받을 때, `@Body` decorator 를 넣어주고 그에 맞는 변수명 (위에서는 newPost) 로 받아준다.


- Request (POST)
![post test](postTest.png)

- Response
![post response](postBody.png)


아주 잘 동작하는 것을 볼 수 있다.


>### 2. PATCH METHOD

그럼 마지막으로 두가지 모두 받아야 할 경우에는 어떻게 하면 될까?

예를들어 id값과 body를 모두 받아야하는 update 나 patch 같은 경우를 말한다.



크게 고민할 것 없이 둘다 쓰면 된다.

```typescript
//post.controller.ts
@Patch('/update/:id')
updatePost(@Param('id') id: string, @Body() body) {
    return {
        'updatedId': id,
        ...body
    };
}
```

둘다 받았을 뿐이다.

- Request (Patch)
![patch req](patchTest.png)
- Response
![patch res](patchBody.png)


> ### 3. Query string

게시물 검색 API 를 만들어 보자.

link 는 간단하게 search 로 만들면 될 것으로 보인다.

```typescript
//post.controller.ts
...
@Get('/search')
getBySearchKey(@Query('searchKey') key: string) {
    return `You requested to search with ${key}`
}
...
```
역시나 `@Query`라는 decorator 로 이런게 해결이 가능하다.
위와같이 만들고 한번 테스트 해보자
- querystring 테스트
![queryString api를 만들고 테스트 하였지만 의도와 다른 api가 호출되었다](queryStringFailure.png)

link에는 분명히 제대로 들어갔는데... 결과가 이상한 결과가 나왔다.

자세히 보면 `@Get('/:id')` 의 결과가 나온것을 알 수 있다.

이게 왜이런걸까?
nestjs에서는 api 의 순서가 중요하다.

`@Get('/:id')` 가 현재 `@Get('search')` 보다 상위에 존재하고, 그러므로 `search` 자체가 id값으로 인식되면서 `/post/:id` route 로 들어가버린것이다.

* 위 결과에서 보면 `"id":"search"` 라고 나온것을 볼 수 있다.

그럼 어떻게 해야할까?

비교적 간단하게 순서만 바꿔 주면 된다.


```typescript
//post.controller.ts
...
@Get('/search')
getBySearchKey(@Query('searchKey') key: string) {
    return `You requested to search with ${key}`
}

@Get('/:id')
getApost(@Param('id') id: string) {
    return [
        {
            id: id,
            title: 'our second post',
            writer: 'gshopping',
            body: 'we are getting better!!'
        }
    ]
}
...
```

* 이렇게 함으로써 /:id 보다 /search를 먼저 확인하게 된다.
**REST API 를 만들때 이런 부분을 잘 고려해서 작성해야 하겠다.**


- Query string 성공 화면
![query string 테스트 성공](queryStringSuccess.png)



### Service
nest cli 를 이용해서 service를 생성해 보자
Service는 business logic을 담당하는 부분이다.

앞서 설명한적 있지만, controller는 router 와 파라미터를 받는 기능만 하고,

그 이후 logic은 service 에서 처리하는것이 nest의 컨셉이다.

다음 command를 이용하자

```console
$ nest g s
```

- g는 generate 의 약어이다. generate 이라고 입력해도 무방하다.
- s 는 service 의 약어이다. service라고 입력해도 무방하다.

```console
? What name would you like to use for the service? post
CREATE src/post/post.service.spec.ts (446 bytes)
CREATE src/post/post.service.ts (88 bytes)
UPDATE src/app.module.ts (266 bytes)      
```

controller 생성 때와 동일하게 service 이름을 물어보는데, controller와 동일하게 입력한다. 이렇게 하면 post.controller 가 생성된 폴더에 동일하게 post.service가 생성된다.

![automatically generated service files](serviceTree.png)


app.module.ts 파일에도 자동으로 service가 등록 된 것을 볼 수 있다.
```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService],
})
export class AppModule { }

```


그럼 controller에서 작성했던 return logic을 service 로 옮겨 보도록하자.

controller에서 사용했던 이름과 동일 할 필요는 없지만 동일하게 작성하도록 하고 아래 3개의 GET Method와 관련된 service를 작성해 보자


```typescript
//post.controller.ts
@Get('all')
getAllPost() {
    ...
}
@Get('/search')
getBySearchKey(@Query('searchKey') key: string) {
    ...
}

@Get('/:id')
getApost(@Param('id') id: string) {
    ...
}
```

-  post.service.ts 파일로 logic을 옮긴 모습

```typescript
//post.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
    getAllPost() {
        return [
            {
                id: '0',
                title: 'hello nestjs',
                writer: 'gshopping',
                body: 'we are not familiar with nestjs yet'
            }
        ]
    }
    getBySearchKey(key: string) {
        return `You requested to search with ${key}`
    }
    getApost(id: string) {
        if (Number(id) > 100) {
            throw new NotFoundException(`id (${id}) Not found`)
        }
        return [
            {
                id: id,
                title: 'our second post',
                writer: 'gshopping',
                body: 'we are getting better!!'
            }
        ]
    }
}

```
 * 변경 중에 `getApost function` 에 예외처리 코드를 한번 넣어 보았다. id 가 100 이상이 들어올 경우에는 NotFoundException 을 발생시키는데, 이와같이 nestjs 에서 준비해놓은 exception 객체를 생성함으로써 자동으로 response를 다음과 같이 statusCode와 함께 만들어서 client 에 보내 줄 수 있다.

![not found exception](notfoundexception.png)


돌아와서, 그러면 controller에서는 어떻게 변화되어야 할까?

앞서 제일 처음에 project를 생성한 뒤에 살펴보았던 것 처럼, controller에서 service를 참조 한 후 각 함수를 호출하면 되겠다.

`contructor` 에 다음과 같이 입력하면 service 를 자동으로 import 한다.

```typescript
constructor(private readonly postService: PostService) { }
```

다음은 변경한 `post.controller.ts` 파일이다.

```typescript
//post.controller.ts
...
constructor(private readonly postService: PostService) { }
@Get('all')
getAllPost() {
    return this.postService.getAllPost();
}
@Get('/search')
getBySearchKey(@Query('searchKey') key: string) {
    return this.postService.getBySearchKey(key);
}

@Get('/:id')
getApost(@Param('id') id: string) {
    return this.postService.getApost(id);
}
...
```

테스트 해보면 모두 정상 동작하는 것을 볼 수 있다.

실제로 service 파일에서는 database에 접근해서 데이터를 가져오는 logic이 들어가면 된다.

이러한 business logic과 router 를 분리하는 구조가 바로 controller와 service를 분리한 개념인 것이다.


# 2.1 본격적으로 시작하기2 - 전송 데이터 (Json object) 유효성 검사

nestjs 는 기본으로 typescript 를 사용하고 있다.

그런데 우리가 코드를 작성하면서, type을 명시해주지 않은 부분들이 있다.

예를들면 @Post decorator 를 사용한 REST API를 만든 경우, body에 대한 Type은 특별히 명시하지 않고 있고 바로 이부분을 말하는 것이다.


이 부분은 전송에 사용되는 데이터 객체라고 해서 DTO (Data Transfer Object)라고 불리고 파일로 관리 할 수 있다.


`src/post/dto/new-post.dto.ts` 파일을 만들어 보자

```typescript
//src/post/dto/new-post.dto.ts
export class NewPostDto {
    readonly title: string;
    readonly writer: string;
    readonly body: string;
}
```


그리고 post 에서 들어오는 데이터에 대해서 controller와 service에 모두 type을 위 class로 맵핑 해 준다.

```typescript
//post.controller.ts
...
@Post('/new')
makeNewPost(@Body() newPost: NewPostDto) {

    return this.postService.makeNewPost(newPost);
}
...
```

```typescript
//post.service.ts
makeNewPost(newPost: NewPostDto) {
    return { 'successfully received body of new data': newPost };
}
```

우선 이렇게 해줌으로써 type을 맵핑 할 수 있게되었고, 이를 이용해서 nestjs에서는 `데이터 유효성 검사`를 할 수 있게 된다.


데이터 유효성 검사를 위해서 class validator 를 설치해 준다.

```console
$ npm install class-validator class-transformer
```

설치가 완료되면 class-validator 의 decorator 를 `NewPostDto(new-post.dto.ts)` class에 맵핑해 준다.

```typescript
//new-post.dto.ts
import { IsString } from "class-validator";

export class NewPostDto {
    @IsString()
    readonly title: string;
    @IsString()
    readonly writer: string;
    @IsString()
    readonly body: string;
}
```

main.ts 에 다음과 같이 추가해 준다.

```typescript
//main.ts
...
app.useGlobalPipes(
  new ValidationPipe({
    transform:true
  })
)
...
```
<!-- 
ValidationPipe 에는 많은 옵션들을 추가할 수 있는데, 위 추가된 `transform:true` 같은 경우는 string으로 오는 사용자 데이터를 내가 원하는 type으로 자동 형변환 해주는 기능이다.

예를들어 `post.service.ts`의 `getApost()`코드를 보자

```typescript
getApost(id: string) {
  if (Number(id) > 100) {
      throw new NotFoundException(`id (${id}) Not found`)
  }
  return [
      {
          id: id,
          title: 'our second post',
          writer: 'gshopping',
          body: 'we are getting better!!'
      }
  ]
}
```

함수 파라미터로 id를 받고 이는 string이므로 100보다 큰지 확인하기 위에서 코드내부에서 Number로 Type casting을 하고 있는것을 볼 수 있다.

현재 Transform 을 true로 변경하였기때문에 id:string 을 id:number 로 변경하고 내부 typecasting을 없애보겠다.





```typescript
//post.controller.ts
@Get('/:id')
getApost(@Param('id') id: number) {
    return this.postService.getApost(id);
}

//post.service.ts
getApost(id: number) {
  if (id > 100) {
      throw new NotFoundException(`id (${id}) Not found`)
  }
  return [
      {
          id: id,
          title: 'our second post',
          writer: 'gshopping',
          body: 'we are getting better!!'
      }
  ]
}
```

![auto typecasting with validation pipe](validationPipe_auto_typecasting.png)


 -->

이제 테스트를 해볼 시간이다.


1. 임의의 양식(json)으로 post를 하는 경우
![validation checking with random body](postmethod_validationChecking.png) 
![validation failure](postmethod_validationChecking_failure.png)


2. 약속된 양식(json)으로 post를 하는 경우
![validation checking with exact body](postmethod_validationChecking_success.png) 
![validation success](postmethod_validationChecking_success_response.png)




지금까지는 신규 게시물에 대한 DTO를 작성했다면, 이번에는 update 를 위한 DTO 를 생성해 보자


```typescript
//update-post-dto.ts
import { IsString } from "class-validator";

export class UpdatePostDto {
    @IsString()
    readonly title?: string;
    @IsString()
    readonly writer?: string;
    @IsString()
    readonly body?: string;
}
```

`update-post-dto.ts` 는 `?` 를 붙여줌으로써 필수 요소가 아닌것을 넣어준다.

왜냐하면 update 시에는 꼭 모든 data가 필요하지 않다. update 될 항목들만 보내주면 되기 때문이다.

그리고 controller와 service에 UpdatePostDto 를 type으로 지정해 준다.

```typescript
//post.controller.ts
...
@Patch('/update/:id')
updatePost(@Param('id') id: number, @Body() body) {
    return this.postService.updatePost(id, body);
}
...
//post.service.ts
...
updatePost(id: number, body: UpdatePostDto) {
  return {
      'updatedId': id,
      ...body
  };
}
...
```



그런데 이렇게 매번 하면, 동일한 데이터를 똑같이 복사 해 준뒤에 required('?') 를 넣어주는 작업을 해야한다.


이런 부분을 보완해줄 `PartialType`을 사용한다.

이를 위해서는 nestjs의 mapped types 를 추가로 설치한다
(Type을 변환시키는 패키지)
```console
$ npm install @nestjs/mapped-types
```


그 후 `update-post.dto.ts` 내용을 다음과 같이 변경한다.

```typescript
import { PartialType } from '@nestjs/mapped-types';
import { NewPostDto } from './new-post.dto';

// 기존
// export class UpdatePostDto {
//     @IsString()
//     readonly title?: string;
//     @IsString()
//     readonly writer?: string;
//     @IsString()
//     readonly body?: string;
// }

export class UpdatePostDto extends PartialType(NewPostDto) { }
```

좀전에 설치한 nestjs 의 mapped-types에서 PartialType 을 import 한뒤, UpdatePostDto 가 PartialType을 상속한다.

PartialType 괄호 안에 들어가는 Class는 BaseType 이 된다. 즉 NewPostDto 를 넣게 되면, NewPostDto 와 동일한 type으로 된다. 그렇지만 required 항목은 아닌 상태로 되어서 위에서 작성했던 `?` 를 모두 넣는것과 같은 형태가 된다.


이렇게만 작성하면 동일한 class 를 복사해서 일일히 `?` 를 넣어주는 수고를 하지 않아도 된다.

---

지금까지 NEST 의 구조파악에서 부터 새로운 route (controller) 생성과 비지니스 로직(service) 를 연결하는 법에 대해서 알아보았다.

그런데 잠깐, 

그러면 landing paging 인 `http://localhost:3000/` 의 router 는 어떻게, 어디에 넣어야 되는거야?  라는 질문이 문득 나왔다.

눈치껏 `@Controller()` 에는 비워놓으면 갈것 같은데 말이지...


이를 위해서 전체 구조를 다 뜯어 고쳐보겠다.

먼저 `app.module.ts` 파일을 다시 살펴보자

```typescript
...
@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService],
})
...
```
controller 와 provider에 Post 용 controller와 service가 등록이 되어있다.

nestjs 는 module 단위로 움직인다고 보면되는데,

app.module에는 app.controller만 등록되도록 변경한다.

그리고 post 관련해서는 `post.module.ts`을 별도로 생성하도록 하자

```console
$ nest g mo
? What name would you like to use for the module? post
CREATE src/post/post.module.ts (81 bytes)
UPDATE src/app.module.ts (325 bytes)
```
위와 같이 생성하면 log에서도 확인 할 수 있듯이, app.module.ts 파일이 UPDATE되었다고 나와있다.

```typescript
//app.module.ts
...
@Module({
  imports: [PostModule], // 이부분이 업데이트 됨
  controllers: [PostController],
  providers: [PostService],
})
...
```
imports 에 새로만든 PostModule 이 추가 된 것을 볼 수 있다.

그럼 PostModule에 PostController와 PostService를 옮겨 주도록 하자.

```typescript
//post.module.ts
import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';

@Module({
    controllers: [PostController],
    providers: [PostService],
})
export class PostModule { }
```

그리고 app.module 에서는 각 module 을 import 하고, app.controller와 app.service만을 취급하도록 변경한다.

app.controller를 생성하자

```console
$ nest g co
CREATE src/app/app.controller.spec.ts (471 bytes)
CREATE src/app/app.controller.ts (95 bytes)
UPDATE src/app.module.ts (259 bytes)
```

로그에서 볼 수 있듯이, src/app/* 폴더에 파일들이 CREATE 된 것을 볼 수 있다.

app.module.ts 는 한단계 더 상위에 있으니, 파일들을 모두 옮겨주자

app.controller에는 landingpage의 진입점인 '/' 의 GET method를 구현해 준다.

```typescript
//app.controller.ts
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }
    @Get()
    getLandingPage() {
        return this.appService.getLandingPage();
    }

}
```
* 주의할 점은 `@Controller()` decorator의 입력 파라미터를 비워주어야 '/' 으로 진입하는 진입점을 control 할수있다는 것이다. **잊지말자**

앞서 설명했던 방식대로 service까지 모두 cli를 통해 추가하고나면 app.module.ts 는 아래와 같은 형태가 될 것이다.


```typescript
//app.module.ts
import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

```


- 정상 동작하는 것을 볼 수 있다.

![app controller, app service](appController.png)




# 3.Testing

jest (js test tool) 을 이용한 nestjs 테스트 코드를 작성해 보자

controller 나 service를 생성하면 같이 만들어 지던 `*.spec.ts` 파일은 모두 테스트 파일이다.

즉, controller나 service를 등록하면 테스트 코드까지 같이 만들어 진다는 것이다. 놀랍니다.

이렇게 자동으로 생성되는 파일명이 규칙이고, 자동 생성 된 파일에 테스트 코드를 추가해서 테스트 하면된다.


그럼 더 나아가기에 앞어서, `package.json` 에 등록된 script를 한번 살펴보자

```json
{
  ...
    "test": "jest", // 1회 테스트
    "test:watch": "jest --watch", //지속 테스트
    "test:cov": "jest --coverage", // 테스트 커버리지 확인
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json" // unit test가 아닌 전체 통합 end to end 테스트
  ...
}
```
test command 에 보면 jest를 사용하는 것을 볼 수 있다.


앞으로 아래 command 를 이용해서 test를 진행해 보겠다.

```console
$ npm run test:watch
```

돌려보면, 아래와 같이 Fail이 무더기로 나타난다.

test file에서는 좀 문제되는 부분이 하나 있는데, 바로 nest가 자동으로 controller.spec.ts에 service를 등록해주지 않는다는 것이다.

`Test.createTestingModule()` 부분에 `providers:[모듈명]` 을 추가해주자.
```console
 FAIL  src/app.controller.spec.ts
  ● AppController › should be defined

    Nest can't resolve dependencies of the AppController (?). Please make sure that the argument AppService at index [0] is available in the RootTestModule context.

    Potential solutions:
    - If AppService is a provider, is it part of the current RootTestModule?
    - If AppService is exported from a separate @Module, is that module imported within RootTestModule?
      @Module({
        imports: [ /* the Module containing AppService */ ]
      })

      at Injector.lookupComponentInParentModules (../node_modules/@nestjs/core/injector/injector.js:188:19)
      at Injector.resolveComponentInstance (../node_modules/@nestjs/core/injector/injector.js:144:33)
      at resolveParam (../node_modules/@nestjs/core/injector/injector.js:98:38)
          at async Promise.all (index 0)
      at Injector.resolveConstructorParams (../node_modules/@nestjs/core/injector/injector.js:113:27)
      at Injector.loadInstance (../node_modules/@nestjs/core/injector/injector.js:46:9)
      at Injector.loadController (../node_modules/@nestjs/core/injector/injector.js:59:9)
          at async Promise.all (index 0)
      at InstanceLoader.createInstancesOfControllers (../node_modules/@nestjs/core/injector/instance-loader.js:52:9)

  ● AppController › should be defined

    expect(received).toBeDefined()

    Received: undefined

      14 |
      15 |   it('should be defined', () => {
    > 16 |     expect(controller).toBeDefined();
         |                        ^
      17 |   });
      18 | });
      19 |

      at Object.<anonymous> (app.controller.spec.ts:16:24)

 PASS  src/app.service.spec.ts
 PASS  src/post/post.service.spec.ts
 FAIL  src/post/post.controller.spec.ts
  ● PostController › should be defined

    Nest can't resolve dependencies of the PostController (?). Please make sure that the argument PostService at index [0] is available in the RootTestModule context.

    Potential solutions:
    - If PostService is a provider, is it part of the current RootTestModule?
    - If PostService is exported from a separate @Module, is that module imported within RootTestModule?
      @Module({
        imports: [ /* the Module containing PostService */ ]
      })

      at Injector.lookupComponentInParentModules (../node_modules/@nestjs/core/injector/injector.js:188:19)
      at Injector.resolveComponentInstance (../node_modules/@nestjs/core/injector/injector.js:144:33)
      at resolveParam (../node_modules/@nestjs/core/injector/injector.js:98:38)
          at async Promise.all (index 0)
      at Injector.resolveConstructorParams (../node_modules/@nestjs/core/injector/injector.js:113:27)
      at Injector.loadInstance (../node_modules/@nestjs/core/injector/injector.js:46:9)
      at Injector.loadController (../node_modules/@nestjs/core/injector/injector.js:59:9)
          at async Promise.all (index 0)
      at InstanceLoader.createInstancesOfControllers (../node_modules/@nestjs/core/injector/instance-loader.js:52:9)

  ● PostController › should be defined

    expect(received).toBeDefined()

    Received: undefined

      14 |
      15 |   it('should be defined', () => {
    > 16 |     expect(controller).toBeDefined();
         |                        ^
      17 |   });
      18 | });
      19 |

      at Object.<anonymous> (post/post.controller.spec.ts:16:24)

Test Suites: 2 failed, 2 passed, 4 total
Tests:       2 failed, 2 passed, 4 total
Snapshots:   0 total
Time:        3.987 s, estimated 4 s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

```typescript
//app.controller.spec.ts
providers:[AppService]

//post/post.controller.spec.ts
providers:[PostService]
```

위 두개를 각각 spec파일에 넣어주게되면 다음과 같은 결과를 얻을 수 있다.

```console
 PASS  src/app.service.spec.ts
 PASS  src/post/post.service.spec.ts
 PASS  src/post/post.controller.spec.ts 
 PASS  src/app.controller.spec.ts       

Test Suites: 4 passed, 4 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        5.717 s, estimated 8 s
Ran all test suites.

Watch Usage: Press w to show more.
```



준비는 끝난것 같다. 이제 본격적으로 테스트를 시작해보자.

---
## Test code 작성

jest 의 링크는 다음과 같다. https://jestjs.io/

다양한 matchers 와 사용법을 위 사이트에서 참고 하면 되겠다.


먼저 landing page 로 접속하는 경우를 테스트 해보자

타겟 테스트 파일은 비지니스 로직을 담당하는 `app.service.spec.ts` 이다.

```typescript
//app.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  //신규 테스트 코드
  describe('getLandingPage()', () => {
    
  })
  ///
});

```

기존 작성되어있는 코드에 위와같이 describe 로 어떤 테스트인지 작성해준 뒤 적어보자.

Landing Page로 접속시에는 business logic 인 `app.service.ts` 를 보게되면 string 으로 return 을 해주고 있다. 
```typescript
//app.service.ts
...
return 'Welcome to posting board!';
...
``` 

return 이 string으로 되고있는지를 테스트 해보자.

```typescript
//app.service.spec.ts
...
describe('getLandingPage()', () => {
  it('should be string', () => {

    const resp = service.getLandingPage();
    expect(typeof resp).toBe('string');
  })
})
...
```


```console
 PASS  src/post/post.service.spec.ts
 PASS  src/app.controller.spec.ts
 PASS  src/app.service.spec.ts
 PASS  src/post/post.controller.spec.ts 

Test Suites: 4 passed, 4 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        4.054 s, estimated 6 s
Ran all test suites.

Watch Usage: Press w to show more.
```


정상적으로 테스트가 완료되었다.

현재 landing page에서는 추가로 테스트 해볼 건덕지가 없어보인다.


동일한 테스트를 또다른 business logic이 있는 `post.service.spec.ts` 에서도 진행해보자

```typescript
// post.service.spec.ts
...
describe('getAllPost()', () => {
  it('should be an array', () => {
    const result = service.getAllPost();
    expect(result).toBeInstanceOf(Array);
  })
})
...
```

잘 안돌 이유가 없다. All PASS
```console
 PASS  src/post/post.service.spec.ts
 PASS  src/app.service.spec.ts
 PASS  src/app.controller.spec.ts
 PASS  src/post/post.controller.spec.ts 

Test Suites: 4 passed, 4 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        5.592 s, estimated 7 s
Ran all test suites.

Watch Usage: Press w to show more.
```
