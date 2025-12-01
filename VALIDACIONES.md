# 🔒 Validaciones Obligatorias del Sistema

## ✅ Proceso Secuencial y Obligatorio

El sistema implementa **validaciones estrictas** que garantizan que cada paso del proceso sea completado antes de avanzar al siguiente. **NO se puede saltar ningún paso** sin completar la información requerida.

---

## 📋 Campos Obligatorios por Estado

### 1️⃣ REPORTE → TÉCNICO ASIGNADO

**Campos Obligatorios:**
- ✅ Nombre del técnico

**Validaciones:**
- El campo no puede estar vacío
- No se puede avanzar sin asignar un técnico
- Mensaje de error si falta: *"Debe asignar un técnico antes de continuar"*

---

### 2️⃣ TÉCNICO ASIGNADO → ANÁLISIS

**Campos Obligatorios:**
- ✅ Debe existir técnico asignado (validado del paso anterior)

**Validaciones:**
- Verifica que el reporte tenga `tecnico_asignado`
- Si falta, muestra: *"No hay técnico asignado en el reporte anterior"*
- Bloquea el avance hasta completar el paso anterior

---

### 3️⃣ ANÁLISIS → TALLER

**Campos Obligatorios:**
- ✅ Taller de destino seleccionado
- ✅ Debe existir técnico asignado (heredado)

**Validaciones:**
- Verifica que se seleccione un taller
- Verifica que exista técnico asignado
- Mensaje de error: *"Debe seleccionar un taller antes de continuar"*

**Opciones de Taller:**
- Taller Principal
- Taller Norte
- Taller Sur
- Taller Especializado
- Taller Externo

---

### 4️⃣ TALLER → DIAGNÓSTICO

**Campos Obligatorios:**
- ✅ Diagnóstico completo (campo de texto)
- ✅ Decisión de reparación (Sí/No)
- ✅ Debe existir taller asignado (heredado)
- ✅ Debe existir técnico asignado (heredado)

**Validaciones:**
- El diagnóstico no puede estar vacío
- Debe seleccionar "Sí" o "No" para reparación
- Verifica datos de pasos anteriores
- Mensajes de error:
  - *"Debe ingresar el diagnóstico antes de continuar"*
  - *"Debe indicar si requiere reparación antes de continuar"*
  - *"El reporte debe tener un taller asignado"*

---

### 5️⃣ DIAGNÓSTICO → REPARACIÓN o SEGUIMIENTO

**Campos Obligatorios:**
- ✅ Notas de avance (explicando las acciones)
- ✅ Debe existir diagnóstico (heredado)
- ✅ Debe existir decisión de reparación (heredado)

**Validaciones Especiales:**
- **Si requiere reparación (Sí):**
  - DEBE pasar a REPARACIÓN
  - NO puede ir directo a SEGUIMIENTO
  - Error si intenta: *"El vehículo requiere reparación. Debe pasar primero por REPARACIÓN"*

- **Si NO requiere reparación:**
  - DEBE pasar a SEGUIMIENTO
  - NO puede ir a REPARACIÓN
  - Error si intenta: *"El vehículo no requiere reparación. Debe pasar directamente a SEGUIMIENTO"*

---

### 6️⃣ REPARACIÓN → SEGUIMIENTO

**Campos Obligatorios:**
- ✅ Notas sobre la reparación realizada (obligatorio)

**Validaciones:**
- Las notas no pueden estar vacías
- Debe documentar lo realizado
- Mensaje: *"Debe agregar notas sobre la reparación realizada"*

---

### 7️⃣ SEGUIMIENTO

**Estado Final**
- ✅ No requiere más acciones
- El formulario muestra: *"Este reporte ha completado el flujo de trabajo"*
- No hay botones de avance

---

## 🚫 Restricciones del Flujo

### No se puede saltar pasos

El sistema **valida estrictamente** que solo puedes avanzar al siguiente paso permitido:

