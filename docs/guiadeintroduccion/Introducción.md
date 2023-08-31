# Definamos quien va a editar esta documentacion

Sucede que hay que tener conocimientos en html y un tris de javascript, no los conozco a todos así que nosé que tal estén de conocimientos asi que me disculpo si se escucha feo.

No es dificil escribir esta documentación todo es automático, el problema esta en que el dueño del repositorio deonde quedará guardado el repositorio debera ser el encargado de correr `npm run build` y un comando que tienen acá para hacer el deploy `cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"`

Esto usará [Github Pages](https://pages.github.com/)


## ¿Qué es Github Pages?

GitHub Pages es un servicio de alojamiento web gratuito ofrecido por GitHub. Este servicio permite a los usuarios publicar sitios web directamente desde un **repositorio en GitHub**. Se utiliza comúnmente para alojar páginas de proyectos, documentaciones, blogs personales y otros sitios estáticos. Los sitios pueden ser creados usando HTML, CSS y JavaScript.


## Páginas Privadas en GitHub Enterprise

### ¿Es Posible?
Sí, GitHub Enterprise ofrece la opción de hacer que un sitio de GitHub Pages sea privado y solo accesible para aquellos que tienen acceso al repositorio. Esto te permite compartir documentación o información interna sin hacerla pública en Internet.

### Configuración

1.  #### Repositorio Privado
Asegúrate de que tu repositorio en GitHub sea privado. Solo las personas a las que se les ha otorgado acceso podrán ver el repositorio y, por lo tanto, la página de GitHub Pages asociada.

2. #### GitHub Pages Settings
- Ve a la pestaña "Settings" de tu repositorio.
- Dirígete a la sección "Pages".
- Aquí, verás una opción para configurar quién puede acceder a la página. Asegúrate de que está configurado para que solo las personas con acceso al repositorio puedan ver la página.

## Esto dijo Chat GPT

>Si estás usando GitHub Enterprise y necesitas que tu página de GitHub Pages sea accesible solo para ciertos usuarios, tienes la opción de hacerlo >siguiendo los pasos de configuración apropiados. Esto es útil para compartir información interna sin exponerla al público en general.

## Podemos usar un editor Online
Puede ser un editor como este: [Editor]( https://stackedit.io/app# )

##### Así se ve En "Codigo" lo que estoy escribiendo en esta pagina

Una imAgen muestra como quedaria en un editor online
![imagen ejemplo Logo](/img/mark2.png)

:::tip My tip

Use this awesome feature option

:::

:::danger Take care

This action is dangerous

:::

## codigo puesto aca
Asi es un ejemplo de poner codigo
```js
function test() { console.log("look ma’, no spaces");}
```

