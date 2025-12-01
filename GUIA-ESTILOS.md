# 🎨 Guía de Estilos - Alberto Ochoa & Cía. S.A.S

## Paleta de Colores

### Colores de Marca
```css
Negro Corporativo: #1a1a1a
Rojo Corporativo:  #e31e24
Rojo Oscuro:       #b91820
Rojo Claro:        #ff4449
```

### Colores de Estado
```css
Éxito:     #10b981 (Verde)
Advertencia: #f59e0b (Amarillo)
Error:       #dc2626 (Rojo)
Información: #3b82f6 (Azul)
```

## Tipografía

- **Familia**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
- **Títulos H1**: 1.5rem (24px), Bold, Color: Blanco/Negro
- **Títulos H2**: 1.4rem (22px), Bold, Color: Negro (#1a1a1a)
- **Títulos H3**: 1.1rem (18px), Bold, Color: Rojo (#e31e24)
- **Texto normal**: 1rem (16px), Regular

## Espaciado

- **Padding cards**: 2rem (32px)
- **Padding formularios**: 1.5rem (24px)
- **Gap entre elementos**: 1rem (16px)
- **Border radius**: 12px (principal), 8px (secundario)

## Sombras

```css
Sombra pequeña:  0 1px 2px rgba(0, 0, 0, 0.05)
Sombra normal:   0 2px 4px rgba(0, 0, 0, 0.1)
Sombra media:    0 4px 8px rgba(0, 0, 0, 0.12)
Sombra grande:   0 10px 25px rgba(0, 0, 0, 0.15)
Sombra de marca: 0 4px 14px rgba(227, 30, 36, 0.3)
```

## Componentes Principales

### Header
- Fondo: Gradiente negro (#1a1a1a → #2a2a2a)
- Borde inferior: 3px rojo (#e31e24)
- Logo: Altura 50px (móvil: 35px)

### Botones
- **Primario**: Fondo rojo (#e31e24), texto blanco
- **Secundario**: Fondo negro (#1a1a1a), texto blanco
- Hover: Elevación con sombra
- Transición: 0.3s ease

### Tarjetas de Reporte
- Fondo: Blanco
- Borde izquierdo: 4px rojo
- Hover: Elevación y sombra aumentada
- Border radius: 12px

### Estados de Proceso

| Estado | Fondo | Color Texto | Borde |
|--------|-------|-------------|-------|
| REPORTE | #fef2f2 | Rojo (#e31e24) | Rojo claro |
| TÉCNICO ASIGNADO | #fffbeb | Café (#b45309) | - |
| ANÁLISIS | #eff6ff | Azul (#1e40af) | - |
| TALLER | #fdf4ff | Púrpura (#a21caf) | - |
| DIAGNÓSTICO | #f0fdf4 | Verde oscuro (#15803d) | - |
| REPARACIÓN | #fef3c7 | Café dorado (#a16207) | - |
| SEGUIMIENTO | #dcfce7 | Verde (#166534) | - |

## Animaciones

- **Transición normal**: 0.3s ease
- **Transición rápida**: 0.2s ease
- **Hover en cards**: translateY(-4px)
- **Hover en botones**: translateY(-2px)

## Responsive

### Mobile (< 768px)
- Header logo: 35px
- Font size reducido: 0.9rem - 1rem
- Padding reducido
- Grid: 1 columna

### Tablet (768px - 1024px)
- Grid: 2 columnas
- Padding normal

### Desktop (> 1024px)
- Grid: 3+ columnas
- Max-width contenedor: 1200px

## Accesibilidad

- Contraste mínimo: 4.5:1 (WCAG AA)
- Textos legibles: > 14px
- Áreas touch: > 44x44px
- Focus visible en formularios

## Iconografía

- Emojis para identificación rápida
- SVG para logo corporativo
- PNG para iconos de app (192px, 512px)

---

**Última actualización**: Diciembre 2025  
**Versión**: 1.0.0
