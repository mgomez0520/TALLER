# 📝 Ejemplos de Uso - Alberto Ochoa & Cía. S.A.S

## Escenarios Reales de Uso

---

## 📱 Caso 1: Conductor Reporta Falla

### Situación:
El conductor del vehículo 023 nota que el motor hace un ruido extraño.

### Pasos:
1. **Abrir la app** en su móvil
2. Ir a la pestaña **"Nuevo Reporte"**
3. Completar:
   - Número de vehículo: `023`
   - Conductor: `Juan Pérez`
   - Descripción: `Motor hace ruido extraño al acelerar, posible problema en la transmisión`
4. Tocar **"Crear Reporte"**
5. ✅ El reporte queda en estado **REPORTE**

### Resultado:
- Reporte #1 creado
- Estado: REPORTE
- Visible para supervisores

---

## 👤 Caso 2: Supervisor Asigna Técnico

### Situación:
El supervisor revisa los reportes nuevos y asigna un técnico.

### Pasos:
1. Ir a pestaña **"Lista"**
2. Ver el reporte del vehículo 023
3. **Tocar la tarjeta** del reporte
4. En el modal, ir a **"Actualizar Estado"**
5. Seleccionar: `TÉCNICO ASIGNADO`
6. Ingresar técnico: `Carlos Rodríguez`
7. Notas: `Técnico especialista en transmisiones asignado`
8. Tocar **"Actualizar"**

### Resultado:
- Estado: TÉCNICO ASIGNADO
- Técnico: Carlos Rodríguez
- Notificación al técnico (manual o futura automatización)

---

## 🔧 Caso 3: Técnico Realiza Análisis

### Situación:
Carlos revisa el vehículo y hace su diagnóstico inicial.

### Pasos:
1. En su móvil, buscar reporte del vehículo 023
2. Tocar el reporte
3. Cambiar estado a: `ANÁLISIS`
4. Notas: `Revisión preliminar indica posible falla en caja de cambios. Requiere inspección en taller especializado.`
5. **"Actualizar"**

### Resultado:
- Estado: ANÁLISIS
- Historial actualizado

---

## 🏭 Caso 4: Asignación a Taller

### Situación:
Se decide enviar el vehículo al taller de transmisiones.

### Pasos:
1. Supervisor abre el reporte
2. Cambia estado a: `TALLER`
3. Taller asignado: `Taller Central - Transmisiones`
4. Notas: `Vehículo enviado al taller central el 01/12/2025 a las 10:00 AM`
5. **"Actualizar"**

### Resultado:
- Estado: TALLER
- Taller: Taller Central - Transmisiones

---

## 🔍 Caso 5: Taller Entrega Diagnóstico

### Situación:
El taller completa la inspección y entrega diagnóstico.

### Pasos:
1. Personal del taller abre el reporte
2. Cambia estado a: `DIAGNÓSTICO`
3. Diagnóstico: `Falla confirmada en sincronizadores de 2da y 3ra velocidad. Requiere reemplazo de conjunto de sincronizadores y aceite de transmisión. Tiempo estimado: 2 días.`
4. ¿Requiere reparación?: **Sí**
5. Notas: `Cotización: $1,200,000 COP`
6. **"Actualizar"**

### Resultado:
- Estado: DIAGNÓSTICO
- Requiere reparación: Sí
- Siguiente paso: REPARACIÓN

---

## 🛠️ Caso 6A: Requiere Reparación

### Situación:
Se aprueba la reparación y se procede.

### Pasos:
1. Una vez aprobada la cotización
2. Cambiar estado a: `REPARACIÓN`
3. Notas: `Reparación aprobada. Inicio: 02/12/2025. Piezas solicitadas. Técnico: Miguel Ángel.`
4. **"Actualizar"**

### Resultado:
- Estado: REPARACIÓN
- En proceso de reparación

---

## ✅ Caso 6B: No Requiere Reparación

### Situación:
En otro caso, el diagnóstico indica que no hay problema serio.

### Ejemplo - Vehículo 045:
1. Diagnóstico: `Ruido era causado por piedra atrapada en protector de motor. Se removió. No requiere reparación.`
2. ¿Requiere reparación?: **No**
3. Estado siguiente: `SEGUIMIENTO`
4. Notas: `Vehículo listo para retornar a servicio. Monitorear en próximos días.`

### Resultado:
- Estado: SEGUIMIENTO
- No requiere reparación
- Listo para monitoreo

---

## 📊 Caso 7: Finalización - Seguimiento

### Situación:
Después de la reparación o inspección, se pasa a seguimiento.

### Pasos:
1. Vehículo 023 completó reparación
2. Cambiar estado a: `SEGUIMIENTO`
3. Notas: `Reparación completada exitosamente el 04/12/2025. Pruebas de ruta realizadas. Vehículo operando correctamente. Seguimiento por 1 semana.`
4. **"Actualizar"**

