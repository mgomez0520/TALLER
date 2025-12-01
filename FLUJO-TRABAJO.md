# 📋 Flujo de Trabajo - Sistema de Gestión de Taller

## 🔄 Proceso Completo de Atención

### Paso 1: REPORTE 📝
**Quién:** Conductor o responsable del vehículo  
**Acción:** Llamar o reportar la novedad

**En el sistema:**
1. Ir a "Nuevo Reporte"
2. Llenar formulario:
   - Número de Vehículo (requerido)
   - Conductor (opcional)
   - Descripción del problema (requerido)
3. Hacer clic en "Crear Reporte"

**Resultado:** Se crea un reporte en estado `REPORTE`

---

### Paso 2: TÉCNICO ASIGNADO 👤
**Quién:** Supervisor o encargado  
**Acción:** Asignar un técnico al caso

**En el sistema:**
1. Ir a "Lista" y hacer clic en el reporte
2. En el modal, ingresar el nombre del técnico
3. Hacer clic en "👤 Asignar Técnico"

**Resultado:** Estado cambia a `TÉCNICO ASIGNADO`

---

### Paso 3: ANÁLISIS 🔍
**Quién:** Técnico asignado  
**Acción:** Realizar análisis preliminar del vehículo

**En el sistema:**
1. Abrir el reporte
2. El técnico puede agregar notas sobre su análisis inicial
3. Hacer clic en "🔍 Iniciar Análisis"

**Resultado:** Estado cambia a `ANÁLISIS`

---

### Paso 4: TALLER 🔧
**Quién:** Técnico  
**Acción:** Decidir a qué taller enviar el vehículo

**En el sistema:**
1. Abrir el reporte
2. Seleccionar el taller de destino:
   - Taller Principal
   - Taller Norte
   - Taller Sur
   - Taller Especializado
   - Otro
3. Hacer clic en "🔧 Enviar a Taller"

**Resultado:** Estado cambia a `TALLER` y se registra el taller asignado

---

### Paso 5: DIAGNÓSTICO 📋
**Quién:** Personal del taller  
**Acción:** Emitir diagnóstico técnico completo

**En el sistema:**
1. Abrir el reporte
2. Ingresar el diagnóstico detallado
3. Seleccionar si requiere reparación:
   - ✅ Sí, requiere reparación
   - ❌ No requiere reparación (pasa a seguimiento)
4. Hacer clic en "📋 Registrar Diagnóstico"

**Resultado:** Estado cambia a `DIAGNÓSTICO`

---

### Paso 6A: REPARACIÓN ⚙️ (Si requiere)
**Quién:** Taller  
**Acción:** Realizar la reparación

**En el sistema:**
1. Abrir el reporte (que muestra el diagnóstico)
2. Agregar notas sobre las acciones realizadas
3. Hacer clic en "➡️ Continuar Proceso"

**Resultado:** 
- Si requiere reparación → Estado cambia a `REPARACIÓN`
- Después de reparación → Hacer clic en "📊 Pasar a Seguimiento"

---

### Paso 6B: SEGUIMIENTO 📊 (Si NO requiere reparación)
**Quién:** Supervisor  
**Acción:** Vehículo queda en monitoreo

**En el sistema:**
1. El reporte pasa automáticamente a `SEGUIMIENTO`
2. Se puede consultar el historial completo

**Resultado:** Estado final `SEGUIMIENTO`

---

## 📊 Diagrama de Flujo

```
REPORTE
   ↓ (Asignar Técnico)
TÉCNICO ASIGNADO
   ↓ (Realizar Análisis)
ANÁLISIS
   ↓ (Enviar a Taller)
TALLER
   ↓ (Emitir Diagnóstico)
DIAGNÓSTICO
   ↓
   ├─→ ¿Requiere Reparación?
   │
   ├─→ SÍ → REPARACIÓN → SEGUIMIENTO ✅
   │
   └─→ NO → SEGUIMIENTO ✅
```

---

## 🎯 Estados del Sistema

| Estado | Icono | Color | Descripción |
|--------|-------|-------|-------------|
| REPORTE | 📝 | Amarillo | Novedad reportada, esperando asignación |
| TÉCNICO ASIGNADO | 👤 | Azul | Técnico asignado al caso |
| ANÁLISIS | 🔍 | Morado | Técnico está analizando el vehículo |
| TALLER | 🔧 | Naranja | Vehículo enviado a taller |
| DIAGNÓSTICO | 📋 | Cyan | Taller emitió diagnóstico |
| REPARACIÓN | ⚙️ | Rojo | Vehículo en reparación |
| SEGUIMIENTO | 📊 | Verde | Vehículo en monitoreo final |

---

## 📝 Campos Importantes

### En cada estado se solicita:

**REPORTE →  TÉCNICO ASIGNADO**
- ✅ Nombre del técnico (requerido)
- ✅ Notas adicionales (opcional)

**TÉCNICO ASIGNADO → ANÁLISIS**
- ✅ Notas del análisis inicial (opcional)

**ANÁLISIS → TALLER**
- ✅ Taller de destino (requerido)
- ✅ Notas (opcional)

**TALLER → DIAGNÓSTICO**
- ✅ Diagnóstico completo (requerido)
- ✅ ¿Requiere reparación? (requerido)
- ✅ Notas (opcional)

**DIAGNÓSTICO → REPARACIÓN/SEGUIMIENTO**
- ✅ Notas de avance (requerido)

**REPARACIÓN → SEGUIMIENTO**
- ✅ Notas finales (requerido)

---

## 🔍 Visualización del Progreso

En el modal de cada reporte se muestra:

1. **Barra de progreso visual** con todos los estados
   - Estados completados: ✅ Verde
   - Estado actual: ⭕ Rojo (pulsando)
   - Estados pendientes: ⚪ Gris

2. **Información detallada**
   - Datos del vehículo
   - Fechas importantes
   - Asignaciones (técnico/taller)
   - Diagnóstico (si existe)
   - Notas históricas

3. **Formulario contextual**
   - Solo muestra los campos necesarios para el siguiente paso
   - Validaciones automáticas
   - Botones con textos descriptivos

---

## ✅ Ventajas del Sistema

1. **Trazabilidad completa**: Historial de todos los cambios
2. **Flujo guiado**: No permite saltar pasos
3. **Información centralizada**: Todo en un solo lugar
4. **Notificaciones claras**: Mensajes de éxito/error
5. **Responsive**: Funciona en móvil y escritorio
6. **PWA**: Instalable en dispositivos móviles

---

## 🎨 Características Visuales

- **Modo Claro/Oscuro**: Botón 🌙/☀️ en el header
- **Colores de marca**: Rojo #e31e24 y Negro #1a1a1a
- **Animaciones suaves**: Transiciones y efectos visuales
- **Indicadores de estado**: Colores distintivos por estado
- **Flujo visual**: Barra de progreso interactiva

---

**Fecha de actualización:** 1 de diciembre de 2025  
**Versión:** 2.0 - Flujo Completo Implementado
