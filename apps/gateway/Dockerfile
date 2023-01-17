FROM hasura/graphql-engine:v2.16.1

COPY apps/gateway/entrypoint.sh ./entrypoint.sh
RUN chmod +x /entrypoint.sh

CMD ["./entrypoint.sh"]

EXPOSE 8080