## [1.6.0](https://github.com/mini-roostico/bootstrap/compare/1.5.1...1.6.0) (2025-02-10)

### Features

* run npm init playwright@latest ([6d12a70](https://github.com/mini-roostico/bootstrap/commit/6d12a700ee13f2fa26f7ca861ebafa073b5c0e75))

### Tests

* added initial specs for auth ([6ae10fb](https://github.com/mini-roostico/bootstrap/commit/6ae10fbe9dddec452a47d9f23ec31ece17573bc4))

### Build and continuous integration

* added dependency for success job ([17f2052](https://github.com/mini-roostico/bootstrap/commit/17f20524e3485d49e2fbf82e2e031d68ed85fdd2))
* added setup for keys ([c451e27](https://github.com/mini-roostico/bootstrap/commit/c451e27d41e059eff69c8de851c01cf5d55aeada))
* added test action with playwright and docker compose ([60a9e32](https://github.com/mini-roostico/bootstrap/commit/60a9e32d02e0f8b827e9274801647256f20608b4))

### General maintenance

* deleted auto-generated action by playwright ([c3dcd3f](https://github.com/mini-roostico/bootstrap/commit/c3dcd3faec6504a5038f2d0d2747ef3bd1973773))
* deleted example tests ([0ccc160](https://github.com/mini-roostico/bootstrap/commit/0ccc160a9e7b6f56369470f15bf0b38fc4c9f887))
* renamed docker-compose.yml ([4a8cefc](https://github.com/mini-roostico/bootstrap/commit/4a8cefc587cf1611f5021ce467e6cd4ae41eef80))

## [1.5.1](https://github.com/mini-roostico/bootstrap/compare/1.5.0...1.5.1) (2025-02-10)

### Bug Fixes

* fixed missing environments with new image versions ([f0bc7a3](https://github.com/mini-roostico/bootstrap/commit/f0bc7a33d722c9618a9f305c0eb7ad58c560d54d))

## [1.5.0](https://github.com/mini-roostico/bootstrap/compare/1.4.0...1.5.0) (2025-02-10)

### Features

* added scripts for generating keys ([67c4644](https://github.com/mini-roostico/bootstrap/commit/67c4644ee6c9eeff99c9136b91f8d6dc1777947d))

### Documentation

* added instructions for the entire deployment process ([9d75d3a](https://github.com/mini-roostico/bootstrap/commit/9d75d3affdcc2580dec2a153d1e6f59b41ec1452))

## [1.4.0](https://github.com/mini-roostico/bootstrap/compare/1.3.0...1.4.0) (2025-02-10)

### Features

* added health check for frontend ([a37c063](https://github.com/mini-roostico/bootstrap/commit/a37c063eff8587f2177d264076a3d0b11c0f9b7c))

## [1.3.0](https://github.com/mini-roostico/bootstrap/compare/1.2.0...1.3.0) (2025-02-09)

### Features

* added working health checks, fixed paths for keys ([70b8f13](https://github.com/mini-roostico/bootstrap/commit/70b8f134ffef44b0c2fe325cde6441f4575a432c))

## [1.2.0](https://github.com/mini-roostico/bootstrap/compare/1.1.0...1.2.0) (2025-02-09)

### Features

* added all services to docker-compose.yaml ([91a24c7](https://github.com/mini-roostico/bootstrap/commit/91a24c71d4b31691c7ba716c5be96bcc39b14521))

## [1.1.0](https://github.com/mini-roostico/bootstrap/compare/1.0.1...1.1.0) (2025-02-07)

### Features

* added common variables to docker-compose.yaml to handle host names and ports ([a1405c0](https://github.com/mini-roostico/bootstrap/commit/a1405c0978e648c319ec6093310e94193e00ddd0))

## [1.0.1](https://github.com/mini-roostico/bootstrap/compare/1.0.0...1.0.1) (2025-02-07)

### Dependency updates

* **deps:** update actions/setup-node action to v4.2.0 ([ef6086c](https://github.com/mini-roostico/bootstrap/commit/ef6086c75def85b76e76408a2720ff4b555e9ddb))
* **deps:** update dependency semantic-release-preconfigured-conventional-commits to v1.1.119 ([df01538](https://github.com/mini-roostico/bootstrap/commit/df01538f8ac3e02c5a8e3faa4835712e467be5a8))

### Bug Fixes

* removed ports from api and auth services ([44606ad](https://github.com/mini-roostico/bootstrap/commit/44606ad194c5c3a63aa5d39de1184bc39799f07a))

### Build and continuous integration

* added api and auth services to docker-compose.yaml ([bce6b2c](https://github.com/mini-roostico/bootstrap/commit/bce6b2cfa41be70cb695c7737f2e9294179e8e13))
* **Mergify:** configuration update ([1b2c8cb](https://github.com/mini-roostico/bootstrap/commit/1b2c8cba729f9292dc1778bd10ad22d12de2988b))

## 1.0.0 (2025-01-31)

### Features

* added first version of docker-compose.yaml containing only the frontend service ([2cf8e98](https://github.com/mini-roostico/bootstrap/commit/2cf8e98318b04f8f907f467ebab580cf3c7e2c7e))

### Build and continuous integration

* added check for secrets ([1d4525a](https://github.com/mini-roostico/bootstrap/commit/1d4525a661f4491d51e296f3fcd1996878a93499))
* added semantic-release ([31cfdf4](https://github.com/mini-roostico/bootstrap/commit/31cfdf48a7dc73b6d4eb187dd06bb4dd826ba675))
* added simple workflows for semantic-release ([affdb5b](https://github.com/mini-roostico/bootstrap/commit/affdb5b2f810f078fbbb64cfbd935473271df2b3))

### General maintenance

* added .gitignore ([cd64f4d](https://github.com/mini-roostico/bootstrap/commit/cd64f4db1211b90ca3c65c6f5b78a9df403cf2ae))
* updated .gitignore ([47bd0fe](https://github.com/mini-roostico/bootstrap/commit/47bd0fe290109429ebd50240ca5f0ed674a18140))
