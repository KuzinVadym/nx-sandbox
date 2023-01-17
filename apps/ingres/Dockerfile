FROM nginx:stable-alpine

COPY apps/ingres/nginx-default.conf /etc/nginx/templates/default.conf.template

# The default parameters to ENTRYPOINT (unless overruled on the command line)
CMD ["nginx", "-g", "daemon off;"]
