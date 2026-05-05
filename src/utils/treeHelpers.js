import { generateId } from './idGenerator'

// 🟢 Crear departamento
export const createDepartment = () => ({
  department_id: generateId('dep'),
  department_name: 'Nuevo departamento',
  url: '',
  styles: {
    color: '#000000',
    negrita: false,
    curisva: false,
    subrayado: false
  },
  visibility: {
    desktop: true,
    mobile: true
  },
  categories: []
})

// 🟡 Crear categoría
export const createCategory = () => ({
  category_id: generateId('cat'),
  category_name: 'Nueva categoría',
  url: '',
  styles: {
    color: '#000000',
    negrita: false,
    curisva: false,
    subrayado: false
  },
  visibility: {
    desktop: true,
    mobile: true
  },
  subcategories: []
})

// 🔵 Crear subcategoría
export const createSubcategory = () => ({
  subcategory_id: Date.now(),
  subcategory_name: 'Nueva subcategoría',
  url: '',
  styles: {
    color: '#000000',
    negrita: false,
    curisva: false,
    subrayado: false
  },
  visibility: {
    desktop: true,
    mobile: true
  }
})
