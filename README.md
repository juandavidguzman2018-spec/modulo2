# Ruta de estudio · Módulo 2

Aplicación móvil de NativeScript y Angular para consultar recursos del curso. Continúa el [proyecto del módulo 1](https://github.com/juandavidguzman2018-spec/modulo1) con el mismo menú lateral y un catálogo interactivo.

## Requisitos de evaluación

| # | Evidencia |
|---|---|
| 1 | [Buscar recursos](src/app/search/search.component.html) usa un ListView con un FlexboxLayout dentro de su plantilla. |
| 2 | Al tocar el título o la categoría que aparece debajo del título, [el componente de búsqueda](src/app/search/search.component.ts) llama a RouterExtensions.navigate y abre [el detalle](src/app/search/resource-detail.component.html). |
| 3 | El [plugin PullToRefresh](src/app/search/search.module.ts) envuelve al ListView. Cada gesto incorpora [un recurso aleatorio sin duplicados](src/app/search/catalog.service.ts) hasta agotar el catálogo. |
| 4 | El botón **Categoría** de cada fila abre un diálogo de tipo action. Elegir una categoría modifica el recurso y guarda el cambio en el dispositivo. |
| 5 | [La app muestra un toast](src/app/search/search.component.ts) al agregar un recurso o cambiar su categoría. |
| 6 | [El campo de búsqueda](src/app/search/search.component.html) usa `[(ngModel)]` para vincular el texto con la propiedad query. |
| 7 | [La directiva de validación](src/app/search/search-query-validator.directive.ts) acepta una búsqueda vacía o una consulta de dos o más caracteres, sin contar espacios exteriores. |
| 8 | Mantener pulsado el [control de actualización](src/app/search/search.component.html) agrega un recurso. |
| 9 | [El ícono de actualización](src/app/search/search.component.ts) gira 360 grados al refrescar. |
| 10 | Android muestra un [libro personalizado](App_Resources/Android/src/main/res/drawable/study_launch_mark.xml) sobre fondo verde durante el arranque. El [drawable de arranque](App_Resources/Android/src/main/res/drawable-nodpi/splash_screen.xml) cubre versiones anteriores y el [tema de Android 12+](App_Resources/Android/src/main/res/values-v31/study_launch_theme.xml) personaliza la pantalla del sistema. |

La [pantalla de bienvenida](src/app/home/home.component.html) incluye la imagen del libro y un acceso directo al catálogo.

## Ejecutar

Instala Node.js 22 y prepara el [entorno nativo](https://docs.nativescript.org/setup/). Con un dispositivo Android conectado o un emulador iniciado, ejecuta lo siguiente desde la raíz del proyecto.

```sh
npm ci
npm run check
npm run android
```

Para iOS, usa macOS con Xcode y ejecuta `npm run ios`.

## Recorrido de prueba

1. Abre **Buscar recursos** desde Inicio o desde el menú lateral.
2. Escribe una letra para ver el mensaje de validación. Escribe **práctica** y pulsa **Buscar**. Borra el campo y vuelve a buscar para mostrar todos los recursos disponibles.
3. Toca un título y comprueba que se abre el detalle. Vuelve al catálogo y cambia la categoría de un recurso.
4. Desliza la lista hacia abajo o mantén pulsado el ícono de actualización. Comprueba el giro, el nuevo resultado y el toast.
