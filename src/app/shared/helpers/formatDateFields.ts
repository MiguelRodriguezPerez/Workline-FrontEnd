import { format } from 'date-fns';

export function formatDateFields<T>(dto: T, fields: string[]): T {
  const updated: any = { ...dto };

  fields.forEach(field => {
    if (updated[field]) {
      updated[field] = format(new Date(updated[field]), "dd/MM/yyyy");
    }
  });

  return updated as T;
}
