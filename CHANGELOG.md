# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.0.18](https://github.com/royfuwei/rfjs/compare/v0.0.17...v0.0.18) (2024-07-25)

### [0.0.17](https://github.com/royfuwei/rfjs/compare/v0.0.16...v0.0.17) (2024-07-25)

### [0.0.16](https://github.com/royfuwei/rfjs/compare/v0.0.15...v0.0.16) (2024-07-25)


### Features

* **apps/gql:** adjust graphql application settings ([965d927](https://github.com/royfuwei/rfjs/commit/965d927003e0f4be06581bd65348c0a24f69883c))
* **apps/gql:** initial graphql application ([aad6fc4](https://github.com/royfuwei/rfjs/commit/aad6fc418c5c9408356b5451ab8e6b9df2c80222))
* **common/repository:** add dataloader base mongoose repository ([b2f6c41](https://github.com/royfuwei/rfjs/commit/b2f6c418aaa89f7e340e6848e3382f535a28e488))
* **common/types:** add jsonb types for helpers ([d21a7de](https://github.com/royfuwei/rfjs/commit/d21a7de98a03aa6cc8ccee8c3892feb191d9617f))
* demoRepository extends BaseMongooseRepository, and graphql test dataloader ([02bc80d](https://github.com/royfuwei/rfjs/commit/02bc80d71080273eccc63bc676aadbf8b3e13d77))
* **helpers/jsonbQuery:** adjust and export jsonbQuery helpers ([6d38cf8](https://github.com/royfuwei/rfjs/commit/6d38cf8e6b75ec2d11edb3a20e4842f566afed1c))
* **utils/alias:** add alias ${key} or $key to obj keyValue ([efec65d](https://github.com/royfuwei/rfjs/commit/efec65dbc19a3764de5dc5a3d516e15ddfdbcc57))
* **utils/data:** add date, boolean and jsonbTypeTransfer data utils ([9bb8741](https://github.com/royfuwei/rfjs/commit/9bb87410a6879cc55088d16de00d0a794d756bb1))
* **utils/object:** adjust flatten return generics type ([9bd6237](https://github.com/royfuwei/rfjs/commit/9bd6237843ef1114d4ced37888c32a9439842d52))
* **utils/object:** move regex/convertAliasData to alias/aliasData ([e221a84](https://github.com/royfuwei/rfjs/commit/e221a84e80fb788d1c86cc653750b4bc8f1e3da2))


### Bug Fixes

* sonar scan code smell ([cd4215e](https://github.com/royfuwei/rfjs/commit/cd4215ec21ae8708925ace2bd73258293b2ed410))
* **sonar:** apps/gql Dockerfile ([f4e6784](https://github.com/royfuwei/rfjs/commit/f4e678498e656bfb238276405c85746152c39895))
* **sonar:** remove as any type ([6d74722](https://github.com/royfuwei/rfjs/commit/6d747227209dba6cd3938889d922615e772bdb72))
* **sonar:** remove unused import ([61e534e](https://github.com/royfuwei/rfjs/commit/61e534e8e2c4b085e2f7b92ef579cf1d118e3f87))
* **sonar:** replace this union type with a type alias ([6ce5d3e](https://github.com/royfuwei/rfjs/commit/6ce5d3ed0e96e26dc772d22d9e63d9c77bbcdb92))
* **utils/object:** cannot alias multi nested object error ([8f4ebda](https://github.com/royfuwei/rfjs/commit/8f4ebda05572100b6b0d729125aff8ea8f787052))
* **utils/object:** fix flatten object in undefined, null and array data type error ([ac1b82a](https://github.com/royfuwei/rfjs/commit/ac1b82a266c4c79dfd586288bead1c7b39c4dd5a))

### [0.0.15](https://github.com/royfuwei/rfjs/compare/v0.0.14...v0.0.15) (2024-06-16)


### Features

* **apps/web:** adjust dashboard layout and page ([866d767](https://github.com/royfuwei/rfjs/commit/866d767a9aa7fdfe713020d67101dee77f250a9a))
* **web/components:** add nav-section and svg-color components ([cb6f1e9](https://github.com/royfuwei/rfjs/commit/cb6f1e9ac17e9d95a2f9edc6e75a26ebb545c2f7))
* **web/components:** logo link component add href ([6e8182f](https://github.com/royfuwei/rfjs/commit/6e8182fa58ca28d38f6ab9b3fb450500d8438222))
* **web/layouts:** add common account, setting and searchbar button ([f559aba](https://github.com/royfuwei/rfjs/commit/f559aba18bc6bf8764e09596ccba092271d517e9))


### Bug Fixes

* **apps/web:** sonar lint failed ([e62288a](https://github.com/royfuwei/rfjs/commit/e62288ac3373a78352e4fba9e035c340d81c62ca))

### [0.0.14](https://github.com/royfuwei/rfjs/compare/v0.0.13...v0.0.14) (2024-06-10)


### Features

* **apps/web:** add apps/web packages ([f562c13](https://github.com/royfuwei/rfjs/commit/f562c13bd9973af83768e2a045b45acd67575f05))
* **apps/web:** add apps/web use public assets ([e07b1e9](https://github.com/royfuwei/rfjs/commit/e07b1e95a6a48da96e58fb2a9584aab88f59f2d0))
* **apps/web:** adjust auth classic layout ([a9b1728](https://github.com/royfuwei/rfjs/commit/a9b172813315105c0e6eacc0a1a028c5c339def4))
* **apps/web:** adjust auth jwt login app layout ([5f339bc](https://github.com/royfuwei/rfjs/commit/5f339bc4233e3ff0c305fd4bdeac3e2a8fa2c7c1))
* **apps/web:** adjust jwt login view ([898991d](https://github.com/royfuwei/rfjs/commit/898991d153d58590a94c10c3db13053b8a170134))
* **apps/web:** adjust main header layout ([85ac28c](https://github.com/royfuwei/rfjs/commit/85ac28cf6cf76c4b611b96c52b30bde9516097d7))
* **web/components:** adjust logo ref and outer box setting ([28090cd](https://github.com/royfuwei/rfjs/commit/28090cd6528bf6d3497c3190abb2605a07dee2a7))
* **web/hooks:** add use router and use search params ([4506696](https://github.com/royfuwei/rfjs/commit/4506696fa41d32b2c243631e1ce80aa5b6d0b3af))
* **web/theme:** add background gradient css theme ([f876481](https://github.com/royfuwei/rfjs/commit/f87648175f0268973158bf64ad0cf6da03a18e48))


### Bug Fixes

* sonarqube lint ([431cda3](https://github.com/royfuwei/rfjs/commit/431cda3cc23c228c048c41edf3515c6a3270f410))

### [0.0.13](https://github.com/royfuwei/rfjs/compare/v0.0.12...v0.0.13) (2024-06-10)


### Features

* **apps/web:** add common header shadow layout ([536ee4c](https://github.com/royfuwei/rfjs/commit/536ee4cdcf7f0aad22a19c2d8cd22524bbc22620))
* **apps/web:** add css background blur theme ([373074f](https://github.com/royfuwei/rfjs/commit/373074fdf74b33aa5c85b579ac5f49e57b1641cb))
* **apps/web:** add main layout toolbar offset top config ([d6a4460](https://github.com/royfuwei/rfjs/commit/d6a446095259a85471524e90f1cccb12e8867618))
* **apps/web:** add use offset top hook ([3ce85ec](https://github.com/royfuwei/rfjs/commit/3ce85ec2218613c37e42bd0290d8bdc399f5d34a))
* **apps/web:** adjust home view section ([29b1d5d](https://github.com/royfuwei/rfjs/commit/29b1d5d8bc14e5056221715abc4bffa977d5d411))

### [0.0.12](https://github.com/royfuwei/rfjs/compare/v0.0.11...v0.0.12) (2024-06-09)


### Features

* **apps/api:** build dockerfile use default output ([#20](https://github.com/royfuwei/rfjs/issues/20)) ([e13e538](https://github.com/royfuwei/rfjs/commit/e13e538e1cf2d3482821ddc60abc28b6a767f7c3))
* **apps/web:** update dcockerfile for nextjs standalone output ([#18](https://github.com/royfuwei/rfjs/issues/18)) ([5fd2cfd](https://github.com/royfuwei/rfjs/commit/5fd2cfd3e7be073be08acfc755be203009cf3ad9))


### Bug Fixes

* **apps/web:** remove home-view-default.css and add nx default global css ([#29](https://github.com/royfuwei/rfjs/issues/29)) ([d7f0012](https://github.com/royfuwei/rfjs/commit/d7f0012bb0acf3931ce9f3a47fd42b9f85131af6))
* **apps/web:** section remove home-view-default.css and root layout use home-view-default.css ([#33](https://github.com/royfuwei/rfjs/issues/33)) ([82a36f3](https://github.com/royfuwei/rfjs/commit/82a36f3129bd0fd8ec9e71894eb802d4a1b9a747))
* squash and merge to production branch conflicts ([154cb29](https://github.com/royfuwei/rfjs/commit/154cb29d3bc07ca5078305d1ff90a7e5e3b489aa))

### [0.0.11](https://github.com/royfuwei/rfjs/compare/v0.0.10...v0.0.11) (2024-06-09)

### [0.0.10](https://github.com/royfuwei/rfjs/compare/v0.0.9...v0.0.10) (2024-06-09)

### [0.0.9](https://github.com/royfuwei/rfjs/compare/v0.0.8...v0.0.9) (2024-06-09)

### [0.0.8](https://github.com/royfuwei/rfjs/compare/v0.0.7...v0.0.8) (2024-06-09)

### [0.0.7](https://github.com/royfuwei/rfjs/compare/v0.0.6...v0.0.7) (2024-05-31)

### [0.0.6](https://github.com/royfuwei/rfjs/compare/v0.0.5...v0.0.6) (2024-05-30)

### [0.0.5](https://github.com/royfuwei/rfjs/compare/v0.0.4...v0.0.5) (2024-05-30)


### Features

* **apps/web:** update dcockerfile for nextjs standalone output ([#18](https://github.com/royfuwei/rfjs/issues/18)) ([#19](https://github.com/royfuwei/rfjs/issues/19)) ([50eb5b4](https://github.com/royfuwei/rfjs/commit/50eb5b474c1a3c14862d5ddb6f70d645513a7b18))

### [0.0.4](https://github.com/royfuwei/rfjs/compare/v0.0.3...v0.0.4) (2024-05-29)

### [0.0.3](https://github.com/royfuwei/rfjs/compare/v0.0.2...v0.0.3) (2024-05-29)

### [0.0.2](https://github.com/royfuwei/rfjs/compare/v0.0.1...v0.0.2) (2024-05-29)

### 0.0.1 (2024-05-29)


### Features

* **@rfjs/helper:** add jsonbQuery helper ([e42bd73](https://github.com/royfuwei/rfjs/commit/e42bd734a97f740276f8cf5f223a040ebeae585f))
* **@rfjs/helper:** create delay helper ([53cf159](https://github.com/royfuwei/rfjs/commit/53cf1597551353a81a27b31e4357915fadf83020))
* **@rfjs/helper:** create retry helper ([8637f95](https://github.com/royfuwei/rfjs/commit/8637f9593e05fb714a87cb061f8d69b2f98d7037))
* **@rfjs/helper:** initial package @rfjs/helper ([b6e47b8](https://github.com/royfuwei/rfjs/commit/b6e47b889fd8eb4325caa4a67315691a99452496))
* **@rfjs/utils:** export util ObjectUtil ([a26fc43](https://github.com/royfuwei/rfjs/commit/a26fc43d7bb38bbbd244c655d1d1d9f366a2253e))
* **@rfjs/utils:** object utils flatten, keysToNested, toFlatString, toJSONString ([82f5397](https://github.com/royfuwei/rfjs/commit/82f539759733ff475f56fd03574f6db97818a9ff))
* **apps/api:** add response time middleware ([ea048ad](https://github.com/royfuwei/rfjs/commit/ea048ad6e49922e14d03e9e9af69e0dcd3cb3be7))
* **apps/api:** add supabase auth controller ([0b116e7](https://github.com/royfuwei/rfjs/commit/0b116e75ab9308d2edefda79b2785fc203bc59c7))
* **apps/api:** add test line notify and bot controllers ([51684e2](https://github.com/royfuwei/rfjs/commit/51684e2727afa7c057250d203bac01b7bf099ed9))
* **apps/api:** api use winston logger helper ([cab9919](https://github.com/royfuwei/rfjs/commit/cab99198051aa3e192d392b3ab7b12ac2334c339))
* **apps/api:** apps api test common type, openapi schema, and error expection ([0319821](https://github.com/royfuwei/rfjs/commit/03198211e87ee23faae195ffd79c6a58d3be43a9))
* **apps/api:** init iocAdapter, swagger, app module ([ebb835d](https://github.com/royfuwei/rfjs/commit/ebb835dca1ec735080c688375f2513c8bbf5300a))
* **apps/api:** set app UploadedFiles ([20d8df3](https://github.com/royfuwei/rfjs/commit/20d8df3482b114d6402cbcac94f7f8de381a7104))
* **apps/api:** setting koa app server, koa swagger ui ([888d25f](https://github.com/royfuwei/rfjs/commit/888d25ff6c07f0f83f109fe37fe0f7382b98aeb3)), closes [#3](https://github.com/royfuwei/rfjs/issues/3)
* **apps/api:** use lib/helpers, repos, modules in api app, and use ioc di usecase ([891dd83](https://github.com/royfuwei/rfjs/commit/891dd837597d2ccd758492496831504f867a0459)), closes [#3](https://github.com/royfuwei/rfjs/issues/3)
* **apps/api:** use libs/common decorator ApiResSchema ([d2aa971](https://github.com/royfuwei/rfjs/commit/d2aa9710bd1cfde69a4f3574b6b058b82d13ab3a))
* **apps/api:** use utils customize error interceptor ([10e2aae](https://github.com/royfuwei/rfjs/commit/10e2aaeb1d45eff56fef975dc93c9284941730da))
* **common/decorators:** adjust api openapi schema decorator: data, datalist, paginated ([bc6e84e](https://github.com/royfuwei/rfjs/commit/bc6e84e85276895af1108d7d8a7233f87d5cbeb9))
* initial commit ([ed5b5bd](https://github.com/royfuwei/rfjs/commit/ed5b5bde39ad7f0a49f69d386f4acc478173d10b))
* **libs/common:** add auth supabase dto & ApiResErr add method property ([e867988](https://github.com/royfuwei/rfjs/commit/e8679885ac1a06399894917dbd5806ebf6cdc23a))
* **libs/common:** add base dtos, data types ([3a42b25](https://github.com/royfuwei/rfjs/commit/3a42b253f38a9aed0f520a65153013b5217aa7db))
* **libs/common:** add base http exceptions, error code enums ([aaeaa6f](https://github.com/royfuwei/rfjs/commit/aaeaa6f32d4ba5f65c4c12b6a6d8887c7421d57d))
* **libs/common:** add common decorator ApiResSchema ([2b58ebf](https://github.com/royfuwei/rfjs/commit/2b58ebfcae52902949f6086017f60d0e0ef0c68a))
* **libs/common:** add errorCode enum, and add http exceptions ([8f5158e](https://github.com/royfuwei/rfjs/commit/8f5158ea05c6351b807c96148236340843382c25))
* **libs/common:** add query data type ([929e4fc](https://github.com/royfuwei/rfjs/commit/929e4fc1e5275f4e6c3eff425d00e3aad8692d3f))
* **libs/modules:** add app module ([b567109](https://github.com/royfuwei/rfjs/commit/b567109fd6644004df8de259c72915e9a26a1155))
* **libs/modules:** modules lib add ioc demo database repository ([4abf4ff](https://github.com/royfuwei/rfjs/commit/4abf4ffadbed4d15602ea301c9777aabc07c1a74))
* **libs/modules:** test libs/common, libs/repos ([51564ec](https://github.com/royfuwei/rfjs/commit/51564ec66b93c491094bca3f4d85d054b679e47f))
* libs/repos BaseMonogoClient use outer logger ([2ab4132](https://github.com/royfuwei/rfjs/commit/2ab413246f0a560d6a2587d78332af154a79c4d1))
* **libs/repos:** adjust demo test schema and type ([7c75ca2](https://github.com/royfuwei/rfjs/commit/7c75ca28be333e0ebffedc67ad142dd809637e35))
* **libs/repos:** update mongoose common created and updated types ([09e5e6c](https://github.com/royfuwei/rfjs/commit/09e5e6c20a69525e7eef8057ba2c5a1cfcd12d98))
* **libs/repos:** use mongo schema use camelcase, use libs/common type ([a08b3f6](https://github.com/royfuwei/rfjs/commit/a08b3f6f36f430c5cfc94ad0d98e9cf0895f96d3))
* **logger:** adjust winston logger helper tool ([a370628](https://github.com/royfuwei/rfjs/commit/a370628fd7f1196c1da1ec3741de2a88c419717f)), closes [#2](https://github.com/royfuwei/rfjs/issues/2)
* **package/utility:** add types path Paths, Leaves ([68e0a49](https://github.com/royfuwei/rfjs/commit/68e0a49ad0b6081e6c7149d5860db4fcad1af938))
* **packages/helper:** add jsonbQuery helper ([b2c8a49](https://github.com/royfuwei/rfjs/commit/b2c8a49a68badd5478ff7efe09222236137e2210))
* **packages/helper:** create delay helper ([7d06c82](https://github.com/royfuwei/rfjs/commit/7d06c82c2a5a44cd562a8370dd7c76ef7515a3d2))
* **packages/helper:** create retry helper ([61880f1](https://github.com/royfuwei/rfjs/commit/61880f199ac05078ec4ccfeb962714e828fc8122))
* **packages/helper:** initial package @rfjs/helper ([2df6ec0](https://github.com/royfuwei/rfjs/commit/2df6ec03fc8c1e6008afcd67fe57357c7a454f4d))
* **packages/helpers:** add json web token tool ([1d3cf15](https://github.com/royfuwei/rfjs/commit/1d3cf158e5375b9120da1703063bea2f8646524a))
* **packages/helpers:** add winston logger helper tool ([df3a3b1](https://github.com/royfuwei/rfjs/commit/df3a3b120644238b7cbb6e3dd5daf6af3178b1d4)), closes [#2](https://github.com/royfuwei/rfjs/issues/2)
* **packages/utility:** add ConsoleObj return string object nest value ([0a2e99c](https://github.com/royfuwei/rfjs/commit/0a2e99c6806d84a237ee587afdf74d1a6dbb6403))
* **packages/utility:** add delay times utility ([620927f](https://github.com/royfuwei/rfjs/commit/620927f25f4efb7a2d26e70c8ed0445a597eb252))
* **packages/utility:** add new retry ([db33655](https://github.com/royfuwei/rfjs/commit/db33655db47ec6dcabdcdb8350a69b11781701b5))
* **packages/utility:** index add console, delay, retry ([1b863f8](https://github.com/royfuwei/rfjs/commit/1b863f82f97c2f48ec96a675d502b8c6ed62df59))
* **packages/utility:** init packages utility ([1da6a53](https://github.com/royfuwei/rfjs/commit/1da6a53e9b982d50199e2b4ed4ed3e6c0dbe8c54))
* **packages/utils:** add koa error interceptors ([584ac8d](https://github.com/royfuwei/rfjs/commit/584ac8d95a498e144031adee014e26626b1f74c5))
* **packages/utils:** add query filterMappingMatchQueryData ([e3df6ab](https://github.com/royfuwei/rfjs/commit/e3df6abeccaf293ead52b04cb322e89be476d8c7))
* **packages/utils:** add regex convertAliasData ([70397e1](https://github.com/royfuwei/rfjs/commit/70397e17f994d20ab12d40b9b341037258840d3b))
* **packages/utils:** add text, numeric, boolean match query ([96363cd](https://github.com/royfuwei/rfjs/commit/96363cdaa07bac4402709928a673f09980505abc))
* **packages/utils:** empty FilterMatchQuery or FilterMatchQuery.filters return original data ([f70c840](https://github.com/royfuwei/rfjs/commit/f70c84073d33570dc3d1d18f13a616000baaa15d))
* **packages/utils:** export util ObjectUtil ([629cb24](https://github.com/royfuwei/rfjs/commit/629cb24fe9667258615bd1c85aeba8e0972a1093))
* **packages/utils:** match query undefined value set empty array ([fc24415](https://github.com/royfuwei/rfjs/commit/fc24415ccec542a6fd8903f50129066c11ef72bf))
* **packages/utils:** object utils flatten, keysToNested, toFlatString, toJSONString ([7eedc68](https://github.com/royfuwei/rfjs/commit/7eedc68bba59c9a8a0658f3ac379effab7bce08b))
* **packages/utils:** utils object update method keysToNested ([12bbe68](https://github.com/royfuwei/rfjs/commit/12bbe683997e28c8f72e1e4d886e18097f1d96b2))
* **packages/utils:** utils object update method keysToNested ([dc15a93](https://github.com/royfuwei/rfjs/commit/dc15a9380e888aa5130d96068d19590bcb57c323))
* root package.json set script release ([2009f06](https://github.com/royfuwei/rfjs/commit/2009f06fbb80039f731af0988ecfb2180d3a0d55))
* root package.json set script release ([1c3c3c9](https://github.com/royfuwei/rfjs/commit/1c3c3c94611fc5eebd46ce69bbdeb59628b488d2))


### Bug Fixes

* **apps/api:** update dockerfile copy files ([baf71dd](https://github.com/royfuwei/rfjs/commit/baf71dd214baef0df20f1b3048e50a7906ca6476))
* make sure no write permissions are assigned to the executable ([fccb9fc](https://github.com/royfuwei/rfjs/commit/fccb9fc4a30f1931af37c8f57cbde3c81246a82a))
* **packages/helpers:** adjust logger helper formattedMessage ([0579ca6](https://github.com/royfuwei/rfjs/commit/0579ca6b620c0f83bc443cf80e30768ba7f67225))
* **packages/helpers:** jwt tool helper type ([b862141](https://github.com/royfuwei/rfjs/commit/b8621418a3bcd58798bcfd250ac9c7d84f746f74)), closes [#2](https://github.com/royfuwei/rfjs/issues/2)
* **packages/utils:** koa KoaLoggerHttpErrorMiddleware await KoaHttpErrorInterceptor function ([52284a8](https://github.com/royfuwei/rfjs/commit/52284a8418721d81c5b5e93e45923f1f1b1af6c2))
* **packages/utils:** match query null or undefined target value return true match ([0783249](https://github.com/royfuwei/rfjs/commit/07832498d916773e425179053bd9b9644e83d9c6))
* **packages/utils:** query nor, not logic ([89df7fc](https://github.com/royfuwei/rfjs/commit/89df7fcb1a722fa21f43d58673a89a727f240a30))
* **packages/utils:** set convertAliasData undefined aliasData null ([157bb35](https://github.com/royfuwei/rfjs/commit/157bb35a0261af12c03fa032db8d96401b27e222))
* **packages/utils:** set KoaHttpErrorInterceptor body status use context status ([83cf083](https://github.com/royfuwei/rfjs/commit/83cf08305808cdb265ef275e9e0ce978d977ea19))
* sonarqube dockerfile issues ([11e1b79](https://github.com/royfuwei/rfjs/commit/11e1b7911398a55b5cdcb020068b67d42d5ea9b2))
* sonarqube dockerfile remove cache after installing packages ([0d0f5c0](https://github.com/royfuwei/rfjs/commit/0d0f5c0404415047c907811f8a0fe7187fcdf490))
