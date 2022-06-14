# FrontendMylawyer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Frontend desplegado TB4

https://my-lawyer-v6.web.app/

## Json Server desplegado TB4

https://my-json-server.typicode.com/DiegoTS18/datos

## Video para deployarlo

- https://www.youtube.com/watch?v=dPIyS5R6lHU

## Verificar las versiones con las que vamos a trabajar

- Angular material: 13.3.5
- TypeScript: 4.6.3

## Comandos para verificar las versiones instaladas que posees

- Angular material: npm ls @angular/material
- TypeScript: tsc -v

## Si no te deja instalar Angular Core

- Get-ExecutionPolicy -List | Format-Table -Autosize
- Set-ExecutionPolicy Unrestricted -scope process
- Set-ExecutionPolicy Unrestricted -scope LocalMachine

## Instalar las dependencias una vez clonado el repo

npm install -g @angular/cli

## Instalar Angular Material

ng add @angular/material

## Ejemplo: Instalación de componentes desde el terminal

- ng generate @angular/material:dashboard salesreportdashboard
- ng generate @angular/material:navigation salesreportnavigation

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