```
REPORTE → Solo puede ir a → TÉCNICO ASIGNADO
TÉCNICO ASIGNADO → Solo puede ir a → ANÁLISIS
ANÁLISIS → Solo puede ir a → TALLER
TALLER → Solo puede ir a → DIAGNÓSTICO
DIAGNÓSTICO → Solo puede ir a → REPARACIÓN o SEGUIMIENTO*
REPARACIÓN → Solo puede ir a → SEGUIMIENTO
SEGUIMIENTO → Estado final (sin salida)
```

*La decisión entre REPARACIÓN y SEGUIMIENTO depende del campo "¿Requiere Reparación?"

### Mensaje de error por flujo incorrecto

Si intentas saltar un paso:
> *"No se puede cambiar de [ESTADO_ACTUAL] a [ESTADO_DESTINO]. Debe seguir el flujo establecido."*

---

## 🔍 Validaciones en Dos Niveles

### 1. Frontend (Interfaz)

- **Campos con `required`**: No permite enviar formulario vacío
- **Mensajes de ayuda**: Indican qué es obligatorio con ⚠️
- **Bloqueo visual**: Si faltan datos anteriores, muestra advertencia en lugar del formulario
- **Validación en tiempo real**: Antes de enviar al servidor

### 2. Backend (Servidor)

- **Validación robusta**: Verifica cada campo antes de actualizar
- **Protección de integridad**: No permite cambios que rompan el flujo
- **Mensajes claros**: Retorna errores descriptivos
- **Código HTTP 400**: Para errores de validación

---

## 📊 Indicadores Visuales

### Advertencias de Datos Faltantes

Si falta información del paso anterior, se muestra:

```
┌─────────────────────────────────────────┐
│  ⚠️ Faltan datos obligatorios           │
│                                          │
│  [Mensaje específico de qué falta]      │
│                                          │
│  Complete la información requerida      │
│  antes de poder avanzar al siguiente    │
│  paso.                                   │
└─────────────────────────────────────────┘
```

### Formularios con Campos Obligatorios

Todos los campos requeridos muestran:
- Asterisco `*` en la etiqueta
- Mensaje pequeño: `⚠️ Campo obligatorio - [descripción]`
- Placeholder descriptivo
- Validación HTML5 `required`

---

## ✅ Beneficios del Sistema de Validación

1. **Integridad de Datos**: Garantiza que no falte información crítica
2. **Trazabilidad Completa**: Cada paso queda documentado
3. **Prevención de Errores**: No se pueden crear reportes incompletos
4. **Claridad**: El usuario sabe exactamente qué falta
5. **Auditoría**: Todo cambio está registrado en el historial
6. **Cumplimiento**: Asegura seguir el proceso establecido

---

## 🎯 Resumen de Obligatoriedad

| Estado | ¿Se puede saltar? | Campos Obligatorios | Validado en |
|--------|-------------------|---------------------|-------------|
| REPORTE | ❌ NO | Técnico | Frontend + Backend |
| TÉCNICO ASIGNADO | ❌ NO | - | Backend |
| ANÁLISIS | ❌ NO | Taller | Frontend + Backend |
| TALLER | ❌ NO | Diagnóstico + Decisión | Frontend + Backend |
| DIAGNÓSTICO | ❌ NO | Notas | Frontend + Backend |
| REPARACIÓN | ❌ NO (si aplica) | Notas | Frontend + Backend |
| SEGUIMIENTO | ✅ Final | - | - |

---

## 🔐 Garantía de Calidad

El sistema **NO PERMITE**:
- ❌ Saltar pasos
- ❌ Avanzar con campos vacíos
- ❌ Modificar el flujo establecido
- ❌ Ir a estados incorrectos según la decisión de reparación

El sistema **SÍ GARANTIZA**:
- ✅ Proceso secuencial y ordenado
- ✅ Información completa en cada paso
- ✅ Validación en frontend y backend
- ✅ Mensajes claros de lo que falta
- ✅ Historial completo de cambios

---

**Última actualización:** 1 de diciembre de 2025  
**Versión:** 2.1 - Validaciones Obligatorias Implementadas
