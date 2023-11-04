FROM php:7.4-cli as builder

WORKDIR /var/www/

RUN apt-get update && apt-get install libzip-dev -y

RUN docker-php-ext-install zip

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"  \
  && php composer-setup.php && php -r "unlink('composer-setup.php');"

RUN php composer.phar create-project laravel/laravel html

FROM php:7.4-fpm-alpine
WORKDIR /var/www
RUN rm -rf html/
COPY --from=builder /var/www/html .
RUN ln -s public html
RUN chown -R www-data:www-data /var/www
EXPOSE 9000
ENTRYPOINT [ "php-fpm" ]
