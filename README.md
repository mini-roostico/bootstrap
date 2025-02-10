# Subjekt Bootstrap

Repository containing a `docker-compose.yaml` configuration to deploy the entire Subjekt ecosystem.

## Instructions

1. First, make sure you have [docker](https://www.docker.com/) installed and running;
2. Then, clone this repository:

```shell
git clone git@github.com:mini-roostico/bootstrap.git
cd bootstrap
```

3. Generate **two** key-pairs `at_private.pem`-`at_public.pem` and `rt_private.pem`-`rt_public.pem` and move them into
the `secrets` directory. You can do it with the [openssl library](https://github.com/openssl/openssl) using the 
`gen_keys` script:

```shell
./gen_keys.sh # or bat for windows
```

4. Finally just run:

```shell
docker compose up -d
```

5. The frontend service should be now available on `localhost:80`