### Resultado:
- Estado: SEGUIMIENTO
- Proceso finalizado
- Monitoreo activo

---

## 🔍 Caso 8: Consultar Historial de Vehículo

### Situación:
Necesitas ver todos los reportes históricos de un vehículo.

### Pasos:
1. Ir a pestaña **"Nuevo Reporte"**
2. En la sección **"Buscar Reportes de un Vehículo"**
3. Ingresar: `023`
4. Tocar **"Buscar"**

### Resultado:
- Lista de todos los reportes del vehículo 023
- Ordenados por fecha (más reciente primero)
- Puedes ver el estado de cada uno

---

## 📈 Caso 9: Ver Estadísticas

### Situación:
El gerente quiere ver un resumen del estado del taller.

### Pasos:
1. Ir a pestaña **"Estadísticas"**
2. Ver dashboard con:
   - Total de reportes
   - Cantidad por estado
   - Distribución visual

### Ejemplo de Resultado:
```
Total de Reportes: 15

REPORTE: 2
TÉCNICO ASIGNADO: 3
ANÁLISIS: 1
TALLER: 2
DIAGNÓSTICO: 1
REPARACIÓN: 4
SEGUIMIENTO: 2
```

---

## 🔄 Caso 10: Múltiples Usuarios Simultáneos

### Situación:
Varios usuarios trabajando al mismo tiempo.

### Escenario:
- **Conductor 1** (móvil): Crea nuevo reporte vehículo 018
- **Supervisor** (tablet): Asigna técnico a vehículo 023
- **Técnico** (móvil): Actualiza análisis de vehículo 045
- **Taller** (PC): Ingresa diagnóstico de vehículo 012

### Resultado:
- Todos los cambios se guardan correctamente
- Cada usuario ve actualizaciones al refrescar
- No hay conflictos de datos

---

## 📱 Caso 11: Trabajo Offline

### Situación:
Técnico en zona sin señal necesita consultar información.

### Pasos:
1. Abre la app (previamente cargada)
2. Consulta reportes ya cargados
3. Ve información de vehículos
4. Cuando regresa la conexión:
   - Los datos se sincronizan automáticamente

### Limitaciones Offline:
- ⚠️ No se pueden crear reportes nuevos
- ⚠️ No se pueden actualizar estados
- ✅ Puedes consultar información ya cargada
- ✅ La interfaz sigue funcionando

---

## 🎯 Mejores Prácticas

### Para Conductores:
✅ Reportar inmediatamente cualquier anomalía  
✅ Ser específico en la descripción  
✅ Incluir síntomas exactos  
✅ Mencionar cuándo empezó el problema  

### Para Supervisores:
✅ Revisar reportes diariamente  
✅ Asignar técnicos según especialidad  
✅ Priorizar casos urgentes  
✅ Mantener comunicación con técnicos  

### Para Técnicos:
✅ Actualizar estado tan pronto como sea posible  
✅ Ser detallado en observaciones  
✅ Incluir recomendaciones  
✅ Documentar hallazgos importantes  

### Para Taller:
✅ Entregar diagnósticos completos  
✅ Especificar tiempo estimado  
✅ Incluir cotización si aplica  
✅ Actualizar si hay cambios  

---

## 📊 Flujo Completo - Ejemplo Real

### Vehículo 023 - Timeline Completo:

| Fecha/Hora | Estado | Usuario | Acción |
|------------|--------|---------|--------|
| 01/12 08:30 | REPORTE | Juan Pérez | Reporta ruido en motor |
| 01/12 09:00 | TÉCNICO ASIGNADO | Supervisor | Asigna a Carlos |
| 01/12 10:30 | ANÁLISIS | Carlos R. | Diagnóstico preliminar |
| 01/12 11:00 | TALLER | Supervisor | Envía a Taller Central |
| 02/12 14:00 | DIAGNÓSTICO | Taller | Confirma falla en transmisión |
| 02/12 15:00 | REPARACIÓN | Taller | Inicia reparación |
| 04/12 16:00 | SEGUIMIENTO | Taller | Reparación completada |

**Tiempo total**: 3 días  
**Estado final**: SEGUIMIENTO  
**Resultado**: Vehículo operativo  

---

## 🎓 Tips Avanzados

### 1. Filtrado Rápido
- Usa el filtro de estado para ver solo reportes específicos
- Ejemplo: Ver solo `REPARACIÓN` para saber qué está en proceso

### 2. Búsqueda por Vehículo
- Mantén historial completo de cada unidad
- Identifica vehículos con fallas recurrentes

### 3. Notas Detalladas
- Incluye fechas, horas, y detalles relevantes
- Esto ayuda en reportes futuros

### 4. Actualización Frecuente
- Toca "🔄 Actualizar" para ver cambios recientes
- Especialmente importante en trabajo colaborativo

---

**¡Estos ejemplos te ayudarán a sacar el máximo provecho del sistema!** 🚀
