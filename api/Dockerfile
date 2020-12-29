FROM hayd/alpine-deno

RUN deno install -qAf --unstable https://deno.land/x/denon@2.4.4/denon.ts

WORKDIR /usr/app

COPY deps.ts .
RUN deno cache deps.ts

ADD . .

ENTRYPOINT ["/usr/local/bin/denon"]