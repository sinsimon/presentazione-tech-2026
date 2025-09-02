// Auto-discovery delle presentazioni: prende tutti i file .tsx in questa cartella
// Ogni file deve esportare default un componente React

// Vite: import.meta.glob
// Tipizziamo in modo lasco per evitare dipendenze extra
const modules: Record<string, any> = import.meta.glob('./*.tsx', { eager: true }) as any;

export const presentations = Object.entries(modules)
  .map(([path, mod]) => {
    const slug = path.replace('./', '').replace(/\.tsx$/, '');
    const component = (mod && (mod as any).default) as any;
    if (!component) return null;
    return { slug, component };
  })
  .filter(Boolean) as Array<{ slug: string; component: any }>;


