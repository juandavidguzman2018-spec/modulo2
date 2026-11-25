import { Injectable } from '@angular/core';
import { ApplicationSettings } from '@nativescript/core';

export const CATEGORIES = ['Lectura', 'Práctica', 'Repaso'] as const;
export type Category = typeof CATEGORIES[number];

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: Category;
}

const RESOURCES: readonly Resource[] = [
  { id: 'rutas', title: 'Navegación modular', category: 'Lectura', description: 'Localiza el módulo de búsqueda y sigue sus rutas hasta el listado y el detalle.' },
  { id: 'formularios', title: 'Formularios interactivos', category: 'Práctica', description: 'Escribe un carácter para comprobar el error del validador. Usa dos o más para filtrar.' },
  { id: 'gestos', title: 'Gestos táctiles', category: 'Práctica', description: 'Mantén pulsado el ícono de actualización para añadir un recurso al catálogo.' },
  { id: 'animaciones', title: 'Animaciones de interfaz', category: 'Práctica', description: 'Observa el giro del ícono al refrescar. La animación indica que se está actualizando el catálogo.' },
  { id: 'imagenes', title: 'Imágenes nativas', category: 'Lectura', description: 'Busca la imagen de libro en App_Resources y verifica cómo la referencia res:// funciona en Android e iOS.' },
  { id: 'dialogos', title: 'Diálogos de acción', category: 'Repaso', description: 'Abre el selector de categoría de un resultado y vuelve a abrirlo para comprobar la selección.' },
  { id: 'estilos', title: 'Estilos por plataforma', category: 'Lectura', description: 'Compara los estilos de las tarjetas de Plan de estudio en Android y en iOS.' },
  { id: 'persistencia', title: 'Persistencia local', category: 'Repaso', description: 'Cambia la categoría de un recurso y reinicia la app para comprobar que el cambio se conservó.' },
  { id: 'splash', title: 'Pantalla de arranque', category: 'Lectura', description: 'Compara el drawable de arranque y el tema para Android 12 y versiones posteriores.' },
];

@Injectable({ providedIn: 'root' })
export class CatalogService {
  private readonly resources = RESOURCES.map((resource) => ({
    ...resource,
    category: CATEGORIES.find((category) =>
      category === ApplicationSettings.getString(this.categoryKey(resource.id), '')
    ) ?? resource.category,
  }));

  private visibleCount = 3;

  get visibleResources(): Resource[] {
    return this.resources.slice(0, this.visibleCount);
  }

  find(id: string | null): Resource | undefined {
    return this.resources.find((resource) => resource.id === id);
  }

  addRandom(): Resource | undefined {
    const available = this.resources.length - this.visibleCount;
    if (!available) {
      return undefined;
    }

    const index = this.visibleCount + Math.floor(Math.random() * available);
    [this.resources[this.visibleCount], this.resources[index]] =
      [this.resources[index], this.resources[this.visibleCount]];
    this.visibleCount++;
    return this.resources[this.visibleCount - 1];
  }

  changeCategory(resource: Resource, category: Category): void {
    ApplicationSettings.setString(this.categoryKey(resource.id), category);
    resource.category = category;
  }

  private categoryKey(id: string): string {
    return 'catalog.category.' + id;
  }
}
